function SumMaxCont(arreglo) {
    var j = 0;
    var sumado = 0;
    var arrayValues = {}
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 0) {
            arrayValues[j] = arreglo[i];
            sumado += arreglo[i];
            j++;
        }
        else {
            if (i > 0 && Math.abs(arreglo[i]) < sumado) {
                if (i < arreglo.length - 1) {
                    if (arreglo[i + 1] > Math.abs(arreglo[i])) {
                        arrayValues[j] = arreglo[i];
                        sumado += arreglo[i];
                        j++;
                    }
                    else return;
                }
            }
            else {
                if (j > 0) {
                    j--;
                    sumado = 0;
                }
                //return;
            }
        }

    }
    return sumado;
}



function MovingZeros(arreglo) {
    var arrayOrder = {}
    var inicio = 0;
    var fin = arreglo.length - 1;

    for (i = 0; i < arreglo.length ; i++) {
        if (typeof (arreglo[i]) != "boolean" && arreglo[i] == 0) {
            arrayOrder[fin] = arreglo[i];
            fin--;
        }
        else {
            arrayOrder[inicio] = arreglo[i];
            inicio++;
        }
    }
    return JSON.stringify(arrayOrder);
}


var arr = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

var moveZeros = function (arr) {
    var arrayOrder = {}
    var inicio = 0;
    var fin = arr.length - 1;

    for (i = 0; i < arr.length ; i++) {
        if (typeof (arr[i]) != "boolean" && arr[i] == 0) {
            arrayOrder[fin] = arr[i];
            fin--;
        }
        else {
            arrayOrder[inicio] = arr[i];
           inicio++;
        }
    }
    return JSON.stringify(arrayOrder);
}


function circleArea(radius) {
    if (typeof (radius) != "number")
        return false;

    return parseFloat(3.14 * (Math.pow(radius, 2))).toFixed(2);
};

function sum(arreglo, arreglo2) {
    var arr = arreglo.toString().split(",");
    var sumatoria = 0;
    for (i = 0; i < arreglo.length; i++) {
        if (typeof (arreglo[i]) == "number")
            sumatoria += arreglo[i];
    }
    return sumatoria;
}


function goodVsEvil(good, evil) {
    //('1 0 0 0 0 0', '0 1 1 1 1 0 0')
    var arrGod = [1, 2, 3, 3, 4, 10];
    var arrBad = [1, 2, 2, 2, 3, 5, 10];
    good = good.split(' ');
    evil = evil.split(' ');
    var i = 0;
    var goodValue = arrGod.reduce(function (a, b) {
        i++;
        return a + (b * good[i]);
    });
    i = 0;
    var badValue = arrBad.reduce(function (a, b) {
        i++;
        return a + (b * evil[i]);
    });
    if (good[0] == 0) goodValue--;
    else { goodValue += parseFloat(good[0]); goodValue--;}
    if (evil[0] == 0) badValue--;
    else { badValue += parseFloat(evil[0]); badValue--;}
    if (goodValue == badValue) return 'Battle Result: No victor on this battle field';
    if (goodValue > badValue) return 'Battle Result: Good triumphs over Evil';
    return 'Battle Result: Evil eradicates all trace of Good';
   // return 'Battle Result: ' + goodValue == badValue ? 'No victor on this battle field' : (goodValue > badValue ? 'Good triumphs over Evil' : 'Evil eradicates all trace of Good');
}

function numberToOrdinal(n, brief) {
    brief = brief == undefined ? false : brief;
    n = n.toString();
    var lastDigits = n.substring(n.length - 2, n.length);
    if (10 <= parseFloat(lastDigits) && 20 >= parseFloat(lastDigits))
        return n + brief ? "h" : "th";
    else {
        lastDigits = n.substring(n.length - 1, n.length);
        var complemento = "";
        switch (lastDigits) {
            case "0":
                complemento = "0";
                break;
            case "1":
                complemento = brief ? "t" : "st";
                break;
            case "2":
                complemento = brief ? "d" : "nd";
                break;
            case "3":
                complemento = brief ? "d" : "rd";
                break;
        }
        complemento = complemento == "" ? (brief ? "h" : "th") : complemento;
        return n + complemento;
    }
}

function areYouPlayingBanjo(name) {
    // Implement me
    var armada = name.substring(0, 1).toLowerCase() == "r" ? " plays banjo" : " does not play banjo";
    return name += armada;
}
