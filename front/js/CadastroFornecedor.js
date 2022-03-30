// Inicializar o firebase
const firebaseConfig = {
    apiKey: "AIzaSyB4CT4MJq_zAH5Q90I41N5Jn1tUXjWS7SE",
    authDomain: "somosvelozes-2e0d4.firebaseapp.com",
    databaseURL: "https://somosvelozes-2e0d4-default-rtdb.firebaseio.com",
    projectId: "somosvelozes-2e0d4",
    storageBucket: "somosvelozes-2e0d4.appspot.com",
    messagingSenderId: "874736541728",
    appId: "1:874736541728:web:29f7bfa66a27504b965c45",
    measurementId: "G-Z99QC5XN50"
};
firebase.initializeApp(firebaseConfig);

// referenciar alguma coleção/tabela desejada
// nesse caso a tabela de fornecedores
var nomesRef = firebase.database().ref('Fornecedores');

// caso quisessemos por exemplo uma tabeça de CLIENTES poderiamos fazer:
// var clientesRef = firebase.database().ref('Clientes');

// Listener do botão de cadastro de fornecedor
document.getElementById('formCadastroFornecedor').addEventListener('submit', submitForm);

// func pra enviar os dados do fornecedor pro firebase
function submitForm(e) {
    e.preventDefault();

    // receber os valores e passar eles para a nossa função de template
    var name = getInputValue('fornecedorNome');
    var preco = getInputValue('fornecedorProdutoPreco');
    var produto = getInputValue('fornecedorProduto');
    var quantidade = getInputValue('fornecedorProdutoQuantidade');

    // passa pra função que salva os dados no banco propriamente dito
    saveFornecedor(name, produto, preco, quantidade);
}

// Func para receber o valor do item do form e criar um template
function getInputValue(id){
    return document.getElementById(id).value;
}

// func para salvar o fornecedor no banco
function saveFornecedor(_name, _produto, _preco, _quantidade) {
    // caso queira uma id diferente posteriormente
    //var customId = [name, ' ', produto].join('');
    // var newNomesRef = nomesRef.child(customId);

    var newNomesRef = nomesRef.push();
    
    // cria um objeto no banco com os atributos desejados
    newNomesRef.set({
        name: _name,
        produto: _produto,
        preco: _preco,
        quantidade: _quantidade
    });
}