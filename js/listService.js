'use strict';

guitarShop.service('ListService', function () {
   
   this.getIndex = function (id, list) {
       var i
       for (i in list) {
            if (list[i].id == id) {
               return i;
            }
        }
    } 
   this.delete = function (id, list) {
       var i;
       for (i in list) {
            if (list[i].id == id) {
                list.splice(i, 1);
            }
        }
    }  
});