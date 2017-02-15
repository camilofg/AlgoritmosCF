<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sierpinskiTest.aspx.cs" Inherits="AlgoritmosCF.sierpinskiTest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="Scripts/jquery-1.7.min.js" type="text/javascript"></script>
    <%--<script src="sierpinski.js"></script>--%>
    <script src="TestSirpinski2.js"></script>
    <script src="ConvertRomanNumbers.js"></script>
    <script>
        $(document).ready(function () {
            var algo = sierpinski(8);
            alert(algo);
            var algo2 = solution("MCM");
            //$("#LblSalida").text(sierpinski(3));
        });
        
    </script>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <span id="LblSalida"></span>
    <div>
    
    </div>
    </form>
</body>
</html>
