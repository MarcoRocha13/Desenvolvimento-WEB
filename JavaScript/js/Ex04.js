function gerar()
{
    var n1,n2,n3,n4
    n2=1
    n3=2
    n1=parseFloat(document.getElementById("n1").value)
    alert(n2)
    alert(n3)
    for(var i=3; i<=n1;i++)
    {
        n4=n2+n3
        alert(n4)
        n2=n3
        n3=n4
    }
}