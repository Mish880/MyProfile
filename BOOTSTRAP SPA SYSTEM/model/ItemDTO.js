function ItemDTO(Itemid, Itemname, ItemStock, ItemSalary) {

    var __itemid = Itemid;
    var __itemname = Itemname;
    var __itemstock = ItemStock;
    var __itemsalary = ItemSalary;

    this.getCode = function () {
        return __itemid;
    }

    this.setCode = function () {
        __itemid = Itemid;
    }

    this.getItemName = function() {
        return __itemname;
    }

    this.setItemName = function () {
      __itemname = Itemname;
    }

    this.getItemstock = function () {
        return __itemstock;
    }

    this.setItemstock = function () {
       __itemstock = ItemStock;
    }

    this.getItemsalary = function () {
        return __itemsalary;
    }

    this.setItemsalary = function () {
         __itemsalary = ItemSalary;
    }

}