"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var dataBase = [[3], [3]];
var arrayCars = [6];
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.update = function (dataBase) {
        console.log(dataBase);
    };
    RegistroAutomotor.prototype.addCarsToArray = function (arrayCars, newCar) {
        var x = 0;
        if (x >= 0 && x < arrayCars.length) {
            arrayCars[x] = dataBase.unshift(newCar);
            console.log("The new car '".concat(newCar, " has been added in the position' ").concat(arrayCars[x] - 3, "'."));
            x++;
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
