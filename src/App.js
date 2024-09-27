import React, { createContext, useReducer } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Etc from "./page/Etc/Etc";

import HookForm from "./page/HookForm/HookForm";
import Pattern from "./page/Pattern/Pattern";
import Ui from "./page/Ui/Ui";
import { CountProvider } from "./context/Count";
import ModalPage from "page/Modal/ModalPage";

function App() {
  return (
    <CountProvider>
      <div className="App">
        <p>
          <Link to="/">홈</Link>
        </p>
        <p>
          <Link to="/ui">ui</Link>
        </p>
        <p>
          <Link to="/react-hook-form">react-hook-form</Link>
        </p>
        <p>
          <Link to="/pattern">설계 패턴</Link>
        </p>
        <p>
          <Link to="/etc">etc</Link>
        </p>
        <p>
          <Link to="/modal">modal</Link>
        </p>

        <Routes>
          <Route path="/ui" element={<Ui />} />
          <Route path="/react-hook-form" element={<HookForm />} />
          <Route path="/pattern" element={<Pattern />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/modal" element={<ModalPage />} />
        </Routes>
      </div>
    </CountProvider>
  );
}

export default App;
