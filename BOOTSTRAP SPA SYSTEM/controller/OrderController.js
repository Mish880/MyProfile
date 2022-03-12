//
// /*place Order Startup*/
// $('#txtOrderDate').val(new Date().toISOString().slice(0,10));
// $("#btnAddToCart").prop('disabled',true);
// $("#btnPlaceOrder").prop('disabled',true);
// let regBuyItemQty = /^[0-9]{1,}$/;
//
// /*Make a Order Id*/
// function generateOId() {
//     if (OrderDB.length == 0) {
//         $("#ORDERID").val("0-0001");
//     } else if (OrderDB.length > 0) {
//         var orderId = OrderDB[OrderDB.length - 1].getOrderId().split("-")[1];
//         var tempId = parseInt(orderId);
//         tempId = tempId + 1;
//         if (tempId <= 9) {
//             $("#ORDERID").val("O-000" + tempId);
//         } else if (tempId <=99) {
//             $("#ORDERID").val("O-00" + tempId);
//         } else if (tempId <=999) {
//             $("#ORDERID").val("O-0" + tempId);
//         } else if (tempId <= 9999) {
//             $("#ORDERID").val("O-" + tempId);
//         }
//     }
//  }

  /*This Customer form*/
function loadCustomerCord(){
     $("#cmbSelectCustomerId > option").remove();
    for (var i in customerDB){
        let code = customerDB[i].getId();
        let cust = `<option>${code}</option>`
        $("#cmbSelectCustomerId").append(cust);

        $("#cmbSelectCustomerId > option").click(function () {

            SelectCustomerID($(this).text());
        });
    }
}

 function SelectCustomerID(){
   for (var i in customerDB){
       console.log(arguments[0]);
       if (customerDB[i].getId() == arguments[0]) {
           $("#CUSTOMERNAME").val(customerDB[i].getName());
       }
   }
}
$("#OrderBtn").click(function () {
    loadCustomerCord();
});

  function loadItemCord() {
    $("#cmbitemcode > option").remove();
    for (var i in itemDB) {
        let icode = itemDB[i].getCode();
        let item = `<option>${icode}</option>`
        $("#cmbitemcode").append(item);

        $("#cmbitemcode > option").click(function () {

            SelectItemID($(this).text());

        });
    }
  }
  function SelectItemID() {
      for (var i in itemDB) {
          if (itemDB[i].getCode() == arguments[0]){
              $("#ITEMNAME").val(itemDB[i].getItemName)
          }
      }
   }
   $("#OrderBtn").click(function () {
       loadItemCord();
   });


