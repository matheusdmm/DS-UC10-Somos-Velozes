// referenciar alguma coleção/tabela desejada
// nesse caso a tabela de fornecedores
let nomesRef = firebase.database().ref('Fornecedores');

// Colocar um listener no elemento da nossa tabela
document.getElementById('tabelaFornecedores');

// Lê o banco e retorna os dados para uma função
firebase.database().ref(nomesRef).once('value', function(AllRecords) {      
    AllRecords.forEach(function(CurrentRecord) {
        // para ativar o spinner enquanto o CurrentRecord é vazio
        if (CurrentRecord != null) {
            let objects = CurrentRecord.val();
            //let key = CurrentRecord.key; P/ pegar a key da cabeça dos obj

            let key        = CurrentRecord.key;
            let name       = objects.name;
            let contato    = objects.contato;
            let produto    = objects.produto;
            let descricao  = objects.descricao;
            let preco      = objects.preco;
            let quantidade = objects.quantidade;
            
            // chama o bagulho para esconder o spinner
            hideSpinner()
            // chama a função de template
            ExibirTabela(key, name, contato, produto, descricao, preco, quantidade); 
            }         
        }
    );
});

// esconder o spinner
function hideSpinner() {
    document.getElementById('spinner')
            .style.display = 'none';
} 

// template da tabela
function ExibirTabela(key, name, contato, produto, descricao, preco, quantidade) {
    // cria no javascript os elementos para dar append no html
    let tbody = document.getElementById('tabelaFornecedores');
    // cria o elemento tr
    let trow = document.createElement('tr');
    // concatenar o formato bonitinho do preço
    preco = 'R$ ' + preco;

    // criar os elementos td e btn
    let td0       = document.createElement('td');
    let td1       = document.createElement('td');
    let td2       = document.createElement('td');
    let td3       = document.createElement('td');
    let td4       = document.createElement('td');
    let td5       = document.createElement('td');
    let td6       = document.createElement('td');
    let btnEditar = document.createElement('a');
    let btnApagar = document.createElement('a');
    
    // atribui as variaveis passadas para os parametros da função
    td0.innerHTML = key;
    td0.id = "ID";

    td1.innerHTML = name;
    td0.id = "Nome-fornecedor";

    td2.innerHTML = contato;
    td0.id = "Contato";

    td3.innerHTML = produto;
    td0.id = "Produto";

    td4.innerHTML = descricao;
    td0.id = "Descricao";

    td5.innerHTML = preco;
    td0.id = "Preco";

    td6.innerHTML = quantidade;
    td0.id = "Quantidade";

    btnEditar.innerHTML = '<a class="btn btn-success" onClick="Get()" role="button">Editar</a>'
    btnApagar.innerHTML = '<a class="btn btn-danger" onClick="" role="button">Apagar</a>'

    // adiciona ao html
    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    //trow.appendChild(btnEditar);
    //trow.appendChild(btnApagar);

    // adiciona ao elemento 'tabela fornecedores'
    tbody.appendChild(trow);
}

// receber o conteúdo de determinado objeto no banco
// e depois passar para uma nova janela
function OpenCadastroNovoFornecedor() {
    // instancio uma popup
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no, width=600,height=800,left=-1000,top=-1000`;
    open('./cadastro_fornecedor.html', 'SMV', params);
}