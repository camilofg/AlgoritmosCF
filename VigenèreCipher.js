var alphaDictionary;
var passDictionary;

function VigenèreCipher(key, abc) {
    alphaDictionary = this.convertToDictionary(abc.split(''));
    passDictionary = this.getDictionayWord(key);
    
    //return algo;
};

VigenèreCipher.prototype.encode = function (str) {
    if (!passDictionary) return str;
    if (str.length > passDictionary.length) adjustPass(str.length);
    var codificar = this.getDictionayWord(str);
    var i = -1;
    var wordValues = codificar.map(function (m) {
        i++;
        return m.key === "-1" ? (typeof (m.value) === "number" ? m.value * -1 : m.value) : (m.key + passDictionary[i].key - 1) > 26 ? (m.key + passDictionary[i].key - 1) - 26 : (m.key + passDictionary[i].key - 1);
    });
    var contador = 0;
    var wordReturn = []
    for (k = 0; k < wordValues.length; k++) {
        alphaDictionary.map(function (m) {
            if (m.key === wordValues[k]) {
                wordReturn.push(m.value);
                contador++;
            }
        });
        if (contador != k + 1) {
            wordReturn.push(typeof (wordValues[k]) === "number" ? wordValues[k] * -1 : wordValues[k]);
            contador++;
        }
    }

    return wordReturn.join('');

}

VigenèreCipher.prototype.decode = function (str) {
    if (!passDictionary) return str;
    if (str.length > passDictionary.length) adjustPass(str.length);
    var codificar = this.getDictionayWord(str);
    var i = -1;
    var wordValues = codificar.map(function (m) {
        i++;
        return m.key === "-1" ? (typeof (m.value) === "number" ? m.value * -1 : m.value) : ((m.key + 26) - passDictionary[i].key + 1) > 26 ? Math.abs((m.key - passDictionary[i].key + 1)) : Math.abs((m.key + 26) - passDictionary[i].key + 1);
    });
    var contador = 0;
    var wordReturn = []
    for (k = 0; k < wordValues.length; k++) {
        alphaDictionary.map(function (m) {
            if (m.key === wordValues[k]) {
                wordReturn.push(m.value);
                contador++;
            }
        });
        if (contador != k + 1) {
            wordReturn.push(typeof (wordValues[k]) === "number" ? wordValues[k] * -1 : wordValues[k]);
            contador++;
        }
    }

    return wordReturn.join('');
}

VigenèreCipher.prototype.convertToDictionary = function (array) {
    var retornar= []
    for (i = 1; i <= array.length; i++) {
        retornar.push({ key: i, value: array[i - 1] });
    }
    return retornar;
}

VigenèreCipher.prototype.getDictionayWord = function (pass) {
    if (!pass) return;
    var armDictionary = []
    pass = pass.split('');
    var contador = 0;
    for (i = 0; i < pass.length; i++) {
        alphaDictionary.filter(function (m) {
            //contador = 0;
            if (m.value === pass[i]) {
                armDictionary.push(m);
                contador++;
            }
        });
        if (contador != i + 1) {
            armDictionary.push({ key: "-1", value: pass[i] });
            contador++;
        }
    }
    return armDictionary;
}


function adjustPass(long) {
    var currentLong = passDictionary.length;
    var topVal = passDictionary.length * (Math.ceil((long) / (currentLong)));
    //(t = currentLong; t >= currentLong && t < long; t++)
    for (t = currentLong; t < topVal; t++) {
        passDictionary.push(passDictionary[t - currentLong]);
    }
    //passDictionary
}