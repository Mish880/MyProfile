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
    $("#itemTable>tr").click(function () {
        /*this*/ /*Input dom object*/
        /*$(this);*/ /*This is a JQuery Object*/

        /*$(this)*/ /*tr*/
        /*$(this).children();*/ /*return all td inside selected the row*/

        let ItemID = $(this).children(":eq(0)").text();/*Selected the first td and get text*/
        let ItemType = $(this).children(":eq(1)").text();
        let ItemStock = $(this).children(":eq(2)").text();
        let ItemSalary = $(this).children(":eq(3)").text();

        console.log(ItemID, ItemType, ItemStock, itemSalary);

        /*Set values for the input fields*/
        $("#txtItemID").val(ItemID);
        $("#txtItemName").val(itemType);
        $("#txtInStock").val(itemStock);
        $("#txtItemSalary").val(itemSalary);
    });

    /*Remove the selected row from the double click*/
    $("#itemTable>tr").dblclick(function () {
        $(this).remove();
    });
});

var regExITEMID = /^[I]{1}[0-9]{0,50}$/;

 $("#txtItemID").keyup(function () {

     let input = $("#txtItemID").val();
     if (regExITEMID.test(input)){
         $("#txtItemID").css('border' , '2px solid green');
         $("#error").text("");
     } else {
         $("#txtItemID").css('border' , '2px solid red');
         $("#error").text("This is a Wrong format : i001");
     }
 });

 var regEXITEMTYPE = /^[A-z]{3,20}$/;

 $("#txtItemName").keyup(function () {
   let input = $("#txtItemName").val();
   if (regEXITEMTYPE.test(input)) {
       $("#txtItemName").css('border' , '2px solid green');
       $("#error").text();
   } else {
       $("#txtItemName").css('border' , '2px solid red');
       $("#error").text("This is a wrong format : 1234");
   }
 });

 var regExITEMINSTOCK = /^[0-9]{1,4}?$/;

 $("#txtInStock").keyup(function () {
   let input = $("#txtInStock").val();
   if(regExITEMINSTOCK.test(input)) {
       $("#txtInStock").css('border' , '2px solid green');
       $("#error").text();
   } else {
       $("#txtInStock").css('border' , '2px solid red');
       $("#error").text("This is a wrong format : ABCD");
   }
 });

 var regEXITEMSALARY = /^[1-9][0-9]*[0-9]{2}?$/;

 $("#txtItemSalary").keyup(function () {
   let input = $("#txtItemSalary").val();
   if (regEXITEMSALARY.test(input)) {
       $("#txtItemSalary").css('border' , '2px solid green');
       $("#error").text();
   } else {
       $("#txtItemSalary").css('border' , '2px solid red');
       $("#error").text();
   }
 });
