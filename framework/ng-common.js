
app.service('svcTools', function () {

    /* returns last item with matching value
     
     args:
     
     array - array containing objects
     value - search value of object
     attribute name - attribute to search
     
     example:
     svcTools.getItemFromArray(cityList, 'Zagreb', 'name')
     */

    this.getItemFromArray = function (array, value, attributeName) {
        var matchingItem = undefined;

        if (angular.isDefined(attributeName)) {
            angular.forEach(array, function (item) {
                if (angular.equals(item[attributeName], value))
                    matchingItem = item;
            })

        } else {
            angular.forEach(array, function (item) {
                if (angular.equals(item, value))
                    matchingItem = item;
            })
        }

        return matchingItem;
    };


    this.getDistinctValues = function (arrayOfObject, attributeName) {

        var distincts = [];

        for (var i = 0; i < arrayOfObject.length; i++) {
            var probe = arrayOfObject[i][attributeName];
            var found = false;
            for (var ii = 0; ii < distincts.length; ii++) {
                if (distincts[ii] === probe) {
                    found = true;
                    break;
                }
            }
            if (!found)
                distincts.push(probe);
        }
        return distincts;
    };

    this.indexOfObject = function (array, value, attributeName) {
        var result;
        angular.forEach(array, function (item, index) {
            if (item[attributeName] == value) {
                result = index;
            }
        });
        return result;
    };

    this.QFormat_number = function (number, decimalPoints) {
//        console.log('nesto', number)
        var num = parseFloat(Number(number));
        num = num.toFixed(decimalPoints);
//        console.log('NUM', num)
        if (isNaN(num)){
//            console.log('Parsing failed');
            return;
        }
       // return Globalize.format(num, "n2");
       return num;
    };
    
    this.getDiffFromTwoDays = function (dayOne, dayTwo) {
      
        var timeDiff = dayOne.getTime() - dayTwo.getTime();
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
       
        return diffDays;
    }
    
    this.getDiffMonthFromTwoDays = function (dayOne, dayTwo, abs) {
      
        abs = abs ? abs : false;
        
        var yearDiff = dayTwo.getFullYear() - dayOne.getFullYear();
        var monthDiff = dayTwo.getMonth() - dayOne.getMonth();
        var diff = yearDiff * 12 + monthDiff;
        
        diff = (abs && diff) < 0 ? diff * (-1) : diff;
        return diff;
    }
    
    this.setToAll = function(object, fieldName, fieldValue){
        angular.forEach(object, function(val){
           if(angular.isObject(val) && !angular.isArray(val)){
               val[fieldName] = fieldValue;
           }
        });
        
        return object;
    };
    
    this.removeFromArray = function(array, fieldName, fieldValue){
        angular.forEach(array, function(val, index){
           if(angular.isDefined(val[fieldName]) && val[fieldName] == fieldValue){
               array.splice(index, 1);
           }
        });
        
        return array;
    };


});

