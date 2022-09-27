import SweetAlert from 'react-bootstrap-sweetalert';

const DeleteModal = ({ close, text, title }) => (
  <SweetAlert
    title={title}
    warning
    showCancel
    confirmButtonText="Delete Admin"
    confirmBtnBsStyle="success"
    cancelBtnBsStyle="danger"
    onConfirm={close}
    onCancel={close}
  >
    {text}
  </SweetAlert>
);

export default DeleteModal;
