//comente linea 69


var longAct = 1;
var ubicador;
var actNivel = 0;
var yAct;
var ubcsPerNivel = []
var nivelDeseado;
function sierpinski(n) {
    longAct = 1;
    nivelDeseado = n;
    var IndiceMax = Math.pow(2, n);
    var result = []
    for (i = 1; i <= IndiceMax; i++) {
        
        var valActual = "";
        for (j = 1; j <= longAct; j++) {
            valActual += defValor(i, j);
        }
        result.push(valActual);
        longAct += 2;
    }
    var algo = result.map(function (m) {
        return m.replace(/0/g, " ").replace(/1/g, "L");
    }).join('\n');
    return algo;
}


function defValor(y, x) {
    if (x % 2 == 0) return "0";
    var valor = "0";
    if (x == 1 || x == longAct) valor = "1";

    var exp = Math.log(y) / Math.log(2);
    if (exp % 1 == 0) {
        valor = x % 2 == 0 ? "0" : "1";
        ubcsPerNivel = []
        actNivel += yAct != y ? 1 : 0;
        ubicador = 0;
    }
    else {
        ubicador += 1;
    }
    if (x == Math.pow(2, actNivel) + 1) valor = "1";

    yAct = y;
    //if (x == 3 && y % 2 == 0) valor = "1";
    //if ((y - 2) % 4 == 0 && x == 3) valor = "1"; //PONE LOS PRIMEROS PARA COMPLETAR LOS TRIANGULOS PEQUE;OS DEBE MODIFICARSE PARA SER GENERICOS A TODO EL RENGLON

    //if ((y - 3) % 4 == 0 && x == 5) valor = "1"; //PONE LOS PRIMEROS PARA COMPLETAR LOS TRIANGULOS PEQUE;OS DEBE MODIFICARSE PARA SER GENERICOS A TODO EL RENGLON


    if (y % 4 == 0) {

        if (y == 12) var tales = 2;
        var algo = (y - Math.pow(2, (Math.floor(Math.log(y) / Math.log(2))))) / 4;

        if (algo >= 1 && x > (algo * 8) && x != longAct && x != Math.pow(2, actNivel) + 1 && (x <= Math.pow(2, actNivel) + 1)) valor = "0";
        else valor = "1";   // poner horizonaltes diferentes a separadores de nivel


        if (x == ((algo * 8) + 1) && algo > 0) {
            ubcsPerNivel.push((algo * 8) + 1);
            var algo10 = (Math.pow(2, (Math.floor(Math.log(y) / Math.log(2)) + 1))) + ((algo * 8) + 1);
            ubcsPerNivel.push(algo10);
        }
        if (ubcsPerNivel.length > 0) {
            var valor2 = ubcsPerNivel.filter(function (val) {
                return x == val;
            });
            //if (valor2.length > 0) valor = "1";
        }

        //valor = "1";
    }

    else if (y > 4) {
        if (y == 29) var algo123 = 3232;
        var repArray = []
        var nAct = Math.floor(Math.log(y) / Math.log(2));//Math.floor((Math.log(y) / Math.log(2)) + 1);
        var repeticiones = Math.floor((y - Math.pow(2, Math.floor(Math.log(y) / Math.log(2)))) / 4) + 1;  //numero de veces por nivel
        var yMax = (y * 2) - 1;
        for (a = 0; a <= repeticiones; a++) {
            repArray.push(((yMax - 8) - Math.pow(2, nAct)) - (repeticiones * 8));
        }

        var repeat = repArray.filter(function (m) {
            return m == x;
        });

        if (repeat.length > 0) valor = "1";



        //var nAct = Math.floor((Math.log(y) / Math.log(2)) + 1);
        //var yMax = (y * 2) - 1;
        //if (x == yMax - Math.pow(2, nAct)) {
        //    valor = "1";
        //}
    }
    //if (y == 13 && x == 9) var tales = "2";
    if (valor != "1") {
        if (ubcsPerNivel.length > 0) {
            var valor2 = ubcsPerNivel.filter(function (val) {
                return x == val;
            });
            if (valor2.length > 0 && y % 4 != 0) valor = "1"; // poner los verticales 
        }
    }
    //if (ubicador % 4 == 0 && ubicador != 0) {
    //    valor = 1;
    //}
    return valor;
}