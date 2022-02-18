
/*Item Part Java Script is Started*/

$("#btnSaveItem").click(function () {
    saveItem();
    clearAllItem();
    loadAllItems();
});

$("#btnSearch").click(function () {
    var searchID = $("#txtSearchItemID").val();

    var response = searchitem(searchID);
    if (response){
        $("#txtItemID").val(response.id);
        $("#txtItemName").val(response.Type);
        $("#txtInStock").val(response.stock);
        $("#txtItemSalary").val(response.salary);
    } else {
        clearAllItem();
        alert("No Such a Item");
    }
});
/*Events End*/
/*Crud is Started*/
function loadAllItems() {
    $("#itemTable").empty();
    for (var k of itemDB) {

        let row = `<tr><td>${k.Id}</td><td>${k.Type}</td><td>${k.stock}</td><td>${k.salary}</td></tr>`;

        $("#itemTable").append(row);
    }
}

function saveItem() {
    let itemId = $("#txtItemID").val();
    let itemType = $("#txtItemName").val();
    let itemStock = $("#txtInStock").val();
    let itemSalary = $("#txtItemSalary").val();

    var itemObject = {
        Id : itemId,
        Type : itemType,
        stock : itemStock,
        salary : itemSalary

    };
    itemDB.push(itemObject);
}

function searchitem(id) {
    for (let k = 0; k < itemDB.length; k++) {
        if(itemDB[k].Id ==id) {
            return itemDB[k];
        }
    }
}

function deleteItem() {

}

function updateItem() {

}

 /*CRUD OPERATIONS ENDED*/

 /*validation started*/
 /*item regular Expressions Started*/
  const itemIDRegEX = /^[R]{1}[0-9]{0,50}$/;
  const itemTypeRegEX = /^[A-z]{3,20}$/;
  const itemStockRegEX = /^[0-9]{1,4}?$/;
  const itemSalaryRegEX = /^[1-9][0-9]*[0-9]{2}?$/;

  $('#txtItemID,#txtItemName,#txtInStock,#txtItemSalary').on('keydown' , function (eventOb) {
       if (eventOb.key == "Tab") {
           eventOb.preventDefault(); /*Stop execution of the button */
       }
  });
  $("#txtItemID,#txtItemName,#txtInStock,#txtItemSalary").on('blur' , function (eventOb) {
       ItemformVaild();
  });
  $("#txtItemID").on('keyup' , function (eventOb) {
     setButtonI();
     if (eventOb.key == "Enter") {
         IcheckIfVaild();

     }
     if (eventOb.key == "Control") {
         var typedItemID = $("#txtItemID").val();
         var srcItem = searchitemFormID(typedItemID);
         $("#txtItemID").val(srcItem.getItemID());
         $("#txtItemName").val(srcItem.getItemType());
         $("#txtInStock").val(srcItem.getItemInStock());
         $("#txtItemSalary").val(srcItem.getItemSalary());
     }

  });

  $("#txtItemName").on('keyup' , function (eventOb) {
      setButtonI();
      if (eventOb.key == "Enter") {
          IcheckIfVaild();
      }
  });
  $("#txtInStock").on('keyup' , function (eventOb) {
     setButtonI();
      if (eventOb.key == "Enter") {
          IcheckIfVaild();
      }
  });

  $("#txtItemSalary").on('keyup' ,function (eventOb) {
      setButtonI();
      if (eventOb.key == "Enter") {
          IcheckIfVaild();
      }
  });

  /*focusing events to end*/
 $("#btnSaveItem").attr('disabled' , true);

  function  clearAllItem() {
       $('#txtItemID,#txtItemName,#txtInStock,#txtItemSalary').val("");
       $('#txtItemID,#txtItemName,#txtInStock,#txtItemSalary').css('border' , '2px solid #ced4da');
       $('#txtItemID').focus();
       $("#btnSaveItem").attr('disabled' , true);
       loadAllItems();
       $("#lblItemId,#lblItemType,#lblItemStock,#lblItemSalary").text("");
  }

  function ItemformVaild() {
      var itemID = $("#txtItemID").val();
      $("#txtItemID").css('border' , '2px solid green');
      $("#lblItemId").text("");
      if (itemIDRegEX.test(itemID)) {
          var itemType = $("#txtItemName").val();
          if(itemTypeRegEX.test(itemType)) {
              $("#txtItemName").css('border','2px solid green');
              $("#lblItemType").text("");
              var itemStock = $("#txtInStock").val();
              if (itemStockRegEX.test(itemStock)) {
                  var itemSalary = $("#txtItemSalary").val();
                  var resp =  itemSalaryRegEX.test(itemSalary);
                  $("#txtInStock").css('border' , '2px solid green');
                  $("#lblItemStock").text();
                  if(resp) {
                      $("#txtItemSalary").css('border','2px solid green');
                      $("#lblItemSalary").text("");
                      return true;
                    } else {
                      $("#txtItemSalary").css('border','2px solid red');
                      $("#lblItemSalary").text("Item Salary is required field : Pattern 100.00 or 100");
                      return false;
                  }
              } else {
                  $("#txtInStock").css('border','2px solid red');
                  $("#lblItemStock").text("Item Type is required field : pattern 100")
                  return false;
              }
          } else {
              $("#txtItemName").css('border','2px solid red');
              $("#lblItemType").text("Item Name is a required field :Mimum 5, Max 20,Spaces Allowed");
              return false;
          }
      } else {
          $("#txtItemID").css('border' ,'2px solid red');
          $("#lblItemId").text("Item id is required field : Pattern I00");
          return false;
      }

  }

    function IcheckIfVaild() {
       var itemID = $("#txtItemID").val();
       if (itemIDRegEX.test(itemID)) {
           $("#txtItemName").focus();
           var itemType = $("#txtItemName").val();
           if (itemTypeRegEX.test(itemType)) {
               $("#txtInStock").focus();
            var itemInStock = $("#txtInStock").val();
            if (itemStockRegEX.test(itemInStock)) {
                $("#txtItemSalary").focus();
                var itemSalary = $("#txtItemSalary").val();
                var resp = itemSalaryRegEX.test(itemSalary);
                if(resp) {
                    let res = confirm("Do you really need to add this customer..?");
                    if (res) {
                        saveItem();
                        clearAllItem();
                    }
                } else {
                    $("#txtItemSalary").focus();
                }
            } else {
                $("#txtInStock").focus();
            }
           } else {
               $("#txtItemName").focus();
           }
       } else {
           $("#txtItemID").focus();
       }
    }
    function setButtonI() {
       let b = ItemformVaild();
       if(b) {
           $("#btnSaveItem").attr('disabled' , false);
       } else {
           $("btnSaveItem").attr('disabled' , true);
       }
  }
   $('#btnSaveItem').click(function () {
          IcheckIfVaild();
   });
   /*Vaildation Ended*/

