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

        console.log(cusID, cusName, cusAddress, cusContact);

        /*Set values to the input fields*/

        $("#txtCusID").val(cusID);
        $("#txtName").val(cusName);
        $("#txtAddress").val(cusAddress);
        $("#txtContact").val(cusContact);
    });


    /*Remove selected row form the double click*/
    $("#cusTable>tr").dblclick(function () {
        $(this).remove();
    });
});



    var regExCusID = /^[C]{1}[0-9]{0,50}$/;

    $("#txtCusID").keyup(function () {
    let input = $("#txtCusID").val();
    if(regExCusID.test(input)) {
        $("#txtCusID").css('border','2px solid green');
        $("#error").text("");
    } else {
        $("#txtCusID").css('border','2px solid red');
        $("#error").text("This is a Wrong format : C001");
    }
    });

    var regExCusNAME = /^[A-z]{3,20}$/;

    $("#txtName").keyup(function () {
     let  input = $("#txtName").val();
     if (regExCusNAME.test(input)) {
         $("#txtName").css('border','2px solid green');
         $("#error").text("");

     } else {
         $("#txtName").css('border' , '2px solid red');
         $("#error").text("This is Wrong format : 1234");
     }
    });

    var regExCUSADDRESS = /^[A-z]{3,20}$/;

    $("#txtAddress").keyup(function () {
        let input = $("#txtAddress").val();
        if (regExCUSADDRESS.test(input)) {
            $("#txtAddress").css('border' , '2px solid green');
            $("#error").text("");
        } else {
            $("#txtAddress").css('border', '2px solid red');
            $("#error").text("This is Wrong format :Colombo - 1----2---");
        }
    });

    var regExCUSCONTACT = /^[1-9][0-9]*[0-9]{2}?$/;

    $("#txtContact").keyup(function () {
       let  input = $("#txtContact").val();
       if(regExCUSCONTACT.test(input)) {
          $("#txtContact").css('border' , '2px solid green');
          $("#error").text("");
       } else {
           $("#txtContact").css('border' , '2px solid red');
           $("#error").text("This is wrong format :qwer");
       }
    });