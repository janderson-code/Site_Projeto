/*Script para mostrar paginas dinamicas após buttons clicados que estão na div-painel-row  na pagina de gerenciamento de peso em seguida mostra paginas cadastrarPeso e visualizarPeso que estão na pasta ajax */ 
let content = document.getElementById('ajax-content')

/*Função para mostrar Html nos buttons*/
function fetchContent(el) {
  let view = el.getAttribute('a-view') /*Variavel que pega atributo a-view e seu valor */ 
  let folder = el.getAttribute('a-folder')/*Variavel que pega atributo a-folder e seu valor */
  fetch(`/ajax/${folder}/${view}.html`)/*Caminho para os arquivos que estão na pagina ajax com variaveis acima*/
    .then(response => { /*chama o then*/
      let html = response.text()/* igual a texto*/
      return html 
    })
    .then(html => {/*chamando a variavel html anterior */
      content.innerHTML = html
    })
}