
/*Events Started*/
$("#btnSaveCustomer").click(function () {
    saveCustomer();
    clearAll();
    loadAllCustomers();
});
/*This is Search Customer*/
function searchCustomer(searchId){
   for (var i = 0; i < customerDB.length; i++) {
       if (customerDB[i].getId() == searchId) {
           return customerDB[i];
       }
   }
}
/*This is Search Cus in table*/
function searchCustomerByTable(searchId) {
   var customer = searchCustomer(searchId);
   let foundOrNot = false;
   if (customer) {
       var id = customer.getId();
       var name = customer.getName();
       var address = customer.getAddress();
       var contact = customer.getContact();

       $("#cusTable").empty();

       let tableRow = `<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${contact}</td></tr>`
       $("#cusTable").append(tableRow);
       foundOrNot = true;
   }
   if (foundOrNot == false) {
       alert("Customer Not Found");
       loadAllCustomers();
   }
}

/*This Event is End*/

function loadAllCustomers() {
    $("#cusTable").empty();
    for (var i = 0; i <customerDB.length;i++) {
        /*create a html row*/
        let row = `<tr><td>${customerDB[i].getId()}</td><td>${customerDB[i].getName()}</td><td>${customerDB[i].getAddress()}</td><td>${customerDB[i].getContact()}</td></tr>`
        /*select the table body and append the row*/
        $("#cusTable").append(row);
    }
}
function saveCustomer() {
    /*gather customer information*/
    let customerID = $("#txtCusID").val();
    let customerName = $("#txtName").val();
    let customerAddress = $("#txtAddress").val();
    let customerContact = $("#txtContact").val();

    /*create Object*/
    var customerObject = new CustomerDTO(customerID,customerName,customerAddress,customerContact);
    customerDB.push(customerObject);

    /*var customerObject ={
        cid:customerID,
        cname:customerName,
        caddress:customerAddress,
        contact:customerContact*/
}
 function searchCustomer(id) {
     for(let i = 0; i < customerDB.length; i++) {
         if(customerDB[i].id == id) {
             return customerDB[i];
         }
     }
}

 function deleteCustomer() {
     /*write the code*/
 }

 function updateCustomer() {
    /*write the code*/
 }

   /*CRUD OPERATIONS ENDED*/
  /*Validation Started*/  /*This is used for regular expressions*/
   const cusIdRegEx = /^[C]{1}[0-9]{0,50}$/;
   const cusNameRegEx =  /^[A-z]{3,20}$/;
   const cusAddressRegEx = /^[A-z]{3,20}$/;
   const cusContactRegEx = /^[1-9][0-9]*[0-9]{2}?$/;

   $('#txtCusID,#txtName,#txtAddress,#txtContact').on('keydown', function (eventDb) {
        if(eventDb.key == "Tab") {
            eventDb.preventDefault(); /*This is a Stop execution pf the button*/
        }
   });
   $('#txtCusID,#txtName,#txtAddress,#txtContact').on('blur',function () {
       formvaild();
   });

   /*This is focusing the events*/
  $("#txtCusID").on('keyup' , function (eventDb) {
      setButton();
      if (eventDb.key == "Enter") {
          checkIfValid();
      }

      if (eventDb.key == "Control") {
          var typedCustomerID = $("#txtCusID").val();
          var srcCustomer = searchCustomerFromID(typedCustomerID);
          $("#txtCusID").val(srcCustomer.getCustomerID());
          $("#txtName").val(srcCustomer.getCustomerName());
          $("#txtAddress").val(srcCustomer.getCustoemrAddress());
          $("#txtContact").val(srcCustomer.getCustomerContact());
      }
  });

  $("#txtName").on('keyup' , function (eventDb) {
      setButton();
      if (eventDb.key =="Enter") {
          checkIfValid();
      }
  });

  $("#txtAddress").on('keyup' ,function (eventDb) {
      setButton();
      if (eventDb.key == "Enter") {
          checkIfValid();
      }
  });

  $("#txtContact").on('keyup',function (eventDb){
      setButton();
      if (eventDb.key == "Enter") {
          checkIfValid();
      }
  });
  /*focusing events end*/
