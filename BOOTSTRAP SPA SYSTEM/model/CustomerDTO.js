function CustomerDTO(cid, cname, caddress, contact) {

      var __cid = cid;
      var __name = cname;
      var __address = caddress;
      var __contact = contact;


    this.getId = function () {
        return __cid;
    }

    this.setId = function (id) {
        __cid = cid;
    }

    this.getName = function () {
        return __name;
    }

    this.setName = function (name) {
         __name = name;
    }

    this.getAddress = function () {
        return __address;
    }

    this.setAddress = function (caddress) {
        __address =  caddress;
    }

    this.getContact = function () {
        return __contact;
    }

    this.setContact = function (contact) {
       __contact = contact;
    }
}