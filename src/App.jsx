import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

// store
import { store } from "./redux/store";

// Routes
import { mainRoutes } from './layout/Routes';

import "./assets/sass/main.scss";

// Notfound
import NotFound from "./pages/404";

function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter >
          <Routes>
            {mainRoutes.map((prop, i) => (
              <Route path={prop.path} element={prop.component} key={i} />
              ))}
              <Route path={"*"} element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
