import { createContext, useState } from "react";

export const ModelContext = createContext();
const ModelState = ({ children }) => {
  const [open, setOpen] = useState(false);

  const modalShow = () => {
    setOpen(true);
  };
  const modalHide = () => {
    setOpen(false);
  };
  return (
    <ModelContext.Provider value={{ open, modalShow, modalHide }}>
      {children}
    </ModelContext.Provider>
  );
};
export default ModelState;
