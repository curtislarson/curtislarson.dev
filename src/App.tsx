import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { JSX, lazy, Suspense } from "preact/compat";
import Layout from "./Layout";

type ImportComponent = { default: (...args: any[]) => JSX.Element };

function lazyRoute(path: string, component: Promise<ImportComponent>, props: Record<string, unknown> = {}) {
  const Component = lazy(() => component);
  return (
    <Route
      path={path}
      element={
        <Suspense fallback={<div></div>}>
          <Component {...props} />
        </Suspense>
      }
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {lazyRoute("/", import("./pages/Home"))}
          {lazyRoute("/projects", import("./pages/Projects"))}
          {lazyRoute("/projects/:projectId", import("./pages/Project"))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
