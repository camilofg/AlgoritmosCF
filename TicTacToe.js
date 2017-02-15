var corners = [1, 3, 7, 9];
var edges = [2, 4, 6, 8];

function TicTacToe() {
    this.moves = [];
    this.currentPlayer;
    this.message = "";
    }

TicTacToe.prototype.move = function (field) {
    if (this.moves.length === 0) {
        if (!!!field) {
            this.moves.push({ key: 5, value: "M" })
            this.currentPlayer = "H";
        }
        else {
            this.moves.push({ key: field, value: "H" });
            this.currentPlayer = "M";
        }
    }
    else {
        if (this.currentPlayer === "M") {
            this.machineEvaluation(field);
        }
        else {
            if (!this.validatePosition(field)) this.message = "Illegal move";
            this.moves.push({ key: field, value: "H" });
            this.currentPlayer = "M";
        }
    }
    if (this.moves.length > 5) {
        evaluateWinner();
    }
    return this.message;
}

TicTacToe.prototype.machineEvaluation = function(field) {
    var positions = [];
     positions = this.moves.filter(function (m) {
        return m.key === 5;
    });

    if (algo.length === 0) {
        this.moves.push({ key: 5, value: "M" });
        this.currentPlayer = "H";
        return;
    };

    for (i = 0; i < corners.length; i++) {
        positions = this.moves.filter(function (m) {
            return m.key === corners[i];
        });
    }

    if (positions.length > 0) this.moves.push({ key: positions[0], value: "M" });

    for (i = 0; i < edges.length; i++) {
        positions = this.moves.filter(function (m) {
            return m.key === edges[i];
        });
    }

    if (positions.length > 0) this.moves.push({ key: positions[0], value: "M" });
    this.currentPlayer = "H";
}


TicTacToe.prototype.evaluateWinner = function () {
    var posEvaluate = TicTacToe.moves.filter(function (m) {
        return m.value = TicTacToe.currentPlayer;
    });
}

TicTacToe.prototype.validatePosition = function(field) {
    var valid = this.moves.filter(function (m) {
        return m.key === edges[i];
    });
    return valid.length > 0 ? false : true;
}
