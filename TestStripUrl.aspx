<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestStripUrl.aspx.cs" Inherits="AlgoritmosCF.TestStripUrl" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script type="text/javascript" src="stripUrl.js">
    </script>
    <script type="text/javascript" src="VigenèreCipher.js">
    </script>
    <script type="text/javascript" src="HighestRank.js"></script>
    <script>

        //var algo = stripUrlParams('www.codewars.com?a=1&b=2&a=2');
        //var algo = stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])
        //var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        //var key = 'password';

        //var c = new VigenèreCipher(key, alphabet);
        //var retorno = c.encode('codewars');
        //var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];//[12, 10, 8, 12, 7, 6, 4, 10, 12];//[12, 10, 8, 12, 7, 6, 4, 10, 10];
        //alert(highestRank(arr));

        //scoreHand(['A', 'A', 'J']);
        var tal = prime(23);

        /*
        var s = "Hello {foo} - {foobar} make me a {bar}... {foo}!!?";
        var p ="{bar: 'sandwich {foo}', foo: 'Jack' }";// 'Hello {foo}!!? - {foobar} make me a {bar}... {foo}';
        var o = {
            foo: 'Jack',
            bar: 'sandwich'
        };

        format(s, o); 
        */
        // "Hello Jack - make me a sandwich"
   //     sumIntervals([
   //[1, 5],
   //[10, 20],
   //[1, 6],
   //[16, 19],
   //[5, 11]
   //     ]);
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
