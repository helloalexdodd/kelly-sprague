import { useState } from 'react';
import Context from './context';

const Provider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
  );
};
export default Provider;
