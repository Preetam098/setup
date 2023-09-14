import React from "react";
import AllRoutes from ".";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        {AllRoutes.map((item) => {
          return (
            <Route
              name={item.name}
              exact={true}
              path={item.path}
              element={<item.element />}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
