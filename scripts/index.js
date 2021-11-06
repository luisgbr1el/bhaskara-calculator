
// (function () { // Auto-start function

// }());


function Calculate() {
	var a = parseFloat(document.getElementById("a").value);
	var b = parseFloat(document.getElementById("b").value);
	var c = parseFloat(document.getElementById("c").value);


	var delta = (b * b) - (4 * a * c);

	var x1 = -(b) + Math.sqrt(delta);
	var x2 = -(b) - Math.sqrt(delta);

	var produtoRaizes = x1 * x2;

	$("#calculosDelta").fadeOut(function() {
			$("#calculosDelta").html("Δ = " + b + "² - 4 * " + a + " * " + c).fadeIn(500);
		});

	//document.getElementById("delta").innerHTML = ;
	$("#delta").fadeOut(function() {
			$("#delta").html("Δ = " + delta).fadeIn(1000);
		});


	if (delta > 0) {
		//document.getElementById("bhaskara").innerHTML = 

		$("#bhaskara").fadeOut(function() {
			$("#bhaskara").html("X¹ = " + x1 + "<br>X² = " + x2).fadeIn(2000);
		});

	} else if (delta < 0) {
		$("#bhaskara").fadeOut(function() {
			$("#bhaskara").html("Como o valor de delta é negativo, não existem <b>raízes reais</b> (ℝ) para este número.").fadeIn(2000);
		});
	} else if (delta == 0) {
		$("#bhaskara").fadeOut(function() {
			$("#bhaskara").html("Como Δ = 0, a equação possui uma única <b>solução real</b>. (ℝ)").fadeIn(2000);
		});
	} 

	if (document.getElementById("a").value.length == 0 || document.getElementById("b").value.length == 0 || document.getElementById("c").value.length == 0) {
		alert("Preencha todos os campos!")
		//window.location.reload()
		document.getElementById("delta").innerHTML = "Δ = indefinido";
	}


	//console.log(delta);



	//console.log("X¹ = " + x1 + "\nX² = " + x2);

	
	
}