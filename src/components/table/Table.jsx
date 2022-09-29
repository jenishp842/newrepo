import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Row, Col, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';
import './datatables.scss';
import ToggleSwitch from 'components/Switch/ToggleSwitch';

const DatatableTables = ({ column, action, row, handelSort }) => {
  const [data, setData] = useState({
    columns: column,
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170',
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86',
      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433',
      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: '$162',
      },
      {
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        date: '2012/12/02',
        salary: '$372',
      },
      {
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        salary: '$137',
      },
      {
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        salary: '$327',
      },
    ],
  });
  useEffect(() => {
    if (!row) {
      data?.rows?.forEach((item, idx) => {
        data.rows[idx] = {
          ...item,
          title: `title${idx + 1}`,
          // toggle: <ToggleSwitch />,
          action: (action && action(idx)) || <div className="d-flex">comming soon</div>,
          location: `Location${idx + 1}`,
          updated: '3/21/2022 3:03:27 EST',
          number: idx + 1,
          status: <ToggleSwitch />,
          enddate: (
            <div className="d-flex">
              <i className="far fa-clock" />
              11/20/21
            </div>
          ),
          property: `House${idx + 1}`,
          deposite: '5000$',
          distributed: '45%',
          token: '12345678',
          asset: 'NCB',
          role: 'default',
          txnid: <Link>12xgwhwhxwgd263</Link>,
          email: '12xgwhwhx@gmail.com',
          price: '$1000.00 - 2.15%',
          progress: <Progress value="25"> 25%</Progress>,
          category: 'Commercial',
          platfee: 'Paid',
          propdoc: 'Uploaded',
        };
      });
      setData({ ...data });
      return;
    }
    if (row === 'loading') {
      const skelData = {};
      const rowloading = [];
      column.forEach(item => {
        skelData[item.field] = <div className="skel" />;
      });
      for (let i = 0; i < 4; ) {
        rowloading.push(skelData);
        i += 1;
      }
      setData(prev => ({ ...prev, rows: rowloading }));
      return;
    }
    setData(prev => ({ ...prev, rows: row }));
  }, [JSON.stringify(row)]);

  return (
    <>
      <Row className="m-auto p-2">
        <Col className="col-12">
          <MDBDataTable
            responsive
            striped
            bordered
            data={data}
            // displayEntries={false}
            onSort={handelSort}
            noRecordsFoundLabel="No record found"
          />
        </Col>
      </Row>
    </>
  );
};

export default DatatableTables;
