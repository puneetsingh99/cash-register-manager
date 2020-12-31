const bill = document.querySelector("#inp-bill");
const amount = document.querySelector("#inp-amt");
const table = document.querySelector("#tbl-output");

function keyupHandler(key){
    if(key.keyCode === 13){
        if(this.id === "inp-bill"){
            let inpBill = bill.value;
            amount.disabled = false;
            amount.focus();            
        } else{
            let inpAmount = amount.value;
            bill.focus();
        }
    }

    console.log(inpBill);
    console.log(inpAmount)
    let balance = inpAmount - inpBill;
    console.log(balance);
    
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

function generateTable(tbl, data){
    console.log("inside table generator");
    let arrOfNotes = Object.keys(data);
    console.log(arrOfNotes);
    for (element of data){
        let row = tbl.insertRow();

        let cell1 = row.insertCell();
        let text1 = document.createTextNode(element);
        let cell2 = row.insertCell();
        let text2 = document.createTextNode(data[element]);

        cell1.appendChild(text1);
        cell2.appendChild(text2);
    }
    
}



function noteCounter(denominaton, amount){
    let count = amount / denominaton;
    let newAmount = amount % denominaton;

    return [Math.floor(count), newAmount];
}

let nd = [];
let countOfNotes  = [];
let denominations = [2000, 500, 100, 20, 10, 5, 1];

function calculate(balance){
    if(balance == 0){
        console.log("Thank you for shopping");
    }else if (balance < 0){
        console.log("Please pay " + balance + " rs more");
    }else{
        let notes = denominations.filter(n => n <= balance);
        console.log(notes);
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


// generateTable(table, noteObj);
generateTableHead(table, ["Note", "quantity"] );
console.log(calculate(69));
console.log("Notes array: " + nd);
console.log("Count of notes: " + countOfNotes);
// console.log(noteObj);