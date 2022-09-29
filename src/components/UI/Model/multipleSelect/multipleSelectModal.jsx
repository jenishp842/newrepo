import React, { useState } from 'react';
import '../modal.css';
import './multiselct.css';
import { Modal } from 'reactstrap';
import { investors } from 'constants/tableColumn';

const MultipleSelctModal = ({ isOpen, close, title }) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState(investors);

  const handleChange = (e, user) => {
    const { checked } = e.target;
    if (checked) {
      if (user === 'all') setUsers(data.map(item => item.name));
      else setUsers([...users, user.name]);
    } else if (user === 'all') setUsers([]);
    else setUsers(users.filter(item => item !== user.name));
  };
  let timeout;
  const handleInput = e => {
    if (timeout) clearTimeout(timeout);
    const val = e.target.value.toLowerCase().trim();
    if (!val) {
      setData(investors);
      return;
    }
    timeout = setTimeout(() => {
      const searchData = investors.filter(item => item.name.toLowerCase().includes(val));
      setData(searchData);
    }, 800);
  };
  return (
    <>
      <div>
        <div>
          <Modal isOpen={isOpen} centered scrollable>
            <div className="modal-header justify-content-center flex-column">
              <div className="p-2">
                <div className="d-flex justify-content-center">
                  <h5 className="modal-title mt-0" id="myModalLabel" style={{ marginLeft: '10px' }}>
                    {title}
                  </h5>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    close(false);
                  }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className='w-100 position-relative'>
                <input
                  type="text"
                  className="search-box1 w-100"
                  onChange={handleInput}
                  placeholder="Search investors"
                />
                <i className="mdi mdi-magnify search-icon fa-2x glass"  />
              </div>
            </div>
            <div className="modal-body">
              <div className="selectall">
                <div>All</div>
                <input type="checkbox" onChange={e => handleChange(e, 'all')} />
              </div>
              {data.map(item => (
                <div key={item.name} className="abc">
                  <div>{item.name}</div>
                  <input
                    type="checkbox"
                    onChange={e => handleChange(e, item)}
                    checked={users.includes(item.name)}
                  />
                </div>
              ))}
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary waves-effect dropdownColor w-25"
                data-dismiss="modal"
              >
                Done
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MultipleSelctModal;
