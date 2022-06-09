
var popular = document.getElementById ("a");
popular.addEventListener('click', function() {
var i, termo, matriz1 = [ ];
var i, termo, matriz2 = [ ];
var m1 = document.getElementById ("m1");
var m2 = document.getElementById ("m2");

for (i = 0; i < 4; i++) {
termo = prompt ("Informe os 4 números da PRIMEIRA matriz: ");
matriz1.push(termo);
console.log(matriz1[i]);
m1.innerHTML += "<li>" + matriz1[i] + "</li>";
}
for (i = 0; i < 4; i++) {
termo = prompt ("Agora os 4 números da SEGUNDA matriz: ");
matriz2.push(termo);
console.log(matriz2[i]);
m2.innerHTML += "<li>" + matriz2[i] + "</li>";
}
var soma = [ ];
for (i=0; i < 4; i++ ) {
	var res = parseFloat( matriz1[i] ) + parseFloat( matriz2[i] );
	soma.push(res);
	console.log(soma[i]);
	s.innerHTML +=  "<li>" +  soma[i] + "&nbsp" + "</li>";
};
popular.parentNode.removeChild( popular );
  
}, false)
