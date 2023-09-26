import Modal from 'react-bootstrap/Modal';

export const ModalLy = ({show, handleClose, children, form}) => {

  return (
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            { form == 'login' ? 'Acceso': 'Crea una nueva cuenta'}
          </Modal.Title>
        </Modal.Header>         
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
  );
}
