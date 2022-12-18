import { createContext, useReducer } from "react";
import { reduser } from "./reducer";
const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, []);
  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
