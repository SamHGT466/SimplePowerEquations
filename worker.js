onmessage = function (e) {
    console.log('Worker: messaggio ricevuto dallo script main. I dati sono: ', e.data);
    let power = 1;
    for (let i = 0; i < e.data[1]; i++)
        power *= e.data[0];
    let workerResult = 'Risultato: ' + power;
    console.log('Worker: invio del messaggio allo script main: ',
        workerResult);
    postMessage(workerResult);
}