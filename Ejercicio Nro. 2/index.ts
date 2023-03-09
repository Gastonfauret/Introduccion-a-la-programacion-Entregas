import {Auto} from "./claseAuto.js";
// import { RegistroAutomotor } from "./registroAutomotor.js";

var nuevoArray = new Array(2);
nuevoArray[0] = new Array(2);
nuevoArray[1] = new Array(2);

// let arrayCars: any = [];
// const dataBase: any [] = [][];

// const manage = new RegistroAutomotor;

const palio: Auto = new Auto('Palio', 'Fire', 1.3, 'ABC-123');
const cronos: Auto = new Auto ('Chevrolet', 'Cronos', 1.4, 'ABC-012');
const citroen: Auto = new Auto ('C3', 'Airwave', 1.4, 'ABC-001');
const fiesta: Auto = new Auto ('Ford', 'Fiesta', 1.4, 'ABC-002');
const civic: Auto = new Auto ('Honda', 'Civic', 1.8, 'ABC-003');
const gol: Auto = new Auto ('Volkswagen', 'Gol', 1.4, 'ABC-004');

nuevoArray[0][0] = palio;
nuevoArray[0][1] = cronos;
nuevoArray[0][2] = citroen;
nuevoArray[1][0] = fiesta;
nuevoArray[1][1] = civic;
nuevoArray[1][2] = gol;

function findObjectByIndex (num1: number, num2: number) {
    for(let i: number = 0; i <= 2; i++) {
        for(let j: number = 0; j <= 2; j++) {
            if (i == num1 && j == num2) {
                console.log(nuevoArray[i][j])
                return nuevoArray[i][j]
            } 
        }
    }
}

findObjectByIndex(0, 0);
findObjectByIndex(1, 0);
findObjectByIndex(1, 2);



