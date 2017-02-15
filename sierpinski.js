var ubicador;
var longAct = 1;
var ubcAct = 1;
var ubcFin;
var newLevel;
var newLevel2;
function sierpinski(n) {
    longAct = 1;
    ubcAct = 1;
    ubicador = undefined;
    ubcFin = undefined;
    var result = [];
    var valRet;
    var act = 0;
    for (i = 1; Math.pow(2, n) >= i; i++) {
        valRet = ValorArmado(i, act);
        result.push(valRet);
        longAct += 2;
    }
    var algo = result.map(function (m) {
        return m.replace(/0/g, " ").replace(/1/g, "L");
    }).join('\n');
    return algo;
}
function ValorArmado(indice) {
    if (indice == 1) return "1";
    var exp = Math.log(indice) / Math.log(2);
    var retVal = "";
    //newLevel = false;
    if (exp % 1 == 0) {
        ubicador = 1;
        ubcAct = 1;
        for (j = 1; j <= longAct; j++) {
            retVal += (j % 2 != 0 || j == longAct) ? 1 : 0;
        }
        newLevel = false;
        return retVal;
    }
    if (ubicador == 1) {
        ubicador++;
        for (j = 1; j <= longAct; j++) {
            retVal += (j == 1 || j == longAct) ? 1 : 0;
        }
        ubcFin = longAct;
        return retVal;
    }
    if (ubicador > 1) {
        if (ubicador % 4 == 0) {
            for (j = 1; j <= longAct; j++) {
                var algo = (j % 2 == 0) ? 0 : 1;
                if (j > (ubcAct + 2) && j < ubcFin)
                    algo = 0;
                retVal += algo;
                ///aca va algo
                
             }
            newLevel = true;
        }
        else {
            var gradoAct = Math.log(indice - ubicador) / Math.log(2);
            var pivot = 8;
            var pivot2 = 23;
            for (k = 1; k <= longAct; k++) {
                var algo2 = (k == 1 || k == longAct || k == (ubcAct + 2) || k == ubcFin) ? 1 : 0;
                if (indice > 12 && newLevel && (k == pivot || k == pivot2)) {
                    algo2 = 1;
                    //pivot += 4;
                }
                if ((indice == 14 && k == 3) || (indice == 14 && k ==19)) {
                    algo2 = 1;
                }
                if ((indice == 15 && k == 5) || (indice == 15 && k == 21)) {
                    algo2 = 1;
                }
                //newLevel = true;
                retVal += algo2;
            }
        }
        ubcAct += 2;
        ubicador++;
        return retVal;
    }
}
