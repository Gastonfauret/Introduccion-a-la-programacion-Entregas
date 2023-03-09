"use strict";
exports.__esModule = true;
var claseAuto_js_1 = require("./claseAuto.js");
// import { RegistroAutomotor } from "./registroAutomotor.js";
var nuevoArray = new Array(2);
nuevoArray[0] = new Array(2);
nuevoArray[1] = new Array(2);
// let arrayCars: any = [];
// const dataBase: any [] = [][];
// const manage = new RegistroAutomotor;
var palio = new claseAuto_js_1.Auto('Palio', 'Fire', 1.3, 'ABC-123');
var cronos = new claseAuto_js_1.Auto('Chevrolet', 'Cronos', 1.4, 'ABC-012');
var citroen = new claseAuto_js_1.Auto('C3', 'Airwave', 1.4, 'ABC-001');
var fiesta = new claseAuto_js_1.Auto('Ford', 'Fiesta', 1.4, 'ABC-002');
var civic = new claseAuto_js_1.Auto('Honda', 'Civic', 1.8, 'ABC-003');
var gol = new claseAuto_js_1.Auto('Volkswagen', 'Gol', 1.4, 'ABC-004');
nuevoArray[0][0] = palio;
nuevoArray[0][1] = cronos;
nuevoArray[0][2] = citroen;
nuevoArray[1][0] = fiesta;
nuevoArray[1][1] = civic;
nuevoArray[1][2] = gol;
function findObjectByIndex(num1, num2) {
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            if (i == num1 && j == num2) {
                console.log(nuevoArray[i][j]);
                return nuevoArray[i][j];
            }
        }
    }
}
findObjectByIndex(0, 0);
findObjectByIndex(1, 0);
findObjectByIndex(1, 2);
