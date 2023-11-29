import React, { useState, useEffect } from "react";
import {
  Form,
  Col,
  Row,
  Button,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ModalPesquisa from "../utils/ModalPesquisa.jsx";

const Fornecedor = (props) => {

    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [marca, setMarca] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [preco, setPreco] = useState("");
    const [cor, setCor] = useState("");
    const [showPesquisa, setShowPesquisa] = useState(false);
    const [nomePesquisa, setNomePesquisa] = useState("");

    const handleNovo = () => {
        setNome("");
        setQuantidade("");
        setMarca("");
        setTamanho("");
        setPreco("");
        setCor("");
    };

    const handleSalvar = async () => {
        let fornecedor = {
            nome: nome,
            quantidade: quantidade,
            marca: marca,
            tamanho: tamanho,
            preco: preco,
            cor: cor,
        };
    
        setNome("");
        setQuantidade("");
        setMarca("");
        setTamanho("");
        setPreco("");
        setCor("");
    
        const res = await axios.post("http://localhost:5000/fornecedores", fornecedor, {
            headers: {
              "Content-Type": "application/json",
            },
        });
    };

    const handlePesquisar = async (nomePesquisa) => {
        await axios
          .get(`http://localhost:5000/fornecedores/?nome=${nomePesquisa}`)
          .then((resposta) => {
            setNome(resposta.data.nome);
            setQuantidade(resposta.data.quantidade);
            setMarca(resposta.data.marca);
            setTamanho(resposta.data.tamanho);
            setPreco(resposta.data.preco);
            setCor(resposta.data.cor);
            setShowPesquisa(false);
        });
    };

    return (
        <div>
            <div className="CadastroFornecedor">
                <div className="ContainerCadastro" style={({ marginTop: "10px" }, { marginLeft: "70px" })}>
                    <h2>Cadastro de fornecedores</h2>
                </div>
                <div className="Formulario" style={({ marginTop: "10px" },{ marginLeft: "80px" },{ marginRight: "20px" })}>
                    <Form style={({ margin: "5px" }, { marginLeft: "80px" })}>
                        <Row>
                            <Col sm={4}>
                                <div className="txtNome">
                                    <Form.Label className="text-left" style={{ width: "100%" }}>
                                        Tipo do produto
                                    </Form.Label>
                                    <Form.Control
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="txtQuantidade">
                                    <Form.Label className="text-left" style={{ width: "100%" }}>
                                        Quantidade
                                    </Form.Label>
                                    <Form.Control
                                        value={quantidade}
                                        onChange={(e) => setQuantidade(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="txtMarca">
                                    <Form.Label className="text-left" style={{ width: "100%" }}>
                                        Marca
                                    </Form.Label>
                                    <Form.Control
                                        value={marca}
                                        onChange={(e) => setMarca(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <div className="txtTamanho">
                                    <Form.Label className="text-left" style={{ width: "100%" }}>
                                        Tamanho
                                    </Form.Label>
                                    <Form.Control
                                        value={tamanho}
                                        onChange={(e) => setTamanho(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="txtPreço">
                                    <Form.Label className="text-left" style={{ width: "100%" }}>
                                        Preço
                                    </Form.Label>
                                    <Form.Control
                                        value={preco}
                                        onChange={(e) => setPreco(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="txtCor">
                                    <Form.Label className="text-left" style={{ width: "100%" }}>
                                        Cor
                                    </Form.Label>
                                    <Form.Control
                                        value={cor}
                                        onChange={(e) => setCor(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={(e) => handleNovo()}
                                    >
                                    Novo
                                    </Button>{" "}
                                </Col>
                                <Col>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={(e) => handleSalvar()}
                                    >
                                    Salvar
                                    </Button>{" "}
                                </Col>
                                <Col>
                                    <Button variant="primary" size="lg"
                                        onClick={(e) => setShowPesquisa(true)}
                                    >
                                    Pesquisar
                                    </Button>{" "}
                                    <ModalPesquisa
                                        titulo={"Pesquisa de Fornecedores"}
                                        show={showPesquisa}
                                        changeNome={setNomePesquisa}
                                        nome={nomePesquisa}
                                        close={(e) => setShowPesquisa(false)}
                                        pesquisar={handlePesquisar}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Fornecedor;