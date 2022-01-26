var v=[4, 8, 7, 6]
alert(v)
alert (v[1])
v[2]=3
alert(v)
var soma = v[0]+v[3]
alert ("A soma do elemento 0 com o elemento 3 do vetor é "+soma)
lista = ["Juquinha", 1910, "Rua A", "Irati", "PR", 80.5]
alert (lista)
for(var i=0; i<lista.length;i++)
{
    document.write("<h2>"+lista[i]+"<h2/>")
}
lista.push("84500-000")
lista.push("teste") //push insere um elemento na ultima posição
alert(lista)
lista.pop ()//remove o ultimo elemento da lista
alert (lista)
lista.shift()//remove o primeiro elemento da lista
alert(lista)
lista.unshift("Zequinha")//adiciona um elemento a primeira posição 
alert(lista)
var posição
posição=lista.indexOf("Irati")
alert(posição)