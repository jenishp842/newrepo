import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';

import DatatableTables from 'components/table/Table';
import Breadcrumb from 'components/UI/Common/Breadcrumb';
import CreatePropertyManagerModel from 'components/UI/Model/CreatePropertyManagerModel';
import { propertyManagersColumn } from 'constants/columnUtility';
import { PropertyManagersData } from 'constants/UserData/propertyManagersData';
import DeleteUserModel from 'components/UI/Model/DeleteUserModel';
import BlockUserModel from 'components/UI/Model/BlockUserModel';
import { Link } from 'react-router-dom';

const ProppertyManagers = () => {
  const [addNewModal, setaddNewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [blockModal, setBlockModal] = useState(false);
  const [usersData, setUserData] = useState(PropertyManagersData);
  const handelSort = () => {
  };
  const handleChange = () => { 
  }
  const breadcrumbData=[{name:"Property Managers", link:"/property-managers"}];
  useEffect(() => {
    const sdetail = PropertyManagersData.map(item => ({
      company_name: item.company_name,
      emailId: item.emailId,
      contact_person: item.contact_person,
      status: item.status,
      action: (
        <div className="d-flex justify-content-evenly align-items-center" key={item._id}>
          <Link className="text-dark" to="/view-user"
            onClick={() => localStorage.setItem('userid', item._id)}>
            <i className="fa fa-eye" role="button" />
          </Link>
          <i className="fa fa-circle" role="button" onClick={() => setBlockModal(true)} />
          <i className="fa fa-trash" role="button" onClick={() => setDeleteModal(true)} />
        </div>
      ),
    }));
    setUserData(sdetail);
  }, [propertyManagersColumn]);
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb
          name="User Management"
          items={breadcrumbData}
        />
        <Row>
          <Col xl={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <div className="d-flex justify-content-end">
                      <div className="search-box ml-2">
                        <div className="position-relative">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search Property Managers"
                            // value={query}
                            onChange={handleChange}
                          />
                          <i className="mdi mdi-magnify search-icon" />
                        </div>
                      </div>
                      <Button className="ms-2" color="primary" onClick={() => setaddNewModal(true)}>
                        Add New
                      </Button>
                    </div>
                  </Col>
                </Row>
                {addNewModal && (
                  <CreatePropertyManagerModel isOpen={addNewModal} onClose={setaddNewModal} />
                )}
                {deleteModal && <DeleteUserModel isOpen={deleteModal} onClose={setDeleteModal} />}
                {blockModal && <BlockUserModel isOpen={blockModal} onClose={setBlockModal} />}
                <DatatableTables
                  column={propertyManagersColumn}
                  row={usersData}
                  hidePaging
                  handelSort={handelSort}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ProppertyManagers;
