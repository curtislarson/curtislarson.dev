import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/projects"} element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
