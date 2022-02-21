function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("foto");
  let data = new Date();
  let hora = data.getHours();
  //let hora = 19; //Quando quiser por hora na pata adc aqui
  msg.innerHTML = `Agora são ${data} `;

  if (hora >= 0 && hora < 12) {
    img.innerHTML = '<img src="manha.png">';
    document.body.style.background = "#b5a114";
  } else if (hora >= 12 && hora < 18) {
    img.innerHTML = '<img src="tarde.png">';
    document.body.style.background = "#fe5900";
  } else {
    img.innerHTML = '<img src="noite.png">';
    document.body.style.background = "#2e83c0";
  }
}
