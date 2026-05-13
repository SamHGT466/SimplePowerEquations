let num1 = document.querySelector('#x');
let num2 = document.querySelector('#y');
let power = document.querySelector('.result');
if (typeof (Worker) !== "undefined") {
    //creazione di un nuovo Web Worker
    const myWorker = new Worker('worker.js');
    num1.onchange = function () {
        myWorker.postMessage([num1.value, num2.value]);
        console.log('Messaggio inviato al worker con dati: ',
            num1.value, num2.value);
    }
    num2.onchange = function () {
        myWorker.postMessage([num1.value, num2.value]);
        console.log('Messaggio inviato al worker con dati: ',
            num1.value, num2.value);
    }
    //in ascolto del messaggio di risposta dal worker
    myWorker.onmessage = function (e) {
        console.log('Messaggio ricevuto dal worker con dati: ',
            e.data);
        power.textContent = e.data;
    }
} else {
    console.log('Il browser non supporta i Web Workers.');
}