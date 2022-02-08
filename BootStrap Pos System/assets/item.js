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