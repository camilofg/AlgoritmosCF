function highestRank(arr) {
    arr = arr.sort();
    var cuenta_actual = 0;
    var numero_actual;
    var numero_mayor;
    var cuenta_mayor = 0;
    arr.map(function (m) {
        if (m != numero_actual) {
            numero_mayor = cuenta_actual > cuenta_mayor ? (!numero_actual ? m : numero_actual) : (!numero_mayor ? (!numero_actual ? m : numero_actual) : numero_mayor);
            cuenta_mayor = cuenta_actual > cuenta_mayor ? cuenta_actual : cuenta_mayor;
            numero_actual = m;
            cuenta_actual = 1;
        }
        else
            cuenta_actual++;

    });
    return numero_mayor;
}


function sumIntervals(arr) {
    //arr = arr.sort();
    //return arr;
}


function prime(num) {
    var result = [];
    for (i = 2; i <= num; i++) {
        if (i < 4)
            result.push(i);

        else {
            if (i % 2 == 0)
            { }
            else {
                var limite = Math.floor(i / 2);
                var cuenta = 0;
                for (j = limite; j > 1; j--) {
                    if (i % j == 0)
                        cuenta++;
                }
                if (cuenta == 0)
                    result.push(i);
            }
        }
    }
    return result;
}

function format(s, p) {

    var separado = s.split(' ');
    var dict = [];
    for (var clave in p) {
        dict.push({ key: clave, value: p[clave] });
    }
    for (i = 0; i < separado.length; i++) {
        if (separado[i].match(/{.[a-z]*}/))
        {
            for (var key in p) {
                if (separado[i].match(/{.[a-z]*}/) == p) {
                    separado[i] = p[value];
                }
            }
        }
            //return separado[i];//separado[i]=separado[i].replace(
    }
    /*
    //var pattern = /{.[a-z]*}/g;
    var posibles = s.match(/{.[a-z]*}/g);

    var dict = [];
    for (var clave in p) {
        dict.push({ key: clave, value: p[clave] });
    }
    var tales = [];
    for (i = 0; i < posibles.length; i++) {
        dict.map(function (m) {
            if ('{' + m.key + '}' == posibles[i])
                s = s.replace(posibles[i], m.value);
                //tales.push(m.value);
        });
    }*/

    return tales;
    
}


function scoreHand(arr) {
    arr.sort();
    var total = 0;
    arr.map(function (m) {
        total += isNaN(m) ? (m == "A" ? (total + 11 > 21 ? 1 : 11) : 10) : parseInt(m);
    });
    return total;
}