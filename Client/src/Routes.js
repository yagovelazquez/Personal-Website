import { Routes as RoutesReact, Route, useLocation } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import { AnimatePresence } from "framer-motion";

function Routes() {

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
    <RoutesReact key={location.pathname} location={location}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </RoutesReact>
    </AnimatePresence>
  );
}

export default Routes;
