const bill = document.querySelector("#inp-bill");
const amount = document.querySelector("#inp-amt");
let tbody = document.querySelector("#tbl-body");
let table = document.querySelector("table");
let btnReset = document.querySelector("#btn-reset");
var buttonFlag = false;

if(buttonFlag === false){
    btnReset.style.display = 'none';
}else{
    btnReset.style.display = 'block';
}

table.style.display = 'none';


btnReset.addEventListener("click", reset);

const output = document.querySelector("#heading-output");
console.log(output);

let inpBill, inpAmount, balance;



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
            balance = inpAmount - inpBill;
            bill.focus();
            buttonFlag = true;
           let [nd, countOfNotes, message] = calculate(balance);
            if(message !== ""){
                output.innerText = message;
                btnReset.style.display = 'block';
                output.style.display = 'block';
            }else{ 
                output.style.display = 'none';
                    rows = `
                    <tr>
                        <th> Note </th>
                        <th> No of notes </th>
                    </tr>
                    `
                nd.map((n, index) => {
                    rows += `
                    <tr>
                        <td> ${n} </td>
                        <td> ${countOfNotes[index]} </td>
                    </tr>
                   `
                })

                tbody.innerHTML = rows;
                table.style.display = 'block';
                btnReset.style.display = 'block';
                             
            }

            
            
        }
    } 
    
}

function reset(){
    window.location.reload();
}

bill.addEventListener("keyup", keyupHandler);
amount.addEventListener("keyup", keyupHandler);

function noteCounter(denominaton, amount){
    let count = amount / denominaton;
    let newAmount = amount % denominaton;

    return [Math.floor(count), newAmount];
}



function calculate(balance){
    let nd = [];
    let countOfNotes  = [];
    let message = "";
    if(balance == 0){
        message = "Thank you for shopping";
    }else if (balance < 0){
        message =  "Please pay " + -balance + " rs more";
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

    return [nd, countOfNotes, message];
}