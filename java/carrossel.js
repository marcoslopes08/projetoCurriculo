
/* A variável 'counter' começa em 1, então sempre que 'counter for MENOR que 4 (pois são 4 Fotos), 
counter volta pro incio e vira um Looping (chega no Final, volta pro começo e isso sempre se repete) */
type="text/javascript"
    var counter = 1;
    setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
    }, 5000);