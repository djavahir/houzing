import { createContext, useReducer } from "react";
const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, []);
  return (
    <PropertiesContext.Provider
      value={[state, dispatch]}
    ></PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
