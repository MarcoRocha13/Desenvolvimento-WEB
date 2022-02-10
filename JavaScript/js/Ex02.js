function transformar01()
{
    var n1,r
    n1=parseFloat(document.getElementById("n1").value)
    r=n1*5.25
     document.getElementById("real").innerHTML=`O valor convertido de dolar para real é R$ ${r}`
   

}
function transformar02()
{
    var n1,d
    n1=parseFloat(document.getElementById("n1").value)
    d=n1/5.25
    document.getElementById("dolar").innerHTML=`O valor convertido de real para dolar é $ ${d}`


}