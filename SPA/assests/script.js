document.getElementById("customerpage").style.display="none";
document.getElementById("itempage").style.display="none";


/*Home Page*/
document.getElementById("homeBtn").addEventListener("click",function () {
     document.getElementById("customerpage").style.display="none";
     document.getElementById("itempage").style.display="none";
     document.getElementById("mainpage").style.display="block";
})

/*Customer page*/
document.getElementById("customerBtn").addEventListener("click",function () {
   document.getElementById("mainpage").style.display="none";
   document.getElementById("itempage").style.display="none";
   document.getElementById("customerpage").style.display="block";
})

/*Item Page*/
document.getElementById("itemBtn").addEventListener("click",function () {
   document.getElementById("mainpage").style.display="none";
   document.getElementById("customerpage").style.display="none";
   document.getElementById("itempage").style.display="block";
})

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

/*Add Item Details*/

/*Button Selection*/
$("#btnSaveItem").click(function () {

    /*gather the item information*/
    let itemId = $("#txtItemID").val();
    let itemType = $("#txtItemName").val();
    let itemStock = $("#txtInStock").val();
    let itemSalary = $("#txtItemSalary").val();

    /*Create html Path*/
    let row = `<tr><td>${itemId}</td><td>${itemType}</td><td>${itemStock}</td><td>${itemSalary}</td></tr>`;

    /*Select the table append to the row*/
    $("#itemTable").append(row);

    /*bind the event after the row*/
    $("#itemTable>tr").click(function(){
        /*this*/ /*Input dom object*/
        /*$(this);*/ /*This is a JQuery Object*/

        /*$(this)*/ /*tr*/
        /*$(this).children();*/ /*return all td inside selected the row*/

        let ItemID = $(this).children(":eq(0)").text();/*Selected the first td and get text*/
        let ItemType = $(this).children(":eq(1)").text();
        let ItemStock = $(this).children(":eq(2)").text();
        let ItemSalary = $(this).children(":eq(3)").text();

        console.log(ItemID, ItemType , ItemStock, itemSalary);

        /*Set values for the input fields*/
        $("#txtItemID").val(ItemID);
        $("#txtItemName").val(itemType);
        $("#txtInStock").val(itemStock);
        $("#txtItemSalary").val(itemSalary);
    });
});