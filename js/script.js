// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).

// 1) CICLO FOR: 

// let spesa = ["pasta", "riso", "pollo", "pesce", "latte"];
// let lista = document.querySelector(".lista");

// for (let i = 0; i < spesa.length; i++){

//     let item = `<div>${spesa[i]}</div>`;
//     lista.innerHTML += item;
// }

// 2) CICLO WHILE:

let spesa = ["pasta", "riso", "pollo", "pesce", "latte"];
let lista = document.querySelector(".lista");
let button = document.querySelector("button");

let i = 0;

while(i < spesa.length){
    let item = `<div>${spesa[i]}</div>`;
    lista.innerHTML += item;

    i++; 
}

button.addEventListener("click", 
    function(){
        let altro = document.querySelector("#altro").value;
        spesa.push(altro);
        lista.innerHTML += `<div>${altro}</div>`;
    }
);