const bill = document.querySelector("#inp-bill");
const amount = document.querySelector("#inp-amt");
const table = document.querySelector("#tbl-output");
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
            }else{
                generateTable(table, nd, countOfNotes);
                generateTableHead(table, ["Note", "quantity"] );
            }
            
        }
    }

    // console.log(inpBill);
    // console.log(inpAmount);
    // console.log(balance);
   
    
}


bill.addEventListener("keyup", keyupHandler);
amount.addEventListener("keyup", keyupHandler);

function generateTableHead(tbl, data){
    let thead = tbl.createTHead();
    let row = thead.insertRow();

    for(let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(tbl, note, count){
    console.log("inside table generator");
    console.log("Notes: " + note);
    console.log("count: " + count);
    console.log(tbl);   
    note.map((n, index) => {
        let row = tbl.insertRow();

        let cell1 = row.insertCell();
        let text1 = document.createTextNode(n);
        let cell2 = row.insertCell();
        let text2 = document.createTextNode(count[index]);

        cell1.appendChild(text1);
        cell2.appendChild(text2);
    })
    
}



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
        console.log("notes for this balance: "+ notes);
        // let noteObj = {};
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

// generateTable(table, nd, countOfNotes );
// generateTableHead(table, ["Note", "quantity"] );

// if(message !== ""){
//     console.log(message);
// } else{
//     generateTable(table, nd, countOfNotes );
//     generateTableHead(table, ["Note", "quantity"] );
// }
