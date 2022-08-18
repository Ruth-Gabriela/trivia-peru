const tituloCuentaRegresiva = document.getElementById("cuentaRegresiva");
//variables contador:
let answercorrect = 0;
let answerincorrect = 0;

//Contador en 20
let contador = 20;
//añade al input el número 20 par que comience la cuenta regresiva
tituloCuentaRegresiva.innerHTML = `⏰: ${contador}s`;

// Cuenta Regresiva
const mostrarCuentaRegresiva = () => {
	let cuentaRegresiva = setInterval(() => {
		contador--;
		tituloCuentaRegresiva.innerHTML = `⏰: ${contador}s`;
    //cuando esta en 0 la cuenta se detiene
		if(contador == 0) {
			clearInterval(cuentaRegresiva);
			mostrarResultados();
		}
	}, 1000);
};

mostrarCuentaRegresiva(); 


document.getElementById('question1').style.display = 'block';
//Esta función muestra la pregunta 2 y valída la respuesta de la pregunta 1

function question2(a) { //a toma la funcion del onclick="question2(`correct`)"
  if (a === 'correct') { // si es correct, aumenta 1 a la variable answercorrect;
    answercorrect++;
  } else {
    answerincorrect++;
  }

  document.getElementById('question2').style.display = 'block';
  document.getElementById('question1').style.display = 'none';
}
//Esta función muestra la pregunta 3 y valída la respuesta de la pregunta 2

function question3(b) {
  if (b === 'correct') {
    answercorrect++;
  } else {
    answerincorrect++;
  }
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'block';
}


//esta función trae el onclick = "seeResult(`correct`)"
function seeResult(c) {
  if (c === 'correct') {
    answercorrect++;
  } else {
    answerincorrect++;
  }

  mostrarResultados();
}


function mostrarResultados(){

  if (answercorrect == 0 && answerincorrect == 0) {
    document.getElementById('text').innerHTML = ("NO MARCASTE NINGUNA OPCION 😪");
    document.getElementById('answer-question').style.display = 'none';
  }

  if (answercorrect == 3 && answerincorrect == 0) {
    document.getElementById('text').innerHTML = ("EXCELENTE!!! 🥳");
  }

  if (answercorrect < 3 && answercorrect > 0) {
    if (answercorrect == 2 || answercorrect == 1) {
      document.getElementById('text').innerHTML = ("SIGUE PRACTICANDO 🤔");
    }
  }

  if (answercorrect == 0 && answerincorrect > 0) {
    document.getElementById('text').innerHTML = ("NO ACERTASTE NINGUNO 😥");
  }

  
  document.getElementById('result').style.display = 'block';


  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'none';

  
  //ingresa los valores de las variables a las etiquetas <p>
  document.getElementById('correct').innerHTML = answercorrect;
  document.getElementById('incorrect').innerHTML = answerincorrect;
}

