"use strict";
exports.__esModule = true;
var claseAuto_js_1 = require("./claseAuto.js");
var registroAutomotor_js_1 = require("./registroAutomotor.js");
var arrayCars = [5];
var dataBase = [[3], [3]];
var manage = new registroAutomotor_js_1.RegistroAutomotor;
var palio = new claseAuto_js_1.Auto('Palio', 'Fire', 1.3, 'ABC-123', 123456789, 987654321);
var cronos = new claseAuto_js_1.Auto('Chevrolet', 'Cronos', 1.4, 'ABC-012', 123456788, 987654322);
var citroen = new claseAuto_js_1.Auto('C3', 'Airwave', 1.4, 'ABC-001', 123456888, 987654222);
var fiesta = new claseAuto_js_1.Auto('Ford', 'Fiesta', 1.4, 'ABC-002', 123458888, 987652222);
var civic = new claseAuto_js_1.Auto('Honda', 'Civic', 1.8, 'ABC-003', 123458888, 987622222);
var gol = new claseAuto_js_1.Auto('Volkswagen', 'Gol', 1.4, 'ABC-004', 123488888, 987222222);
// // Se Añaden los autos:
manage.addCarsToArray(arrayCars, palio);
manage.addCarsToArray(arrayCars, cronos);
manage.addCarsToArray(arrayCars, citroen);
manage.addCarsToArray(arrayCars, fiesta);
manage.addCarsToArray(arrayCars, civic);
manage.addCarsToArray(arrayCars, gol);
console.log(arrayCars);
// // Consulta de Datos:
// manage.consultDataBase('Chevrolet', dataBase);
// manage.consultDataBase('Honda', dataBase);
// console.log(dataBase);
