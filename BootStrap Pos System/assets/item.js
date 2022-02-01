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
      console.log(this);
    });
});