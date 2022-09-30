import React, { useState } from 'react';
import '../modal.css';
import './multiselct.css';
import { Modal } from 'reactstrap';

const MultipleSelctModal = ({ isOpen, close, title, investors, select, show, buttonText }) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState(investors);

  const handleChange = (e, user) => {
    const { checked } = e.target;
    if (checked) {
      if (user === 'all') setUsers(data.map(item => item[select]));
      else setUsers([...users, user[select]]);
    } else if (user === 'all') setUsers([]);
    else setUsers(users.filter(item => item !== user[select]));
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
      const searchData = investors.filter(item => item[show].toLowerCase().includes(val));
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
              <div className="w-100 position-relative">
                <input
                  type="text"
                  className="search-box1 w-100"
                  onChange={handleInput}
                  placeholder="Search investors"
                />
                <i className="mdi mdi-magnify search-icon fa-2x glass" />
              </div>
            </div>
            <div className="modal-body">
              <div className="selectall">
                <div>All</div>
                <input type="checkbox" onChange={e => handleChange(e, 'all')} />
              </div>
              {data.map(item => (
                <div key={item.name} className="abc">
                  <div>{item[show || select]}</div>
                  <input
                    type="checkbox"
                    onChange={e => handleChange(e, item)}
                    checked={users.includes(item[select])}
                  />
                </div>
              ))}
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary waves-effect dropdownColor w-50"
                data-dismiss="modal"
              >
                {buttonText || 'Done'}
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MultipleSelctModal;
