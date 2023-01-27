import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/projects"} element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
