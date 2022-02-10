function media(){
    var n1,n2,n3,n4,media, conceito
    n1=parseFloat(document.getElementById("n1").value)
    n2=parseFloat(document.getElementById("n2").value)
    n3=parseFloat(document.getElementById("n3").value)
    n4=parseFloat(document.getElementById("n4").value)
    media=(n1+n2+n3+n4)/4
    if(media>=9)
    {
        conceito="A"
    }
    if(media>=8 && media<9)
    {
        conceito="B"
    }
    if(media>=7 && media<8)
    {
        conceito="C"
    }
    if(media<7)
    {
        conceito="D"
    }
    document.getElementById("media").innerHTML=`A sua media é ${media}`
    document.getElementById("conceito").innerHTML=`O seu conceito final é ${conceito}`

}