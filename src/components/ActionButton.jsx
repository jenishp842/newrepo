import React from 'react';

const ActionCell = ({ view, edit, remove, id }) => (
  <div className="d-flex">
    {view && <i className="fa fa-eye mx-2" role="button" onClick={() => view(id)} />}
    {edit && <i className="fas fa-edit mx-2" role="button" onClick={() => edit(id)} />}
    {remove && <i className="fa fa-trash mx-2" role="button" onClick={() => remove(id)} />}
  </div>
);

export default ActionCell;
