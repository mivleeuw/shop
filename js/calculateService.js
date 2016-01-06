'use strict';

guitarShop.service('CalculateService', function () {
   
   this.calculateTotal = function (list) {
       var totalAmount = 0;
       var i;
       for (i in list) {
           var item = list[i];
           totalAmount +=  item.price * item.quantity;
        }
        return  totalAmount;
    }     
});