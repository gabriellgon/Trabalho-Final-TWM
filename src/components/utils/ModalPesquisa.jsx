import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form  from 'react-bootstrap/Form';

function ModalPesquisa(props) {
    if(!props.show) {
        return null;
    }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.titulo}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Control
                value={props.nome}
                onChange={(e) => props.changeNome(e.target.value)}
            />          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" 
          onClick = {props.close}>Fechar</Button>
          <Button variant="primary" onClick={(e) => props.pesquisar(props.nome)}>Pesquisar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalPesquisa;