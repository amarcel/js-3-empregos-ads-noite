function acessarAPI(url) {
    let requisicao = new XMLHttpRequest();
    requisicao.open("GET", url, false);
    requisicao.send();
    return requisicao.responseText;
} // fim do acessarAPI
function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://mock-json-service.glitch.me/");
    let vagas = JSON.parse(dados);
    console.log(vagas);
    divDados = '';
    vagas.forEach(e => {
        // função anônima para tratar a resposta da API:
        divDados += '<div class="card">';
        divDados += '<div class="container">';
        divDados += '<h4>';
        divDados += '<b>Vaga ID ' + e.id + '</b>';
        divDados += '</h4>';
        divDados += '<p>Empresa: ' + e.company + '</p>';
        divDados += '<p>Descrição: ' + e.description + '</p>';
        divDados += '<p>Tipo: ' + e.employmentType + '</p>';
        divDados += '<p>Localização: ' + e.location + '</p>';
        divDados += '<p>Cargo: ' + e.position + '</p>';
        divDados += '<p>Habilidades: ' + e.skillsRequired + '</p>';
        divDados += '</div></div>';
    }); // fim do foreach
    document.getElementById("div_vagas").innerHTML = 
            divDados;
} // fim do carregarDadosAPI