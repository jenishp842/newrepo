
import React, { useState } from 'react';import DatatableTables from 'components/table/Table';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';


import Breadcrumb from 'components/UI/Common/Breadcrumb';
import CreatePropertyManagerModel from 'components/UI/Model/CreatePropertyManagerModel';
import { propertyManagersColumn } from 'constants/columnUtility';
import { PropertyManagersData } from 'constants/UserData/propertyManagersData';

function ProppertyManagers() {
  const [modal, setModal] = useState(false);
const handelSort = () => {
  console.log("Will be sort soon")
};

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb
          title="UI Elements"
          breadcrumbItem="Tabs & Accordions"
          name="User Management > Property Managers"
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
                            onChange={() => console.log('Will be filter results')}
                          />
                          <i className="mdi mdi-magnify search-icon" />
                        </div>
                      </div>
                      <Button className="ms-2" color="primary" onClick={() => setModal(true)}>
                        Add New
                      </Button>
                    </div>
                  </Col>
                </Row>
                {modal && <CreatePropertyManagerModel   isOpen={modal} onClose={setModal} />}
                <DatatableTables column={propertyManagersColumn}
                    row={PropertyManagersData}
                    hidePaging
                    handelSort={handelSort}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ProppertyManagers;
