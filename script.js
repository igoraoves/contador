function contar() {
  let inicio = document.getElementById("inicio")
  let fim = document.getElementById("fim")
  let passo = document.getElementById("passo")
  let resp = document.getElementById("resp")

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    resp.innerHTML = "Opção inválida <br>"
  }else{
    resp.innerHTML = "Contando..."
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
      resp.innerHTML = "Considerando que o passo é igual a 1 <br>"
      p = 1
    }

    if(f > i) {
     for(let c = i; c <= f; c += p){
      resp.innerHTML += `\u{1F3C3} ${c}  `
    }
    }else{
        for(let c = i; c >= f; c -= p){
          resp.innerHTML += `\u{1F3C3} ${c}`
        }
      
    }
  }
}