//  /*$("#cmbSelectCustomerId").change(function () {
//     var id = $("#cmbSelectCustomerId").find('option:selected').text();
//     var found = false;
//     for (var i = 0; i < customerDB.length; i++) {
//         if (customerDB[i].getId() == id) {
//             $("#CUSTOMERNAME").val(customerDB[i].getName());
//             $("#CUSTOMERADDRESS").val(customerDB[i].getAddress());
//             $("#CONTACT").val(customerDB[i].getContact());
//             var code = $("#cmbitemcode").find('option:selected').text();
//             if (code !="-Select Item-" && $("#ORDERQUANTITY").val() != '') {
//                 $("#btnAddToCart").prop('disabled' , false);
//             }
//             found = true;
//         }
//     }
//     if (found == false) {
//         $("#CUSTOMERNAME").val("");
//         $("#CUSTOMERADDRESS").val("");
//         $("#CONTACT").val("");
//         $("#btnAddToCart").prop('disabled' ,true);
//     }
//  });
//
//  /*Item Form*/
// $("#cmbitemcode").change(function () {
//       var code = $("#cmbitemcode").find('option:selected').text();
//       var found = false;
//       for (var i = 0; i < itemDB.length; i++) {
//           if(itemDB[i].getCode() == code) {
//               $("#ITEMNAME").val(itemDB[i].getItemName());
//               $("#ITEMSALARY").val(itemDB[i].getItemsalary());
//               let qtyOnHand = parseInt(itemDB[i].getItemstock());
//
//            var changedTemQty = false;
//           for (var j = 0; j < CartDB[j].length; j++) {
//               if (CartDB[j].getCode() == code) {
//                  let cartQty = CartDB[j].getBuyQTY();
//                  let tempQty = qtyOnHand - cartQty;
//                  $("#ORDERQUANTITY").val(tempQty);
//                  changedTemQty = true;
//               }
//           }
//               if (changedTemQty == false) {
//                   $("#ORDERQUANTITY").val(itemDB[i].getItemstock())
//               }
//
//               var id = $("#cmbSelectCustomerId").find('option:selected').text();
//               if (id != "-select Customer-" && $("#ORDERQUANTITY").val() !='') {
//                   $("#btnAddToCart").prop('disabled' , false);
//               }
//               found = true;
//
//           }
//       }
//       if (found == false) {
//           $("#ITEMNAME").val("");
//           $("#ITEMSALARY").val("");
//           $("#ORDERQUANTITY").val("");
//           $("#btnAddToCart").prop('disabled' , true);
//       }
// });
//    /*Start the Validation Part*/
// $("#ORDERQUANTITY").on('keyup' , function () {
//        addValidation();
// });
//
// function  addValidation() {
//      var buyQty = $("#ORDERQUANTITY").val();
//      if (regBuyItemQty.test(buyQty)) {
//          $("#ORDERQUANTITY").css('border' , '2px solid green');
//          var code = $("#cmbitemcode").find('option:selected').text();
//          var id = $("#cmbSelectCustomerId").find('option:selected').text();
//          if (id !="-Select Customer-" && code !="-Select Item-") {
//              $("#btnAddToCart").prop('disabled' , false);
//
//          }
//      } else {
//          $("#ORDERQUANTITY").css('border','2px solid red');
//          $("#btnAddToCart").prop('disabled' , true);
//      }
// }
//
//
// /*Add to cart*/
// $("#btnAddToCart").click(function () {
//   var qtyOnHand = parseInt($("#ORDERQUANTITY").val());
//   var buyQty = parseInt($("#ORDERQUANTITY").val());
//   if (buyQty <= qtyOnHand) {
//       addItemsToCart();
//       LoadCartItemsToTable();
//       clearSelectItemFields();
//       calculateTotalAndNoOfItems();
//       $("#cartTable>tr").on('dblclick' , function () {
//           var itemCode = $(this).children(":eq(0)").text();
//           for (var i = 0; i < CartDB .length; i++) {
//               if (CartDB[i].getOrderId() == itemCode) {
//                   CartDB.splice(i,1);
//               }
//           }
//           LoadCartItemsToTable();
//           calculateTotalAndNoOfItems();
//           clearSelectItemFields();
//       });
//   } else {
//       swal({
//           title:"Error!",
//           text: "Buy qty is incorrect.Please enter low quantity.",
//           icon: "warning",
//           button:"Close",
//           timer: 2000
//       });
//   }
// });
//
// function  addItemsToCart() {
//     var itemCode = $("#cmbitemcode").find('option:selected').text();
//     var itemName = $("#ITEMNAME").val();
//     var itemPrice = $("#ITEMSALARY").val();
//     var qtyOnHand = parseInt($("#ORDERQUANTITY").val());
//     var qty = $("#ITEMSALARY").val();
//     var buyQty = parseInt(qty);
//     var unitPrice = parseFloat(itemPrice);
//     var total = buyQty * unitPrice;
//
//     var cart = new CartTm(itemCode, itemName, itemPrice, buyQty, total);
//
//     var found = false;
//
//     for (var i = 0; i < CartDB.length; i++) {
//         if (CartDB[i].getICode() == itemCode) {
//             var tempQty = parseInt(CartDB[i].getBuyQty()) + buyQty;
//             CartDB[i].setBuyQty(tempQty);
//             let itemTotal = tempQty * unitPrice;
//             CartDB[i].setItemTotal(itemTotal);
//             found = true;
//          }
//     }
//     if (found == false) {
//         CartDB.push(cart);
//     }
// }
// /*load cart items to table*/
// function LoadCartItemsToTable() {
//     $("#cartTable").empty();
//     for (var i = 0; i < CartDB.length; i++) {
//         let tableRow = `<tr><td>${CartDB[i].getICode()}</td><td>${CartDB[i].getIName()}</td><td>${CartDB[i].getItemPrice()}</td><td>${CartDB[i].getBuyQty()}</td><td>${CartDB[i].getItemTotal()}</td></tr>`;
//         $("#cartTable").append(tableRow);
//     }
//  }
//
// function clearSelectItemFields() {
//     $("#cmbitemcode").val("");
//     $("#ITEMNAME").val("");
//     $("#ITEMSALARY").val("");
//     $("#ORDERQUANTITY").val("");
//     $("#txtbuyQty").val("");
//     $("#txtbuyQty").css('border', '1px solid #ced4da');
//     $("#btnAddToCart").prop('disabled', true);
// }
//
// function  calculateTotalAndNoOfItems() {
//     let ttl = 0;
//     for (var i = 0; i < CartDB.length; i++) {
//         ttl  = ttl + CartDB[i].getTotal();
//     }
//     $("#txtTotal").val(ttl + "/=");
//     $("#txtBalance").val(ttl + "/=");
//     $("#txtNoOfItems").val(CartDB.length);
// }
//
// $("#txtCash").keyup(function (event) {
//     if (event.key == "Enter") {
//         let ttl = 0;
//         for(var i = 0; i < CartDB.length; i++) {
//             ttl = ttl + CartDB[i].getItemTotal();
//         }
//         let cash = parseInt($("#txtCash").val());
//         let balance = ttl - cash;
//         $("#txtBalance").val(balance + "/=");
//
//         var code = $("#cmbitemcode").find('option:selected').text();
//         var id = $("#cmbSelectCustomerId").find('option:selected').text();
//         if(id !="-Select Customer-" && CartDB.length !=0) {
//             $("#btnPlaceOrder").prop('disabled' , false);
//         }
//     }
// });
//
// $("#btnClearItemFields").click(function () {
//     clearSelectItemFields();
// });
//
// $("#btnCancelOrder").click(function () {
//     clearPlaceOrderForm();
//     loadCartItemsToTable();
// });
//
// function clearPlaceOrderForm() {
//     $("#cmbSelectCustomerId").val();
//     $("#CUSTOMERNAME").val("");
//     $("#CUSTOMERADDRESS").val("");
//     $("#CONTACT").val("");
//
//     $("#cmbitemcode").val("");
//     $("#ITEMNAME").val("");
//     $("#ORDERQUANTITY").val("");
//     $("#ITEMSALARY").val("");
//
//     $("#txtTotal").val("");
//     $("#txtNoOfItems").val("");
//     $("#txtCash").val("");
//     $("#txtBalance").val("");
//
//     CartDB.splice(0, CartDB.length);
//
//     $("#btnAddToCart").prop('disabled', true);
//
//     $("#btnPlaceOrder").prop('disabled', true);
//
// }
//
// $("#btnPlaceOrder").click(function () {
//     let orderId = $("#txtOrderId").val();
//     let orderDate = $("#txtOrderDate").val();
//     let customerId = $("#cmbSelectCustomerId").find('option:selected').text();
//     let total = $("#txtTotal").val().split("/")[0];
//
//     var order = new OrderDTO(orderId, orderDate, customerId, total);
//     OrderDB.push(order);
//
//     for (var i = 0; i < CartDB.length; i++) {
//         var orderDetail = new OrderDetailDTO(orderId, CartDB[i].getICode(), CartDB[i].getIName(), CartDB[i].getItemPrice(), CartDB[i].getBuyQty(), CartDB[i].getItemTotal());
//         manageItemQtyOnHand(CartDB[i].getICode(), CartDB[i].getBuyQty());
//     }
//     clearPlaceOrderForm();
//     loadCartItemsToTable();
//     loadOrderTable();
//     loadOrderDetailTable();
//     generateOId();
//     loadItemCord();
//
//     swal({
//         title: "Success!",
//         text: "Place Order Successfully",
//         icon: "success",
//         button: "Ok",
//         timer: 2000
//     });
// });
// /*Manage Item Quantity*/
// function manageItemQtyOnHand(itemCode, buyQty) {
//     for (var i = 0; i < itemDB.length; i++) {
//         if (itemDB[i].getCode() == itemCode) {
//             let tempQty = parseInt(itemDB[i].getItemstock());
//             let qtyOnHand = tempQty - buyQty;
//             itemDB[i].setItemstock(qtyOnHand);
//         }
//     }
// }
//
// /*Load Order Table*/
// function loadOrderTable() {
//     $("#cartTable").empty();
//     for (var i = 0; i < OrderDB.length; i++) {
//         let tableRow = `<tr><td>${OrderDB[i].getOrderId()}</td><td>${OrderDB[i].getOrderDate()}</td><td>${OrderDB[i].getCustomerId()}</td><td>${OrderDB[i].getTotal()}</td></tr>`
//         $("#cartTable").append(tableRow);
//     }
// }

