var display = document.getElementById(el).style.display;
  var botao = document.getElementById("btn");

  if (display == "none") {
    document.getElementById().style.display = 'block';
    botao.innerHTML = "Esconder";
  } else {
    document.getElementById(el).style.display = 'none';
    botao.innerHTML = "Mostrar";
  }