$("#btnSaveCustomer").attr('disabled' , true);

function clearAll() {
    $('#txtCusID,#txtName,#txtAddress,#txtContact').val("");
    $('#txtCusID,#txtName,#txtAddress,#txtContact').css('border', '2px solid #ced4da');
    $('#txtCusID').focus();
    $("#btnSaveCustomer").attr('disabled', true);
    loadAllCustomers();
    $("#lblcusid,#lblcusname,#lblcusaddress,#lblcuscontact").text("");
}

function formvaild() {
    var cusID = $("#txtCusID").val();
    $("#txtCusID").css('border' , '2px solid green');
    $("#lblcusid").text("");
    if (cusIdRegEx.test(cusID)) {
        var cusName = $("#txtName").val();
        if (cusNameRegEx.test(cusName)) {
            $("#txtName").css('border', '2px solid green');
            $("#lblcusname").text("");
            var cusAddress = $("#txtAddress").val();
            if (cusAddressRegEx.test(cusAddress)) {
                var cusContact = $("#txtContact").val();
                var resp = cusContactRegEx.test(cusContact);
                $("#txtAddress").css('border' , '2px solid green');
                $("#lblcusaddress").text("");
                if (resp) {
                    $("#txtContact").css('border' , '2px solid green');
                    $("#lblcuscontact").text("");
                    return true;
                } else {
                    $("#txtContact").css('border', '2px solid red');
                    $("#lblcuscontact").text("Your Contact is requided field : pattern +9412345 or 200");
                    return false;
                 }
                } else {
                   $("#txtAddress").css('border' , '2px solid red');
                   $("#lblcusaddress").text("Your Address is a required field : Mimum 7");
                   return false;
                }
            } else {
            $("#txtName").css('border' , '2px solid red');
            $("#lblcusname").text("Your name is required field : Mimimum 5, Max 20 , Spaces Allowed");
            return false;
         }
    } else {
        $("#txtCusID").css('border','2px solid red');
        $("#lblcusid").text("Your ID is a required field : Pattern C000");
        return false;
    }
}
    function checkIfValid() {
       var cusID = $("#txtCusID").val();
       if(cusIdRegEx.test(cusID)) {
           $("#txtName").focus();
           var cusName = $("#txtName").val();
           if(cusNameRegEx.test(cusName)) {
               $("#txtAddress").focus();
               var cusAddress = $("#txtAddress").val();
               if (cusAddressRegEx.test(cusAddress)) {
                   $("#txtContact").focus();
                   var cusContact = $("#txtContact").val();
                   var resp = cusContactRegEx.test(cusContact);
                   if (resp) {
                       let res = confirm("Do you really need to add this customer..?");
                       if (res) {
                           saveCustomer();
                           clearAll();
                       }
                   } else {
                       $("#txtContact").focus();
                   }
               } else {
                   $("#txtAddress").focus();
               }
           } else {
               $("#txtName").focus();
           }
        } else {
           $("#txtCusID").focus();
       }
   }
   $("#txtSearchCusID").on('keyup' , function (event) {
     if (event.key == "Enter") {
         var cusId = $("#txtSearchCusID").val();
         searchCustomerByTable(cusId);
     }
   });

   $("#btnSearchCustomer").click(function () {
     var cusId = $("#txtSearchCusID").val();
     searchCustomerByTable();
   });

   function setButton() {
        let b = formvaild();
        if (b) {
            $("#btnSaveCustomer").attr('disabled' , false);
        } else {
            $("#btnSaveCustomer").attr('disabled' , true);
        }
   }
   $('#btnSaveCustomer').click(function () {
       checkIfValid();
   });
  /*Vaildation Ended*/
