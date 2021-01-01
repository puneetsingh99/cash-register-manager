const body = document.body;
const bill = document.querySelector("#inp-bill");
const amount = document.querySelector("#inp-amt");
const table = document.querySelector("#tbl-output");
table.style.display = "none";

const output = document.querySelector("#heading-output");
console.log(output);
let inpBill, inpAmount, balance;

let nd = [];
let countOfNotes  = [];
let message = "";
let denominations = [2000, 500, 100, 20, 10, 5, 1];


function keyupHandler(key){
    if(key.keyCode === 13){
        if(this.id === "inp-bill"){
            inpBill = bill.value;
            console.log("inpBill: " + inpBill);
            amount.disabled = false;
            amount.focus();            
        } else{
            inpAmount = amount.value;
            console.log("inpAmount: " + inpAmount);
            bill.focus();
            balance = inpAmount - inpBill;
            calculate(balance);
            if(message !== ""){
                output.innerText = message;
                table.innerHTML =  ``;
            }else{     
                table.innerHTML =  ``;
                rows = `<thead> 
                    <tr>
                        <th> Note </th>
                    </tr>
                    <tr>
                        <th> No of notes </th>
                    </tr>
                </thead>`
                nd.map((n, index) => {
                    rows += `<tbody> 
                    <tr>
                        <td> ${n} </td>
                    </tr>
                    <tr>
                        <td> ${countOfNotes[index]} </td>
                    </tr>
                    </tbody>`
                })
                table.innerHTML = rows;
                table.style.display = "block";
                
            }
            
        }
    } 
    
}


bill.addEventListener("keyup", keyupHandler);
amount.addEventListener("keyup", keyupHandler);

function noteCounter(denominaton, amount){
    let count = amount / denominaton;
    let newAmount = amount % denominaton;

    return [Math.floor(count), newAmount];
}



function calculate(balance){
    if(balance == 0){
        message = "Thank you for shopping";
    }else if (balance < 0){
        message =  "Please pay " + balance + " rs more";
    }else{
        let notes = denominations.filter(n => n <= balance);
        console.log("notes for this balance: " + notes);
        notes.map( n => {
            if(balance >= n){
                let [noteCount, newBalance] = noteCounter(n, balance);
                balance = newBalance;
                const currNote = n;
                console.log("currNote " + currNote);
                nd.push(currNote);
                countOfNotes.push(noteCount);
            }
        })

    }
}
