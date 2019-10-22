var perguntaAtual = 0;
var totalPerguntas = perguntas.length;
var total = [];
var a = document.getElementsByName("option");
var container = document.getElementById('quizContainer');
var containerForm = document.getElementById('formulario');
var perguntaEl = document.getElementById('pergunta');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var finishButton = document.getElementById('finishButton');
var startButton = document.getElementById('startButton');
var resultCont = document.getElementById('resultado');
var sectionInicio = document.getElementById('section-inicio');

function carregarPergunta (questionIndex) {
	var q = perguntas[questionIndex];
	perguntaEl.textContent = (questionIndex + 1) + '. ' + q.pergunta;
	opt1.textContent = q.opcao1;
	opt2.textContent = q.opcao2;
	opt3.textContent = q.opcao3;
	opt4.textContent = q.opcao4;
};

function inicio (){
	sectionInicio.style.display = 'none';
	container.style.display = 'block';
	nextButton.style.display = 'block';
	startButton.style.display = 'none';
}

function proximaPergunta () {
	var opcaoSelecionada = document.querySelector('input[type=radio]:checked');
	var respostaRadio = document.querySelector('input[type=radio]:checked').value;

	if(!opcaoSelecionada){
		document.getElementById("aviso").style.display = 'block';
		return;
	} else {
		$('#respostas-form').val($('#respostas-form').val() + respostaRadio);
	}
	for (i = 0; i < a.length; i++) {
		if (a[i].checked && a[i].value == "3"){
			total.push("respostas");
		}
	}
	opcaoSelecionada.checked = false;
	perguntaAtual++;
	if(perguntaAtual == totalPerguntas - 1){
		nextButton.textContent = 'Finalizar';
	}
	if(perguntaAtual == totalPerguntas){
		containerForm.style.display = 'block';
		container.style.display = 'none';
		nextButton.style.display = 'none';
		finishButton.style.display = 'block';
	}
	document.getElementById("aviso").style.display = 'none';
	carregarPergunta(perguntaAtual);
	
}


function calculo () {
	if (total.length > 12) {
		document.getElementById("titulo-resultado").innerHTML = "Parabéns, hora de conquistar seu investimento!";
		document.getElementById("mostrar-resultado").innerHTML = "Parabéns, você está preparado para fazer um pitch arrasador e já sair com um investimento! Ficou provado que tem todas as definições e respostas importantes na ponta da língua, agora é só colocar essa vontade de vender o seu peixe em prática e conquistar o coração e a carteira das pessoas que buscam por ideias que resolvem grandes problemas;";
	} else if (total.length >= 9 && total.length <= 12) {
		document.getElementById("titulo-resultado").innerHTML = "Muito bom, você está no caminho certo!";
		document.getElementById("mostrar-resultado").innerHTML = "Você está quase lá! Ainda não é o seu momento de fazer um pitch arrasador e já conseguir um investidor, mas está batendo na trave. Estruture melhor alguns pontos da sua organização e entregue respostas coerentes com aquilo que os investidores mais buscam: uma empresa inovadora, mas com alta capacidade de gerar receita.";
	} else if (total.length >= 6 && total.length <= 8) {
		document.getElementById("titulo-resultado").innerHTML = "Atenção, revise alguns pontos!";
		document.getElementById("mostrar-resultado").innerHTML = "Ainda falta muita coisa para conseguir fazer um pitch arrasador. Algumas perguntas precisam ser revistas para entregar respostas cada vez melhores. Afinal de contas, as pessoas certas só vão conseguir investir na sua ideia se ela estiver muito bem estruturada.";
	} else if (total.length < 6) {
		document.getElementById("titulo-resultado").innerHTML = "Cuidado! Talvez seja hora de reavaliar seu projeto.";
		document.getElementById("mostrar-resultado").innerHTML = "Ainda falta muita coisa para conseguir fazer um pitch arrasador. Ainda está longe de encantar os investidores para trazer interessados no crescimento da sua empresa. Lembre-se que apesar de ser um negócio muito novo, é preciso cumprir com requisitos importantes, como a análise completa de mercado, de concorrentes e preparar um bom plano de negócios.";
	}
}

carregarPergunta(perguntaAtual);

