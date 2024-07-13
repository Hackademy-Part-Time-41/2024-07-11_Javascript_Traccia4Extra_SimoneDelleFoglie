function speedRelevator() {
    if(speed>200) {
        plateRequest();
    } else {
        if (speed>160 || speed==200) {
            plateRequest();
        } else {
            if (speed>130 || speed==160) {
                plateRequest();
            } else {
                alert('Limite di velocità rispettato')
            }
        }
    }
}


function plateRequest() {
    let plate=prompt('Inserisci la targa: ');
    if (plate=='Simone'){
        alert('Multa non inviata');
    } else {
        if (speed>200) {
            alert('Il veicolo targato '+ plate+ ' ha ricevuto una multa di 1000 €');
        } else {
            if (speed>160 || speed==200) {
                alert('Il veicolo targato '+ plate+ ' ha ricevuto una multa di 500 €');
            } else {
                if (speed>130 || speed==160) {
                    alert('Il veicolo targato '+ plate+ ' ha ricevuto una multa di 200 €');
                }
            }
        }
    }
}




console.log('Inizio');
let speed=parseInt(prompt('Inserire la velocità registrata:'));
speedRelevator();
console.log('Fine');