/*Item Event Start*/
$("#btnSaveItem").click(function () {
    saveItem();
    clearAllItem();
    loadAllItems();
});

/*Search Items*/
$("#btnSearchItem").click(function () {
     var searchID = $("#txtSearchItemID").val();

     var response = searchItem(searchID);
     if (response) {
         $("#txtItemID").val(response.itemID);
         $("#txtItemName").val(response.itemName);
         $("#txtInStock").val(response.itemStock);
         $("#txtItemSalary").val(response.itemSalary);
     } else {
         clearAllItem();
         alert("No Such a Item");
     }
 });
/*Events End*/

/*CRUD OPERATIONS START*/
function loadAllItems() {
      $("#itemTable").empty();
      for (var i = 0; i < itemDB.length; i++) {
          /*Firstly Create a HTML ROW */
       let row = `<tr><td>${itemDB[i].getCode()}</td><td>${itemDB[i].getItemName()}</td><td>${itemDB[i].getItemstock()}</td><td>${itemDB[i].getItemsalary()}</td></tr>`
       /*select the table body and append the row*/
          $("#itemTable").append(row);
      }
      $("#itemTable>tr").click(function () {
          $("#txtItemID").val($(this).children(":eq(0)").text());
          $("#txtItemName").val($(this).children(":eq(1)").text());
          $("#txtInStock").val($(this).children(":eq(2)").text());
          $("#txtItemSalary").val($(this).children(":eq(3)").text());
      });
}
     /*Create update*/
       $("#btnUpdateItem").click(function () {
           for (var k in itemDB){
               if ($("#txtItemID").val() == itemDB[k].getCode()){
                   let itemID = $("#txtItemID").val();
                   let itemName = $("#txtItemName").val();
                   let itemStock = $("#txtInStock").val();
                   let itemSalary = $("#txtItemSalary").val();

                   var itemObject = new ItemDTO(itemID,itemName,itemStock,itemSalary);
                   itemDB[k].setItemName(itemObject.getItemName());
                   itemDB[k].setItemstock(itemObject.getItemstock());
                   itemDB[k].setItemsalary(itemObject.getItemsalary());
               }
           }
           loadAllItems();
       });
       /*End of the Update Event*/

       /*Butten Delete*/
      $("#btnDeleteItems").click(function () {
          for (var k in itemDB) {
              if ($("#txtItemID").val() == itemDB[k].getCode()){
                  itemDB.splice(k,1);
              }
          }
         loadAllItems();
      });
      /*End of the Button Delete option*/

function saveItem() {
    /*Gather the Item Information*/
    let itemID = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemStock = $("#txtInStock").val();
    let itemSalary = $("#txtItemSalary").val();

    /*Create Object */
    var itemObject = new ItemDTO(itemID,itemName,itemStock,itemSalary);
    itemDB.push(itemObject);
    /*var itemObject = {
        Itemid : itemID,
        Itemname : itemName,
        ItemStock : itemStock,
        ItemSalary : itemSalary*/
}
function searchItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].Itemid == id) {
            return itemDB[i];
        }
    }
}

function deleteItem() {
    /*Write This Code*/
}
function updateItem() {
   /*Write This Code*/
}
/*CRUD OPERATIONS ENDED*/

/*Vaildation Started*/
/*Item Regular Expressions*/

const itemIDRegEx = /^[I]{1}[0-9]{0,50}$/;
const itemTypeRegEx = /^[A-z]{3,20}$/;
const itemStockRegEx = /^[0-9]{1,4}?$/;
const itemSalaryRegEx = /^[1-9][0-9]*[0-9]{2}?$/;

$('#txtItemID,#txtItemName,#txtInStock,#txtItemSalary').on('keydown', function (eventDb) {
     if (eventDb.key == "Tab") {
         eventDb.preventDefault(); /*This is execution of the button*/
     }
});
$('#txtItemID,#txtItemName,#txtInStock,#txtItemSalary').on('blur' , function () {
    IfromVaild();
});

