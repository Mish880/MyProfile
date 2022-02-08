/*Add Customer Script*/

/*Button Selection*/
$("#btnSaveCustomer").click(function () {

    /*remove all the row click events added before*/
    $("#cusTable>tr").off("click");

    /*gather the customer information*/
    let customerID = $("#txtCusID").val();
    let customerName = $("#txtName").val();
    let customerAddress = $("#txtAddress").val();
    let customerContact = $("#txtContact").val();

    /*Create a html path*/
    let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerContact}</td></tr>>`;

    /*Select the table append to the row*/
    $("#cusTable").append(row);

    /*bind the event after the row*/
    $("#cusTable>tr").click(function () {
      /*this*/ /*dom object*/
      /*$(this); This is a JQuery Object*/

      /*$(this)*/ /*tr*/
      /*$(this).children();*/ /*Return all td inside selected row*/

      let cusID = $(this).children(":eq(0)").text(); /*Select the first td and get the text*/
      let cusName = $(this).children(":eq(1)").text();
      let cusAddress = $(this).children(":eq(2)").text();
      let cusContact = $(this).children(":eq(3)").text();

      console.log(cusID,cusName,cusAddress,cusContact);

      /*Set values to the input fields*/

        $("#txtCusID").val(cusID);
        $("#txtName").val(cusName);
        $("#txtAddress").val(cusAddress);
        $("#txtContact").val(cusContact);
    });
});