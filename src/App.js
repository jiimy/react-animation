import { Route, Link, Routes } from "react-router-dom";
// import "./assets/index.scss";
import HookForm from "./page/HookForm/HookForm";
import Pattern from "./page/Pattern/Pattern";
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
      <p>
        <Link to="/pattern">설계 패턴</Link>
      </p>

      <Routes>
        <Route path="/ui" element={<Ui />} />
        <Route path="/react-hook-form" element={<HookForm />} />
        <Route path="/pattern" element={<Pattern />} />
      </Routes>
    </div>
  );
}

export default App;
