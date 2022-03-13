

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

$("#cmbSelectCustomerId").click(function () {

     let cust = $("#cmbSelectCustomerId").val();

     selectedCustomer(cust);
});

  function selectedCustomer(CustomerId) {
      for (const i in customerDB) {
          if (customerDB[i].getId()==CustomerId) {
              let element = customerDB[i];
              $("#CUSTOMERNAME").val(element.getName());
              $("#CUSTOMERADDRESS").val(element.getAddress());
              $("#CONTACT").val(element.getContact());
          }
      }
  }

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
              $("#ITEMNAME").val(itemDB[i].getItemName());
          }
      }
   }
   $("#OrderBtn").click(function () {
       loadItemCord();

   });

   $("#cmbitemcode").click(function () {
       let item = $("#cmbitemcode").val();
       selectedItem(item);
   });

  function selectedItem(ItemId) {
      for (const i in itemDB) {
          if (itemDB[i].getCode()==ItemId) {
              let element = itemDB[i];
              $("#ITEMNAME").val(element.getItemName());
              $("#ORDERQUANTITY").val(element.getItemstock());
              $("#ITEMSALARY").val(element.getItemsalary());
          }
      }
  }


