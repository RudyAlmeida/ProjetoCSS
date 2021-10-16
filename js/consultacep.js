/* função para teste, vai ser apagada depois. Estava tentando salvar num Json externo enquanto não vemos banco de dados. Vou deixar essa parte parada ate lá*/
function caregar() {
    /* let dados = localStorage.getItem("dados");
    console.log(dados)
    let getDados = JSON.parse(dados);
    console.log(getDados);
    let passDados = JSON.stringify(dados)
    console.log(passDados); */
    /* let json = require('../json/usuarios.jsonc');
    console.log(json, "employees"); */
    fetch("../json/usuarios.json")
        .then(response => response.json())
        .then(json => console.log(json));
    let fs = require(['fs']);
    let data = {
        data: "abc",
        stuff: 10,
        more_data: "1 2 3 4 3 2 1",
    };
    const jsonString = JSON.stringify(data);
    fs.writeFile('../json/usuarios.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
}
const salvarDados = [];
/* função para checar os campos do e-mail conforme aprendido na aula */
function enviardados() {
    if (document.cadastro.nome.value.length < 3) {
        alert("Preencha o nome corretamente");
        document.cadastro.nome.focus()
        return false;
    }
    if (document.cadastro.email.value.length < 3) {
        alert("Preencha o email corretamente");
        document.cadastro.email.focus()
        return false;
    }
    if (document.cadastro.tel.value.length < 3) {
        alert("Preencha o telefone corretamente");
        document.cadastro.tel.focus()
        return false;
    }
    if (document.cadastro.date.value.length < 3) {
        alert("Preencha a data de nascimento corretamente");
        document.cadastro.date.focus()
        return false;
    }
    if (document.cadastro.numero.value.length < 1) {
        alert("Preencha o número da sua residencia corretamente");
        document.cadastro.numero.focus()
        return false;
    }
    if (document.cadastro.password.value.length < 6) {
        alert("Escolha uma senha com no minimo 6 digitos");
        document.cadastro.numero.focus()
        return false;
    }
    if (document.cadastro.password.value != document.cadastro.passwordCheck.value) {
        alert("Sua senha não confere");
        document.cadastro.numero.focus()
        return false;
    }

    // if (localStorage.getItem("dados") === null) {
    /* tentativas de salvar os dados, precisa de melhoramento, tinha usado tambem Local Storage.
    Algumas das coisas comentadas funcionam, mas como não vamos apresentar essa parte do projeto, vai ficar parada ate terminarmos a parte de banco de dados, onde podera ser implementada mais eficazmente.*/
    let formDados = {};
    formDados = ("nome : " + cadastro.nome.value + ',' + "email : " + cadastro.email.value + ',' + "telefone : " + cadastro.tel.value + ',' + "data : " + cadastro.date.value + ',' + "cep : " + cadastro.cep.value + ',' + "rua : " + cadastro.logradouro.value + ',' + "numero : " + cadastro.numero.value + ',' + "bairro : " + cadastro.bairro.value + ',' + "cidade : " + cadastro.localidade.value + ',' + "estado: " + cadastro.uf.value + ',' + "senha : " + cadastro.password.value);
    salvarDados.push(formDados);
    fetch("../json/usuarios.json")
        .then(response => response.json())
        .then(json => console.log(json));

    const fs = require('fs');
    const data = JSON.stringify(salvarDados);

    fs.writeFile('../json/usuarios.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
    // let blob = new Blob([JSON.stringify(salvarDados)], { type: 'application/json' });
    // let fs = require('fs');
    // fs.writeFile("../json/usuarios.json", JSON.stringify(salvarDados), function (err) {
    //     if (err) throw err;
    //     console.log('complete');
    // }
    // );
    /* const blob = new Blob([JSON.stringify(salvarDados)], { type: 'application/json' });
    saveAs(blob, '../json/usuarios.json'); */
    /* localStorage.setItem("dados", formDados);
    let passDados = JSON.stringify(formDados);
    console.log(passDados); */
    alert("Enviado com sucesso");
    /*  } /* else {
          // let getDados = JSON.parse(localStorage.getItem("dados"));
          let passDados = localStorage.getItem("dados");
          salvarDados.concat(passDados, salvarDados.push(passDados + ',' + '{' + "nome : " + cadastro.nome.value + ',' + "email : " + cadastro.email.value + ',' + "telefone : " + cadastro.tel.value + ',' + "data : " + cadastro.date.value + ',' + "cep : " + cadastro.cep.value + ',' + "rua : " + cadastro.logradouro.value + ',' + "numero : " + cadastro.numero.value + ',' + "bairro : " + cadastro.bairro.value + ',' + "cidade : " + cadastro.localidade.value + ',' + "estado: " + cadastro.uf.value + ',' + "senha : " + cadastro.password.value + '}'));
          console.log(salvarDados);
          localStorage.setItem("dados", salvarDados);
          console.log(localStorage);
          alert("Enviado com sucesso");
          alert("Enviado com sucesso");
      } */

}
/* Função para buscar o CEP e colocar de volta nos campos bloqueados do formulario
função aprendida na sala de aula*/
const apresentaDados = (resultado) => {
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            document.querySelector('#' + campo).value = resultado[campo];
        }
    }
}

function consultaCep() {
    let cepDigitado = document.getElementById("cep");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        let cepProcurado = cepDigitado.value.replace("-", "");
        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
            .then(response => {
                response.json()
                    .then(data => console.log(apresentaDados(data)))
            })
            .catch(x => console.log("CEP não encontrado"));
    }
};
