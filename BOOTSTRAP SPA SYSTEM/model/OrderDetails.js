function OrderDetailDTO(orderId , itemCode , name , unitPrice , buyQty , total) {
       var __orderId = orderId;
       var __itemCode = itemCode;
       var __itemname = name;
       var __unitPrice = unitPrice;
       var __buyQty =  buyQty;
       var __total = total;

   this.getOrderId = function () {
      return __orderId;
   }

   this.setOrderId = function (orderId) {
       __orderId = orderId;
   }
   this.getItemCode = function () {
       return __itemCode;
   }
   this.setItemCode = function (itemCode) {
       __itemCode = itemCode;
   }
   this.getItemName = function () {
        return __itemname;
   }
   this.setItemName = function (name) {
      __itemname = name;
   }
   this.getUnitPrice = function () {
       return __unitPrice;
   }
   this.setUnitPrice = function (unitPrice) {
      __unitPrice = unitPrice;
   }
   this.getBuyQTY = function () {
        return __buyQty;
   }
   this.setBuyQty = function (buyQty) {
       __buyQty = buyQty;
   }
   this.getTotal = function () {
      return __total;
   }
   this.setTotal = function () {
      __total = total;
   }
}