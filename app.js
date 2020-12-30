// const body = document.body;

// let inputBill = document.createElement("input");
// inputBill.type = "Number";

// console.log("gekkiw")
// console.log(inputBill);

// let table = document.createElement("table");




let btnCalculate = document.querySelector("#btn-calculate");
let divOutput = document.querySelector("#div-output");
let denominations = [2000, 500, 100, 20, 10, 5, 1];

let noteTwoThousand = 0;
let noteFiveHundred = 0;
let noteOneHundred = 0;
let noteTwenty = 0;
let noteTen = 0;
let noteFive = 0;
let noteOne = 0;

function clickHandler(){
    let inputBill = document.querySelector("#inp-bill");
    let inputAmt = document.querySelector("#inp-amt");

    let bill = inputBill.value;
    let amount = inputAmt.value;
    let balance = amount - bill;
    
    calculate(balance);
}

btnCalculate.addEventListener("click", clickHandler);

function countNotes(denomination, amount){
    let count = amount/denomination;
    let newAmount = amount % denomination;

    return [Math.floor(count), newAmount];
}

function calculate(balance){
    console.log("Balance: " + balance);
    if(balance == 0){
        console.log("Thank you for shopping with us");
    } else if(balance < 0){
        console.log("Please pay Rs."+ -balance + " more");
    }else{
        let notes = denominations.filter(n => n <= balance);

        notes.forEach(n => {
            if(balance >= n){
                let [numOfnotes, newBalance] = countNotes(n, balance);

                balance = newBalance;

                switch(n){
                    case 2000: noteTwoThousand = numOfnotes; break;
                    case 500: noteFiveHundred = numOfnotes; break;
                    case 100: noteOneHundred = numOfnotes; break;
                    case 20: noteTwenty = numOfnotes; break;
                    case 10: noteTen = numOfnotes; break;
                    case 5: noteFive = numOfnotes; break;
                    case 1: noteOne = numOfnotes; break;
                }
            }
        });

        console.log("noteTwoThousand : "+ noteTwoThousand);
        console.log("noteFiveHundred : "+ noteFiveHundred);
        console.log("noteOneHundred : "+ noteOneHundred);
        console.log("noteTwenty : "+ noteTwenty);
        console.log("noteTen : "+ noteTen);
        console.log("noteFive : "+ noteFive);
        console.log("noteOne : "+ noteOne);
        
        outputStr = "";

        if(noteTwoThousand > 0){
            outputStr += "2000: " + noteTwoThousand + "\n";
        } 
        if(noteFiveHundred > 0){
            outputStr += "500: " + noteFiveHundred + "\n";
        }
        if(noteOneHundred > 0){
            outputStr += "100: " + noteOneHundred + "\n";
        }
        if(noteTwenty > 0){
            outputStr += "20: " + noteTwenty + "\n";
        }
        if(noteTen > 0){
            outputStr += "10: " + noteTen + "\n";
        }
        if(noteFive > 0){
            outputStr += "5: " + noteFive + "\n";
        }
        if(noteOne > 0){
            outputStr += "1: " + noteOne + "\n";
        }

        console.log("output str: \n"+outputStr);
        divOutput.innerHTML = outputStr;
        console.log(divOutput);
        
    }
}


// let denominations = [2000, 500, 100, 20, 10, 5, 1];

// let balance = amount - bill;

//     if(balance === 0){
//         console.log("Thank you for shopping with us");
//         // divOutput.innerHTML = "Thank you for shopping with us";
//     } else if(balance < 0){
//         console.log("Please pay "+ -balance +" more");
//         // divOutput.innerHTML = "Please pay "+ -balance +" more";
//     } else {
//         let notes = denominations.filter(n => n <= balance);
//         console.log(balance)
//         console.log(notes);
//         // divOutput.innerHTML = notes;
//     }
