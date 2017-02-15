function TicTacToe() {
    this.moves = [];
    this.message = "";
    this.gameActive = true;
    this.lastMachineMove;
    this.currentPlayer;
    this.playerStarter;
    }

TicTacToe.prototype.move = function (field) {
    if (!this.gameActive) return [0, "Game ended"];
    if (this.moves.length === 0)
        this.playerStarter = arguments.length === 0 ? "M" : "H";
    if (arguments.length === 0) {
        this.machineEvaluation();
    }

    else {
        if (!this.validatePosition(field)) {
            this.lastMachineMove = 0;
            this.message = "Illegal move";
            return [this.lastMachineMove, this.message];
        }
        this.moves.push({ key: field, value: "P" + (((this.moves.length) % 2 === 0 ? "1" : "2")) });
        this.currentPlayer = this.moves.length % 2 === 0 ? "P2" : "P1";
        this.machineEvaluation();
    }

    if (this.moves.length > 4) {
        this.evaluateWinner();
    }
    return [this.lastMachineMove, this.message];
}

TicTacToe.prototype.machineEvaluation = function () {
    var positions = [];
    this.message = this.moves.lenght >= 8 ? "Draw!" : "Your move?";
    this.currentPlayer = this.moves.length % 2 === 0 ? "P1" : "P2";
    positions = this.moves.filter(function (m) {
        return m.key === 5;
    });

    if (positions.length === 0) {
        this.moves.push({ key: 5, value: "P" + ((this.moves.length) % 2 === 0 ? "1" : "2") });
        this.lastMachineMove = 5;
        return;
    };

    for (j = 1; j < 10; j++) {
        positions = []
        positions = this.moves.filter(function (m) {
            return m.key === (j % 2 != 0 ? j : m.key);
        });
        if (positions.length === 0) {
            this.moves.push({ key: j, value: "P" + ((this.moves.length) % 2 === 0 ? "1" : "2") });
            this.lastMachineMove = this.moves.lenght >= 8 ? 0 : j;
            return;
        }
    }

    for (i = 1; i < 4; i++) {
        positions = []
        positions = this.moves.filter(function (m) {
            return m.key === (i * 2);
        });
        if (positions.length === 0) {
            this.moves.push({ key: (i * 2), value: "P" + ((this.moves.length + 1) % 2 === 0 ? "1" : "2") });
            this.lastMachineMove = this.moves.lenght >= 8 ? 0 : i * 2;
            return;
        }
    }
}


TicTacToe.prototype.evaluateWinner = function () {
    //var lastMove =  this.moves[this.moves.length - 1].value;
    var lastMove = this.currentPlayer;
    var posEvaluate = this.moves.filter(function (m) {
        return m.value == lastMove;
    });
    var strEvaluate = this.toStringObj(posEvaluate);
    if (strEvaluate.indexOf("5") != -1) {

        for (i = 1; i < 5; i++) {
            if (strEvaluate.indexOf(5 - i) != -1 && strEvaluate.indexOf(5 + i) != -1) {
                this.gameActive = false;
                this.message = (this.moves.length % 2 != 0 ? this.playerStarter : (this.playerStarter == "H" ? "M" : "H")) == "M" ? "I win!" : "YOU WIN";
                return;
            }
        }
    }
    else {
        if (strEvaluate.indexOf("1") != -1) {
            if (strEvaluate.indexOf("2") != -1 && strEvaluate.indexOf("3") != -1) {
                this.gameActive = false;
                this.message = (this.moves.length % 2 != 0 ? this.playerStarter : (this.playerStarter == "H" ? "M" : "H")) == "M" ? "I win!" : "YOU WIN";
                return;
            }
            if (strEvaluate.indexOf("4") != -1 && strEvaluate.indexOf("7") != -1) {
                this.gameActive = false;
                this.message = (this.moves.length % 2 != 0 ? this.playerStarter : (this.playerStarter == "H" ? "M" : "H")) == "M" ? "I win!" : "YOU WIN";
                return;
            }
        }
        if (strEvaluate.indexOf("9") != -1) {
            if (strEvaluate.indexOf("8") != -1 && strEvaluate.indexOf("7") != -1) {
                this.gameActive = false;
                this.message = (this.moves.length % 2 != 0 ? this.playerStarter : (this.playerStarter == "H" ? "M" : "H")) == "M" ? "I win!" : "YOU WIN";
                return;
            }
            if (strEvaluate.indexOf("6") != -1 && strEvaluate.indexOf("3") != -1) {
                this.gameActive = false;
                this.message = (this.moves.length % 2 != 0 ? this.playerStarter : (this.playerStarter == "H" ? "M" : "H")) == "M" ? "I win!" : "YOU WIN";
                return;
            }
        }
    }
    if (this.moves.length > 8) return [this.lastMachineMove = 0, this.message = "Draw!"];


}

TicTacToe.prototype.validatePosition = function (field) {
    if (field < 1 || field > 9) return false;
    var valid = this.moves.filter(function (m) {
        return m.key === field;
    });
    return valid.length > 0 ? false : true;
}

TicTacToe.prototype.toStringObj = function (obj) {
    var result = "";
    for (i = 0; i < obj.length; i++) {
        result += obj[i].key + (i != obj.length - 1 ? ',' : "");
    }
    return result.toString();
}
