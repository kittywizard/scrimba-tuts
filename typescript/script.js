"use strict";
exports.__esModule = true;
//declare variable type
var bool = true;
var total = 10;
var str = "test";
var sentence = "You can use these too. " + str;
//also
var n = null;
var u = undefined;
//arrays
var list = [1, 2, 3];
var otherList = [4, 5, 6];
var nextArray = ['string', 123]; //fixed amount of elements, must match declaration order
console.log(sentence);
//
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
//any type
var random = 10; //won't throw errors for a lot of things
//unknown type
var newRandom = 10;
//type assertion
newRandom.toLocaleUpperCase();
