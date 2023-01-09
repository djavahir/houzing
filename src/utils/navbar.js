import React from "react";
import Signin from "../components/Signin";
import useId from "../hooks/useId";
const HouseItemPage = React.lazy(() => import("../pages/HouseItem"))
const PropertiesPage = React.lazy(() => import("../pages/Properties"))
const HomePage = React.lazy(() => import("../pages/Home"))


export const navbar = [
 { id: useId, element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}><HouseItemPage /></React.Suspense>, title: "Single House", path: "/properties/:id", private: false, hidden: true },
 { id: useId, element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}><HomePage /></React.Suspense>, title: "Home", path: "/home", private: false, hidden: false },
 { id: useId, element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}><PropertiesPage /></React.Suspense>, title: "Properties", path: "/properties", private: false, hidden: false },
 { id: useId, element: <Signin />, title: "Sign In", path: "/signin", private: false, hidden: true },
 { id: useId, element: <h1>Generic Sign Up </h1>, title: "Sign Up", path: "/signup", private: false, hidden: true },
];

export default navbar