<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestTicTacToe.aspx.cs" Inherits="AlgoritmosCF.TestTicTacToe" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script type="text/javascript" src="TicTacToe2.js"></script>
    <script type="text/javascript">
        var ttt = new TicTacToe()

        //alert(ttt.move(1)) // -> [5, "Your move?"]
        //alert(ttt.move(2))// -> [3, "Your move?"]
        //alert(ttt.move(-10)) // -> [9, "Your move?"]

        //set pc empieza y gana
        alert(ttt.move()) // -> [5, "Your move?"]
        alert(ttt.move(1))// -> [3, "Your move?"]
        alert(ttt.move(4)) // -> [9, "Your move?"]
        alert(ttt.move(9))


        //set valor invalido
        alert(ttt.move(1)) // -> [5, "Your move?"]
        alert(ttt.move(2))// -> [3, "Your move?"]
        alert(ttt.move(0)) // -> [9, "Your move?"]
        alert(ttt.move(9))
        //alert(ttt.move())

        //alert(ttt.move(6)) // -> [4, "Your move?"]
        //alert(ttt.move(8)) // -> [0, "Draw!"]
        //alert(algo);
    </script>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
</body>
</html>
