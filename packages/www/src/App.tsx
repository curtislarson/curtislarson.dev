import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@curtis.land/common";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/blog"} element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
