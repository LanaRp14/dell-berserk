function criaCartao(categoria, pergunta, resposta){
let container = document.getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'

cartao.innerHTML = `
<div class="cartao_conteudo">
  <h3> ${categoria} </h3>
      <div class="cartao_pergunta">
         <p> ${pergunta} </p>
     </div>
      <div class="cartao_resposta">
          <p> ${resposta} </p>
     </div>
</div>
`
    let respostaEsVisite = false    
    function virarCartao(){
        respostaEsVisite = !respostaEsVisite
        cartao.classList.toggle('active',respostaEsVisite)
    }
cartao.addEventListener('click', virarCartao)
container.appendChild(cartao)

}
