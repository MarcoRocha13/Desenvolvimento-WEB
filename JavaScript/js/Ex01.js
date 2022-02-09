
function transformar()
{
    var n1,k,h
    n1=parseFloat(document.getElementById("n1").value)
    k=n1+273
    h=(n1*1.8)+32
     document.getElementById("kelvin").innerHTML=`A temperatura em kelvin é ${k}`
     document.getElementById("fhr").innerHTML=`A temperatura em fahrenheit é ${h}°`

}


