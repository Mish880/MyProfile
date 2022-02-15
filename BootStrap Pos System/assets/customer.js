/*This is Startup of the event*/
$("#btnSaveCustomer").click(function () {
     saveCustomer();
     clearAll();
     loadAllCustomers();
});

 /*Search Customer*/
$("#btnSearch").click(function () {
   var searchID = $("#txtSearchCusID").val();

   var response = searchCustomer(searchID);
   if(response) {
       $("#txtCusID").val(response.id);
       $("#txtName").val(response.name);
       $("#txtAddress").val(response.address);
       $("#txtContact").val(response.contact);
   }else{
       clearAll();
       alert("No  Such a Customer");
   }
});
  /*The End of the Event*/
   /*CRUD OPERATIONS IS START*/
  function loadAllCustomers() {
      $("#cusTable").empty();
         for (var i of  customerDB) {  /*Java Script's has a loop for is loop of java Script*/
           /*First create a html row*/
          let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.contact}</td></tr>`;
           /*Select the table body and append the row*/
          $("#cusTable").append(row);
      }
    }
function saveCustomer() {
    /*First gather the customer information*/
    let customerID = $("#txtCusID").val();
    let customerName = $("#txtName").val();
    let customerAddress = $("#txtAddress").val();
    let customerContact = $("#txtContact").val();

    /*Create a Object*/
    var customerObject = {
        id : customerID,
        name : customerName,
        address : customerAddress,
        contact : customerContact
    };
    customerDB.push(customerObject);
}

function searchCustomer(id) {
      for (let i = 0; i < customerDB.length; i++) {
          if(customerDB[i].id == id) {
              return customerDB[i];
          }
      }
  }

  function deleteCustomer() {

  }
  function updateCustomer() {

  }

  /*CRUD Operation ENDED*/

   /*Validation Strated (Regular Expressions)*/
   const cusIDRegEx = /^[C]{1}[0-9]{0,50}$/;
   const cusNameRegEx = /^[A-z]{3,20}$/;
   const cusAddressRegEx = /^[A-z]{3,20}$/;
   const cusContactRegEx = /^[1-9][0-9]*[0-9]{2}?$/;

   $('#txtCusID,#txtName,#txtAddress,#txtContact').on('keydown' , function (eventOb) {
       if (eventOb.key == "Tab") {
           eventOb.preventDefault(); /*This is a Stop execution of the button*/
       }
   });

   $('#txtCusID,#txtName,#txtAddress,#txtContact').on('blur',function () {
      fromVaild();
   });

   $("#txtCusID").on('keyup',function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfVaild();
    }
    if (eventOb.key == "Control") {
        var typeCustomerID = $("#txtCusID").val();
        var srcCustomer = searchCustomerFromID(typeCustomerID);
        $("#txtCusID").val(srcCustomer.getCustomerID());
        $("#txtName").val(srcCustomer.getCustomerName());
        $("#txtAddress").val(srcCustomer.getCustomerAddress());
        $("#txtContact").val(srcCustomer.getCustomerContact());
    }

   });

   $("#txtName").on('keyup', function (eventOb) {
     setButton();
     if (eventOb.key == "Enter") {
         checkIfVaild();
     }
   });

   $("#txtAddress").on('keyup' , function (eventOb) {
      setButton();
      if (eventOb.key == "Enter") {
          checkIfVaild();
      }
   });

   $("#txtContact").on('keyup' , function (eventOb) {
      setButton();
      if (eventOb.key == "Enter") {
          checkIfVaild();
      }
   });
   /*Focuing the events end*/
   $("#btnSaveCustomer").attr('disabled',true);

   function clearAll() {
       $('#txtCusID,#txtName,#txtAddress,#txtContact').val("");
       $('#txtCusID,#txtName,#txtAddress,#txtContact').css('border','2px solid #ced4da');
       $('#txtCusID').focus();
       $("#btnSaveCustomer").attr('disabled', true);
       loadAllCustomers();
       $("#lblcusid,#lblcusname,#lblcusaddress,#lblcuscontact").text("");
   }

   function fromVaild() {
       var cusId = $("#txtCusID").val();
       $("#txtCusID").css('border' , '2px Solid green');
       $("#lblcusid").text("");
       if(cusIDRegEx.test(cusId)) {
           var cusName = $("#txtName").val();
           if (cusNameRegEx.test(cusName)) {
               $("#txtName").css('border', '2px solid green');
               $("#lblcusname").text("");
               var cusAddress = $("#txtAddress").val();
               if(cusAddressRegEx.test(cusAddress)) {
                   var cusContact  = $("#txtContact").val();
                   var resp = cusContactRegEx.test(cusContact);
                   $("#txtAddress").css('border' , '2px solid green');
                   $("#lblcusaddress").text("");
                   if (resp) {
                       $("#txtContact").css('border' , '2px solid green');
                       $("#lblcuscontact").text("");
                       return true;
                   } else {
                       $("#txtContact").css('border' , '2px solid red');
                       $("#lblcuscontact").text("Your Contact is reqired field : pattern +9412345 or 200");
                       return false;
                   }
               } else {
                   $("#txtAddress").css('border' , '2px solid red');
                   $("#lblcusaddress").text("Your Address is a required field : Mimum 7");
                   return false;
               }
           } else {
               $("#txtName").css('border', '2px solid red');
               $("#lblcusname").text("Your Name is a required field : Mimimum 5 , Max 20 , Spaces Allowed");
               return false;
           }
       } else {
           $("#txtCusID").css('border' , '2px solid red');
           $("#lblcusid").text("Your ID is a required field : Pattern C001");
           return false;
       }
   }

   function checkIfVaild() {
       var cusID = $("#txtCusID").val();
       if(cusIDRegEx.test(cusID)) {
           $("#txtName").focus();
           var cusName = $("#txtName").val();
           if(cusNameRegEx.test(cusName)) {
               $("#txtAddress").focus();
               var cusAddress = $("#txtAddress").val();
               if (cusAddressRegEx.test(cusAddress)) {
                   $("#txtContact").focus();
                   var cusContact = $("#txtContact").val();
                   var resp  = cusContactRegEx.test(cusContact);
                   if(resp) {
                       let res = confirm("Do you want to add this Customer...?");
                       if(res) {
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

       function setButton() {
           let b = fromVaild();
           if (b) {
               $("#btnSaveCustomer").attr('disabled',false);
           } else {
               $("#btnSaveCustomer").attr('disabled',true);
           }
       }
      $('#btnSaveCustomer').click(function () {
          checkIfVaild();
      });
