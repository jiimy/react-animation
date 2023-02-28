import { Route, Link, Routes } from "react-router-dom";
// import "./assets/index.scss";
import HookForm from "./page/HookForm/HookForm";
import Ui from "./page/Ui/Ui";

function App() {
  return (
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

      <Routes>
        <Route path="/ui" element={<Ui />} />
        <Route path="/react-hook-form" element={<HookForm />} />
      </Routes>
    </div>
  );
}

export default App;