/*This is focusing Events*/
$("#txtItemID").on('keyup' , function (eventDb) {
    setItemButton();
    if (eventDb.key == "Enter") {
        ItemcheckIfvaild();
    }

    if (eventDb.key == "Control") {
        var typedItemID = $("#txtItemID").val();
        var srcItem = searchItemFromID(typedItemID);
        $("#txtItemID").val(srcItem.getItemID());
        $("#txtItemName").val(srcItem.getItemsName());
        $("#txtInStock").val(srcItem.getItemStock());
        $("#txtItemSalary").val(srcItem.getItemSalary());
    }
});

$("#txtItemName").on('keyup' , function (eventDb) {
    setItemButton();
    if (eventDb.key == "Enter") {
        ItemcheckIfvaild();
    }
});

$("#txtInStock").on('keyup' , function (eventDb) {
    setItemButton();
    if (eventDb.key == "Enter") {
        ItemcheckIfvaild();
    }
});

$("#txtItemSalary").on('keyup' , function (eventDb) {
    setItemButton();
    if (eventDb.key == "Enter") {
        ItemcheckIfvaild();
    }
});
/*focusing events to end*/
$("#btnSaveItem").attr('disabled', true);

function  clearAllItem() {
    $('#txtItemID,#txtItemName,#txtInStock,#txtItemSalary').val("");
    $('#txtItemID,#txtItemName,#txtInStock,#txtItemSalary').css('border' , '2px solid #ced4da');
    $('#txtItemID').focus();
    $("#btnSaveItem").attr('disabled', true);
    loadAllItems();
    $("#lblItemId,#lblItemType,#lblItemStock,#lblItemSalary").text("");
}
function IfromVaild() {
    var itemId = $("#txtItemID").val();
    $("#txtItemID").css('border' , '2px solid green');
    $("#lblItemId").text("");
    if(itemIDRegEx.test(itemId)) {
        var itemType = $("#txtItemName").val();
        if (itemTypeRegEx.test(itemType)) {
            $("#txtItemName").css('border', '2px solid green');
            $("#lblItemType").text("");
            var itemStock = $("#txtInStock").val();
            if (itemStockRegEx.test(itemStock)) {
                var itemSalary = $("#txtItemSalary").val();
                var resp = itemSalaryRegEx.test(itemSalary);
                $("#txtInStock").css('border', '2px solid green');
                $("#lblItemStock").text("");
                if (resp) {
                    $("#txtItemSalary").css('border', '2px solid green');
                    $("#lblItemSalary").text();
                    return true;

                } else {
                    $("#txtItemSalary").css('border', '2px solid red');
                    $("#lblItemSalary").text("Item Salary is required field : pattern 100.00 or 100");
                    return false;
                }
            } else {
                $("#txtInStock").css('border', '2px solid red');
                $("#lblItemStock").text("Item Type is required field : pattern 100");
                return false;
            }
        } else {
            $("#txtItemName").css('border', '2px solid red');
            $("#lblItemType").text("Item Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            return false;
        }
    }else {
           $("#txtItemID").css('boder' , '2px solid red');
           $("#lblItemId").text("Item ID is a required field  : Pattern I00");
           return false;
    }
}
     function  ItemcheckIfvaild() {
         var itemID = $("#txtItemID").val();
         if (itemIDRegEx.test(itemID)) {
             $("#txtItemName").focus();
             var itemType = $("#txtItemName").val();
             if (itemTypeRegEx.test(itemType)) {
                 $("#txtInStock").focus();
                 var itemStock = $("#txtInStock").val();
                 if (itemStockRegEx.test(itemStock)) {
                     $("#txtItemSalary").focus();
                     var itemSalary = $("#txtItemSalary").val();
                     var resp = itemSalaryRegEx.test(itemSalary);
                     if (resp) {
                         let res = confirm("Do you really need to add this Item..?");
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

  function setItemButton() {
       let b = IfromVaild();
       if (b) {
           $("#btnSaveItem").attr('disabled' , false);
       } else {
           $("#btnSaveItem").attr('disabled' , true);
       }
    }

    $('#btnSaveItem').click(function () {
          ItemcheckIfvaild();
    });






