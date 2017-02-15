<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestKatas.aspx.cs" Inherits="AlgoritmosCF.TestKatas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="PaginationHelper.js"></script>
    <script src="TestJSfile.js"></script>
    <script>
        //[1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 4, 3, 4, 5, 6, 7, 8, 88, 12, 67]
        var helper = new PaginationHelper(["camilo", "forero", "gonzalez", "jaime", "Forero", "suaterna", "alcira", "dora"], 2);
        helper.pageCount(); //should == 2
        helper.itemCount(); //should == 6
        helper.pageItemCount(0); //should == 4
        helper.pageItemCount(1); // last page - should == 2
        helper.pageItemCount(2); // should == -1 since the page is invalid

        // pageIndex takes an item index and returns the page that it belongs on
        helper.pageIndex(0); //should == 1 (zero based index)
        helper.pageIndex(2); //should == 0
        helper.pageIndex(20); //should == -1
        helper.pageIndex(-10); //should == -1


        var resultado = numberToOrdinal(11, true);
        //alert(resultado);


        var algo = isPrime(3);
        alert(algo);
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
