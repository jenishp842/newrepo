import React, { useState } from 'react';
import { Container } from 'reactstrap';
import '../viewcommon.css';
import RenderIf from 'components/RenderIf';
import { adminColumn } from 'constants/tableColumn';
import Breadcrumb from 'components/BreadCrumb';
import CreateModal from 'components/UI/Model/adminModals/CreateAdmin';
import Table from 'components/Table/Table';
import LogoLoader from 'components/UI/Spinner/LogoSpinner';
import ActionCell from 'components/ActionButton';
import DeleteModal from 'components/UI/Model/DeleteModal';
import ButtonDropDown from 'components/Dropdown/DropdownButton';

const AdminManagement = () => {
  const [event, setEvent] = useState('');

  const handleCreate = () => setEvent('create');
  const handleView = () => setEvent('view');
  const handleEdit = () => setEvent('edit');
  const handleDelete = () => setEvent('remove');
  const action = id => (
    <ActionCell view={handleView} edit={handleEdit} remove={handleDelete} id={id} />
  );
  return (
    <div className="page-content">
      <Breadcrumb name="Admins" />
      <RenderIf>
        <LogoLoader />
      </RenderIf>
      <RenderIf render>
        <Container fluid>
          <div style={{ background: 'white', borderRadius: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
              <div className="btn-group me-1 mt-2">
                <ButtonDropDown title="Status" options={['active', 'not active']} />
              </div>
              <div className="d-flex">
                <div className="btn-group me-1 mt-2">
                  <div className="search-box ml-2">
                    <div className="position-relative">
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search admins"
                      />
                      <i className="mdi mdi-magnify search-icon" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 mx-4">
                  <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light dropdownColor"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={handleCreate}
                  >
                    Create Admin
                  </button>
                </div>
              </div>
            </div>
            <Table column={adminColumn} action={action} />
          </div>
        </Container>
        <CreateModal
          isOpen={event === 'remove' ? '' : event}
          close={() => setEvent(false)}
          disable={event === 'view'}
        />
        <RenderIf render={event === 'remove'}>
          <DeleteModal
            close={() => setEvent(false)}
            text="If you delete the admin all ongoing work will be lost and the admin account cannot be recovered."
            title="Are you sure you want to delete the admin?"
          />
        </RenderIf>
      </RenderIf>
    </div>
  );
};

export default AdminManagement;
