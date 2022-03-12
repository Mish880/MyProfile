

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




