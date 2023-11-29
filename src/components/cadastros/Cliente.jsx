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

const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos ca>
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais >
};

const cepMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
};

const Clientes = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCPF] = useState("");
  const [cep, setCEP] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUF] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numeroCasa, setNumeroCasa] = useState(0);
  const [showPesquisa, setShowPesquisa] = useState(false);
  const [nomePesquisa, setNomePesquisa] = useState("");  

  useEffect(() => {
    BuscaCEP(cep);
  }, [cep]);

  const BuscaCEP = async (cep) => {
    if (String(cep).length == 9) {
      let cepSemPonto = cep.replace("-", "");
      axios
        .get(`https://viacep.com.br/ws/${cepSemPonto}/json`)
        .then((response) => {
          setEndereco(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
          setUF(response.data.uf);
        });
    }
  };

  const handleNovo = () => {
    setNome("");
    setEmail("");
    setCPF("");
    setCEP("");
    setEndereco("");
    setNumeroCasa("");
    setBairro("");
    setCidade("");
    setUF("");
    setComplemento("");
  };

  const handleSalvar = async () => {
    let cliente = {
      nome: nome,
      email: email,
      cpf: cpf,
      cep: cep,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      complemento: complemento,
      numeroCasa: numeroCasa,
    };

    setNome("");
    setEmail("");
    setCPF("");
    setCEP("");
    setEndereco("");
    setNumeroCasa("");
    setBairro("");
    setCidade("");
    setUF("");
    setComplemento("");

    const res = await axios.post("http://localhost:5000/clientes", cliente, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handlePesquisar = async (nomePesquisa) => {
    await axios
      .get(`http://localhost:5000/clientes/?nome=${nomePesquisa}`)
      .then((response) => {
        setNome(response.data.nome);
        setEmail(response.data.email);
        setCPF(response.data.cpf);
        setCEP(response.data.cep);
        setNumeroCasa(response.data.numeroCasa);
        setComplemento(response.data.complemento);
        setShowPesquisa(false);
      });
  };

  return (
    <div>
      <div className="CadastroClientes">
        <div
          className="ContainerCadastro"
          style={({ marginTop: "10px" }, { marginLeft: "70px" })}
        >
          <h2>Cadastro de Clientes</h2>
        </div>
        <div
          className="Formulario"
          style={
            ({ marginTop: "10px" },
            { marginLeft: "80px" },
            { marginRight: "20px" })
          }
        >
          <Form style={({ margin: "5px" }, { marginLeft: "80px" })}>
            <Row>
              <Col sm={4}>
                <div className="txtNome">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Nome
                  </Form.Label>
                  <Form.Control
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="txtEmail">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    E-mail
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="txtCPF">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    CPF
                  </Form.Label>
                  <Form.Control
                    value={cpf}
                    onChange={(e) => setCPF(cpfMask(e.target.value))}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <div className="txtCEP">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    CEP
                  </Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="9"
                    value={cep}
                    onChange={(e) => setCEP(cepMask(e.target.value))}
                  />
                </div>
              </Col>
              <Col sm={4}>
                <div className="txtEndereco">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Endereco
                  </Form.Label>
                  <Form.Control
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtNumero">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Número
                  </Form.Label>
                  <Form.Control
                    value={numeroCasa}
                    onChange={(e) => setNumeroCasa(e.target.value)}
                  />
                </div>
              </Col>

              <Col sm={4}>
                <div className="txtBairro">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Bairro
                  </Form.Label>
                  <Form.Control
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <div className="txtCidade">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Cidade
                  </Form.Label>
                  <Form.Control
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtUF">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    UF
                  </Form.Label>
                  <Form.Control
                    value={uf}
                    onChange={(e) => setUF(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="txtComplemento">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Complemento
                  </Form.Label>
                  <Form.Control
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
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
                    titulo={"Pesquisa de Clientes"}
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
export default Clientes;
