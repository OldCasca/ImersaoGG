//console.log(filmesOscar[3].titulo);

//definição da função executada ao clicar no botão
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    //se o botão foi clicado com o campo vazio
    if (!campoPesquisa) {
        section.innerHTML = '<p>Pesquisa não realizada</p>';
        return;
    } 

    let varesultados = "";
    let diretor = "";
    let titulo = "";
    campoPesquisa = campoPesquisa.toLowerCase();
    //laço de repetição
    for (let dado of filmesOscar) {
        diretor = dado.diretor.toLowerCase();
        titulo = dado.titulo.toLowerCase();
        console.log(campoPesquisa);
        console.log(diretor);
        console.log(titulo);
        //condição para o teste
        if (diretor.includes(campoPesquisa) || titulo.includes(campoPesquisa)) {
            varesultados += `
    
            <h3>${dado.titulo}</h3>
                 <p class="descricao-meta">${dado.diretor}</p>
            <a href="https://www.google.com.br" target="_blank">${dado.anoDeLancamento}</a>
        `            
        }
/*
        console.log(dado.diretor.includes(campoPesquisa));
        varesultados += `
    
    <h3>${dado.titulo}</h3>
         <p class="descricao-meta">${dado.diretor}</p>
    <a href="https://www.google.com.br" target="_blank">${dado.anoDeLancamento}</a>
`*/
    }
    if (!varesultados) {
        varesultados= "<p>Nada encontrado</p>";
    }
    section.innerHTML = varesultados;
}


