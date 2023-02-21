import { createContext, useState } from "react";

export const ModelContext = createContext();
const ModelState = ({ children }) => {
    const [open, setOpen] = useState(false);

  const [modal, setModal] = useState('winner');
    const modalShow = () => {
        setOpen(true);
        
  };
  const modalHide = () => {
    setOpen(false);
  };
  return (
    <ModelContext.Provider
      value={{ open, modalShow, modalHide, modal, setModal }}
    >
      {children}
    </ModelContext.Provider>
  );
};
export default ModelState;
