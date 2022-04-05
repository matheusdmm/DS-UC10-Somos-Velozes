// globais dos nomes do form
let name_, preco_, produto_, quantidade_, id;

// referenciar alguma coleção/tabela desejada
// nesse caso a tabela de fornecedores
let nomesRef = firebase.database().ref("Estoque");
// caso quisessemos por exemplo uma tabeça de CLIENTES poderiamos fazer:
// let clientesRef = firebase.database().ref('Clientes');

let database = firebase.database();

// Func para receber o valor do item do form e criar um template
function getInputValue(id) {
    return document.getElementById(id).value;
}

// template pra puxar os dados do form
function ReadForm() {
    id_         = getInputValue("fornecedorID");
    name_       = getInputValue("fornecedorNome");
    contato_    = getInputValue("fornecedorContato");
    produto_    = getInputValue("fornecedorProduto");
    descricao_  = getInputValue("produtoDescricao");
    preco_      = getInputValue("fornecedorProdutoPreco");
    quantidade_ = getInputValue("fornecedorProdutoQuantidade");
}

// func para salvar o fornecedor no banco
function Insert() {
    ReadForm();
    // caso queira uma id diferente posteriormente
    //let customId = [name, ' ', produto].join('');
    // let newNomesRef = nomesRef.child(customId);

    let newNomesRef = nomesRef.push();

    // cria um objeto no banco com os atributos desejados
    newNomesRef.set({
        name:       name_,
        contato:    contato_,
        produto:    produto_,
        descricao:  descricao_,
        preco:      preco_,
        quantidade: quantidade_,
    });

    alert("Fornecedor cadastrado!");
    window.location.reload();
}

// Selecionar/buscar de dentro do db
function Select() {
    ReadForm();

    firebase
        .database()
        .ref("Fornecedores/" + id_)
        .on("value", function(snapshot) {
            document.getElementById("fornecedorNome").value              = snapshot.val().name;
            document.getElementById("fornecedorContato").value           = snapshot.val().contato;
            document.getElementById("fornecedorProduto").value           = snapshot.val().produto;
            document.getElementById("produtoDescricao").value            = snapshot.val().descricao;
            document.getElementById("fornecedorProdutoPreco").value      = snapshot.val().preco;
            document.getElementById("fornecedorProdutoQuantidade").value = snapshot.val().quantidade;
        });
}

// Apagar
function Delete() {
    ReadForm();
    
    let c = confirm("Tem certeza que deseja apagar o fornecedor " + name_ + "?");
    
    if (c == true) {
        firebase
        .database()
        .ref("Fornecedores/" + id_)
        .remove();

        window.location.reload();
    } else {
        window.location.reload();
    }

}

// atualizar
function Update() {
    ReadForm();
    firebase
        .database()
        .ref("Fornecedores/" + id_)
        .update({
            name:       name_,
            contato:    contato_,
            produto:    produto_,
            descricao:  descricao_,
            preco:      preco_,
            quantidade: quantidade_,
        });

    alert("Atualizado!");
    window.location.reload();
}

// Atribuir as funções aos botões
// inserir no bd
document.getElementById("insert").onclick = function() {
    Insert();
};

// func pra selecionar no banco
document.getElementById("select").onclick = function() {
    Select(); 
};

// func pra editar no banco
document.getElementById("update").onclick = function() {
    Update();
};

// func pra deletar no banco
document.getElementById("delete").onclick = function() {
    Delete();
};