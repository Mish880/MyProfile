/*Add Customer Script*/

/*Button Selection*/
$("#btnSaveCustomer").click(function () {

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
       console.log(this);
    });
});