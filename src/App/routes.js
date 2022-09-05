import React from "react";
import { Route, Routes, MemoryRouter } from "react-router-dom";

// import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../View/Home/Home"


function AppRoutes() {

    const AnimatedSwitch = MemoryRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/login" component={Home} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));
  return (
    <div className="s_c">
      <AnimatedSwitch />
    </div>
  );
}

export default AppRoutes;
