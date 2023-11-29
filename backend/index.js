const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

id_cliente_global = 0;
id_funcionario_global = 0;
id_estoque_global = 0;
id_fornecedor_global = 0;

let clientes = [
    {
        "type": "Clientes",
        "id": 0,
        "nome" : "",
        "email" : "",
        "endereco" : "",
        "cpf" : "",
        "cep" : "",
        "bairro" : "",
        "cidade" : "",
        "uf" : "",
        "complemento" : "",
        "numero" : "",
    }
]

let funcionarios = [
    {
        "type": "Funcionarios",
        "id": 0,
        "nome" : "",
        "email" : "",
        "endereco" : "",
        "cpf" : "",
        "cep" : "",
        "bairro" : "",
        "cidade" : "",
        "uf" : "",
        "complemento" : "",
        "numero" : "",
    }
]

let estoques = [
    {
        "type": "Estoque",
        "id": 0,
        "nome" : "",
        "quantidade" : "",
        "marca" : "",
        "tamanho" : "",
        "preco" : "",
        "cor" : "",
    }
]

let fornecedores = [
    {
        "type": "Fornecedores",
        "id": 0,
        "nome" : "",
        "quantidade" : "",
        "marca" : "",
        "tamanho" : "",
        "preco" : "",
        "cor" : "",
    }
]

app.get("/clientes", (req, res) => {
    cliente =  req.query.nome;
    cliente_retorno = {}
    for (let i = 0; i < clientes.length; i++) {
        if (cliente == clientes[i].nome){
            cliente_retorno = clientes[i]
            break;
        } 
        else{
            cliente_retorno = clientes[0] 
        }      
    }      
    res.json(cliente_retorno);
})

app.post("/clientes", (req, res) => {
    cliente = req.body;
    id_cliente_global++;
    cliente.id = id_cliente_global;
    cliente.type = "Clientes";
    console.log(cliente);
    clientes.push(cliente);  
    res.json(clientes);
})

app.get("/funcionarios", (req, res) => {
    funcionario = req.query.nome;
    funcionario_retorno = {}
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionario == funcionarios[i].nome){
            funcionario_retorno = funcionarios[i]
            break;
        }
        else{
            funcionario_retorno = funcionarios[0]
        }
    }
    res.json(funcionario_retorno);
})

app.post("/funcionarios", (req, res) => {
    funcionario = req.body;
    id_funcionario_global++;
    funcionario.id = id_funcionario_global;
    funcionario.type = "Funcionarios";
    console.log(funcionario);
    funcionarios.push(funcionario);
    res.json(funcionarios);
})

app.get("/estoques", (req, res) => {
    estoque = req.query.nome;
    console.log(estoque)
    estoque_retorno = {}
    for (let i = 0; i < estoques.length; i++) {
        if (estoque == estoques[i].nome){
            estoque_retorno = estoques[i]
            console.log(estoque_retorno)
            break;
        }
        else{
            estoque_retorno = estoques[0]
        }
    }
    res.json(estoque_retorno)
})

app.post("/estoques", (req, res) => {
    estoque = req.body;
    id_estoque_global++;
    estoque.id = id_estoque_global;
    estoque.type = "Estoque";
    console.log(estoque);
    estoques.push(estoque);
    res.json(estoques);
})

app.get("/fornecedores", (req,res) => {
    fornecedor = req.query.nome;
    console.log(fornecedor)
    fornecedor_retorno = {}
    for (let i = 0; i< fornecedores.length; i++) {
        if (fornecedor == fornecedores[i].nome){
            fornecedor_retorno = fornecedores[i]
            break;
        }
        else{
            fornecedor_retorno = fornecedores[0]
            console.log(fornecedor_retorno)
        }
    }
    res.json(fornecedor_retorno)
})

app.post("/fornecedores", (req,res) => {
    fornecedor = req.body;
    id_fornecedor_global++;
    fornecedor.id = id_fornecedor_global;
    fornecedor.type = "Fornecedor";
    console.log(fornecedor);
    fornecedores.push(fornecedor);
    res.json(fornecedores);
})

app.listen(5000, ()=> console.log("SERVER IS RUNNING!!!"));