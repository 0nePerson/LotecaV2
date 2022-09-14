var numEsco = [];
var numSort = [];

  function sortNumeros() {
    for (let i = 0; i < 6; i++) {
      let num = Math.ceil(Math.random() * 60);
      console.log(num);
      if (!numSort.includes(num)) {
        numSort[i] = num;
      } else {
        i = i - 1;
      }
    }
    console.log(numSort)

  }

  function lerNumero(value, pos){
    let num = Number(value)
    if(value < 1) {
      alert("Numero não pode ser zero ou negativo! Digite novamente")
    } else if(value > 60) {
      alert("Numero não pode ser maior que 60! Digite novamente")
    } else if(numEsco.includes(value)){
      alert("Numero Repetido! Digite novamente")
    } else {
      numEsco[pos] = value
      console.log(numEsco)
    }

  function contarAcertos(){
    let cont = 0;
    numEsco.forEach(function(value,index){
      if(numSort.includes(value)){
        cont + 1;
      }
    })
    document.getElementById("acertos").innerHTML = cont;
  }
}