import React from 'react';
import { Container } from 'reactstrap';
import Table from 'components/Table/Table';
import '../viewcommon.css';
import ButtonDropDown from 'components/Dropdown/DropdownButton';
import RenderIf from 'components/RenderIf';
import { adminColumn } from 'constants/tableColumn';
import Breadcrumb from 'components/BreadCrumb';
import LogoLoader from 'components/UI/Spinner/LogoSpinner';

const AdminManagement = () => (
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
                >
                  Create Admin
                </button>
              </div>
            </div>
          </div>
          <Table column={adminColumn} />
        </div>
      </Container>
    </RenderIf>
  </div>
);

export default AdminManagement;
