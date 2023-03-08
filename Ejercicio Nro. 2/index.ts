import {Auto} from "./claseAuto.js";
import { RegistroAutomotor } from "./registroAutomotor.js";

let arrayCars = [5];
const dataBase: any = [[3],[3]];

const manage = new RegistroAutomotor;

const palio: Auto = new Auto('Palio', 'Fire', 1.3, 'ABC-123', 123456789, 987654321);
const cronos: Auto = new Auto ('Chevrolet', 'Cronos', 1.4, 'ABC-012', 123456788, 987654322);
const citroen: Auto = new Auto ('C3', 'Airwave', 1.4, 'ABC-001', 123456888, 987654222);
const fiesta: Auto = new Auto ('Ford', 'Fiesta', 1.4, 'ABC-002', 123458888, 987652222);
const civic: Auto = new Auto ('Honda', 'Civic', 1.8, 'ABC-003', 123458888, 987622222);
const gol: Auto = new Auto ('Volkswagen', 'Gol', 1.4, 'ABC-004', 123488888, 987222222);


// // Se Añaden los autos:
manage.addCarsToArray(arrayCars, palio);
manage.addCarsToArray(arrayCars, cronos);
manage.addCarsToArray(arrayCars, citroen)
manage.addCarsToArray(arrayCars, fiesta);
manage.addCarsToArray(arrayCars, civic);
manage.addCarsToArray(arrayCars, gol);

console.log(arrayCars);


// // Consulta de Datos:
// manage.consultDataBase('Chevrolet', dataBase);
// manage.consultDataBase('Honda', dataBase);

// console.log(dataBase);









