// import Table from 'components/UI/tables/Table';
import React, { useState,useEffect} from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from 'reactstrap';
import Switch from 'react-switch';
import moment from 'moment';

import ButtonDropDown from 'components/DropDown/DropDown';
import { users } from 'constants/UserData/earlyInvestorsData';
import { EarlyInvestorsColumn } from 'constants/columnUtility';
import DatatableTables from 'components/table/Table';

import './EarlyInvestors.css';
import DeleteUserModel from 'components/UI/Model/DeleteUserModel';



const EarlyInvestors = () => {
  const [getEarlyAccess, setGetEarlyAccess] = useState(true);
  const handelSort = () => {
  };
  const handleChange = () => { 
  }
  const [usersData, setUserData] = useState(users);
  const [modal, setModal] = useState(false);

  const DropDownButtonData = [
    { 'Last 7 days': moment().subtract(7, 'd').format('MM/DD/YYYY') },
    {
      'Last 15days': moment().subtract(15, 'd').format('MM/DD/YYYY'),
    },
    {
      'Last 1month': moment()
        .subtract(1, 'month')
        .format('MM/DD/YYYY'),
    },
    {
      'Last 3month': moment()
        .subtract(3, 'month')
        .format('MM/DD/YYYY'),
    },
  ];
  useEffect( () => {
    const sdetail = users.map(item => ({
      email: item.email,
      registration_date: new Date(item.createdAt).toLocaleString(),
      status:item.status,
      action: (
        <div className="d-flex justify-content-center" key={item._id}>
            <i className="fa fa-trash" role="button" onClick={() => setModal(true)}/>
        </div>
      ),
    }));
    setUserData(sdetail)
  },[users])
  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col xl={12}>
            <Card>
              <CardBody>
                <Row>
                  <div className="Button-items d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <ButtonDropDown 
                      title= 'Registration'
                      options={DropDownButtonData}
                      name="startDate"/>
                      <div className="d-flex ms-2">
                        <span>Get Early Access</span>
                        <Switch
                          className="ms-1"
                          onChange={() => {
                            setGetEarlyAccess(!getEarlyAccess);
                          }}
                          checked={getEarlyAccess}
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <Button color="primary">Send Temporary Password</Button>
                      <Button className="ms-2" color="primary">
                        Add User
                      </Button>
                      <div className="search-box ms-2">
                        <div className="position-relative">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search Users"
                            // value={query}
                            onChange={handleChange}
                          />
                          <i className="mdi mdi-magnify search-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
                {modal && <DeleteUserModel   isOpen={modal} onClose={setModal} />}
                <DatatableTables column={EarlyInvestorsColumn}
                    row={usersData}
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

export default EarlyInvestors;
