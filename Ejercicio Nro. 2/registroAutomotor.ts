import {Auto} from './claseAuto';

const dataBase: any = [[3],[3]];
let arrayCars = [6];


export class RegistroAutomotor{
    update(dataBase: Auto) {
        console.log(dataBase);       
    } 

    addCarsToArray(arrayCars, newCar: Auto) {
        let x: number = 0;
        if (x >= 0 && x < arrayCars.length) {        
        arrayCars[x] = dataBase.unshift(newCar);
        console.log(`The new car '${newCar} has been added in the position' ${arrayCars[x]-3}'.`);
        x++;
        }
    }


    // for (let x: number = 0; x < dataBase.length; x++) {
    //     for (let y: number = 0; y < dataBase[x].length; y++) {
    //             dataBase[x][y] = dataBase.push(newCar)
    //             console.log(`The car '${newCar} has added in the position '${x} '${y}'.`);
    //             }



    // consultDataBase(auto:string, dataBase:Auto[]) {
    //     let foundCar: Auto[] 
    //     for (let x: number = 0; x < dataBase.length; x++) {
    //         for (let y: number = 0; y < dataBase[x].length; y++) {
    //             console.log(dataBase[x][y]);
    //         }
    //     }
    //     if(foundCar.length) {
    //         console.log(`The datafile of '${auto}' has been found.`);
    //         console.log(foundCar);
    //         // return foundCar;
    //     } else {
    //         console.log(`The datafile of '${auto}' isn't in the datafile. `);
    //     }
    // }

    // for (let x: number = 0; x < dataBase.length; x++) {
    //     for (let y: number = 0; y < dataBase[x].length; y++) {
    //         console.log(dataBase[x][y]);
    //     }
    // }

    // deleteFile(auto:string, array:Auto[]) {
    //     let index: number = array.length;
    //     while (index > 0) {
    //         const deleteCar: number = array.findIndex((car: any) => car.marca === auto);
    //         if (deleteCar >= 0) {
    //         array.splice(deleteCar, 1);
    //         console.log(`The datafile of '${auto}' has been deleted sucesfully.`);
            
    //         }
    //     index--;
    //     }
    // }  
    }

    

