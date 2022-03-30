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

// Colocar um listener na nossa tabela
document.getElementById('tabelaFornecedores');

// Populamos os objetos com dados do nosso banco
nomesRef.once("value", function(snapshot){
    var data = snapshot.val();
    
    //var json = JSON.parse(data);

    for(let i in data){
        console.log(data[i]);

        let k = i.name;

        document.querySelector('#root').innerHTML = `

        <table class="table" id="tabelaFornecedores">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fornecedor</th>
            <th scope="col">Produto</th>
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${i}</th>
            <td>${k} </td>
            <td>produt</td>
            <td>R$ 2500.00</td>
          </tr>
        </tbody>
      </table>
        `;

    }
});