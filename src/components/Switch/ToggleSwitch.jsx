import AskModal from 'components/UI/Model/AskModal';
import React, { useState } from 'react';
import Switch from 'react-switch';
import './switch.css';

const Offsymbol = () => <div className="uncheckedicon" />;

const OnSymbol = () => <div className="checkedicon" />;

const ToggleSwitch = ({ status, id }) => {
  const [data, setData] = useState(status);
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    if (data) {
      setOpen(true);
    } else {
      setData(!data);
    }
  };
  const onConfirm = () => {
    setOpen(false);
    setData(false);
  };
  return (
    <>
      <AskModal
        isOpen={open}
        close={setOpen}
        title="Admin Status"
        text=" If you deactivate admin, he will loose all admin access, till set to active
          again."
        subtext="Are you sure you want to disable the admin?"
        onConfirm={onConfirm}
      />
      <Switch
        id={id}
        uncheckedIcon={<Offsymbol />}
        checkedIcon={<OnSymbol />}
        onColor="#00FF00"
        onChange={handleChange}
        checked={data}
      />
    </>
  );
};

export default ToggleSwitch;
