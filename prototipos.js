function numbers(valor) {
    this.valor = valor;
}

numbers.prototype.square = function () {
    return this.valor.map(function (m) {
        return Math.pow(m, 2);
    });
}

numbers.prototype.cube = function () {
    return this.valor.map(function (m) {
        return Math.pow(m, 3);
    });
}

numbers.prototype.sum = function () {
    var result = (this.valor).reduce(function (a, b) {
        return a + b;
    })
    return result;
}

numbers.prototype.average = function () {
    var result = (this.valor).reduce(function (a, b) {
        return a + b;
    })
    return result / this.valor.length;
}

numbers.prototype.even = function () {
    return this.valor.map(function (m) {
        if (m % 2 === 0)
            return m;
    }).filter(function (n) {
        return n != null;
    });
}

numbers.prototype.odd = function () {
    return this.valor.map(function (m) {
        if (m % 2 != 0)
            return m;
    }).filter(function (n) {
        return n != null;
    });
}

function last() {
    return last.arguments.length == 1 ? last.arguments[0].split('')[last.arguments[0].split('').length - 1] : last.arguments[last.arguments.length - 1];
    var algo;
    //return algo == "string" ? list.split('')[list.split('').length - 1] : list[list.length - 1];
}