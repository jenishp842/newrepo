import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import DatatableTables from 'components/table/Table';
import { currentManagedPropertyColumn } from 'constants/columnUtility';
import { currentPropertiesData } from 'constants/currentManagedPropertyData';

import './ViewUser.css';

const UserProfile = () => (
  <div className="page-content">
    <Container fluid>
      <Row>
        <Card>
          <Link to="/property-managers">
            <div
              className="d-flex justify-content-left"
              style={{
                alignItems: 'baseline',
                paddingLeft: '1.25rem',
                paddingTop: '1.25rem',
                color: '#495057',
              }}
            >
              <i className="fas fa-arrow-left mt-2" />
              <h5 className="mt-0" id="myModalLabel" style={{ marginLeft: '8px' }}>
                Property Managers
              </h5>
            </div>
          </Link>
          <CardBody className="d-flex flex-wrap">
            <Row>
              <Col className="d-flex justify-content-between">
                <Col lg="4" className="view-user-list">
                  <div>
                    <label className="col-6">Company Name</label>
                    <span className="col-6">XYZ.ltd</span>
                  </div>
                  <div>
                    <label className="col-6">Mobile No</label>
                    <span className="col-6">7817809999</span>
                  </div>
                  <div>
                    <label className="col-6">Email id</label>
                    <span className="col-6">ABC@mail.com</span>
                  </div>
                  <div>
                    <label className="col-6">Address</label>
                    <span className="col-6">32,vivekand-2,gujrat</span>
                  </div>
                  <div>
                    <label className="col-6">Address</label>
                    <span className="col-6">363001</span>
                  </div>
                </Col>
                <Col lg="4" className="view-user-list">
                  <div>
                    <label className="col-6">Company EIN no</label>
                    <span className="col-6">1245657</span>
                  </div>
                  <div>
                    <label className="col-6">Retal</label>
                    <span className="col-6">$4500</span>
                  </div>
                  <div>
                    <label className="col-6">Security Deposit</label>
                    <span className="col-6">$5000</span>
                  </div>
                </Col>
              </Col>
              <h3>Currently Managed Property</h3>
              <DatatableTables column={currentManagedPropertyColumn} row={currentPropertiesData} />
            </Row>
          </CardBody>
        </Card>
      </Row>
    </Container>
  </div>
);
export default UserProfile;
