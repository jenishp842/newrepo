import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Row, Col, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';


import './datatables.scss'
import { tableData } from 'constants/staticDataForTables';

const DatatableTables = ({ column, action, row, handelSort }) => {
  const [data, setData] = useState({
    columns: column,
    rows: tableData
  });
  useEffect(() => {
    if (!row) {
      data?.rows?.forEach((item, idx) => {
        data.rows[idx] = {
          ...item,
          title: `title${idx + 1}`,
          // toggle: <ToggleSwitch />,
          action: (action && action(idx)) || (
            <div className="d-flex">
              modal
            </div>
          ),
          location: `Location${idx + 1}`,
          updated: '3/21/2022 3:03:27 EST',
          number: idx + 1,
          status: 'Not Signed',
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
        skelData[item.field] = <div className='skel'/>;
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
          <Row className='m-auto p-2'>
            <Col className="col-12">
              <MDBDataTable
                responsive
                striped
                bordered
                data={data}
                displayEntries={false}
                onSort={handelSort}
                noRecordsFoundLabel="No record found"
              />
            </Col>
          </Row>
    </>
  );
};

export default DatatableTables;