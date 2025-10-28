import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";
import Repnote from "./pages/Repnote";
import ScrollToTop from "./components/ScrollToTop";

const Pinselspur = lazy(() => import("./pages/Pinselspur"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/pinselspur"
          element={
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <Pinselspur />
            </Suspense>
          }
        />
        <Route
          path="/repnote"
          element={
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <Repnote />
            </Suspense>
          }
        />
        <Route
          path="/privacy"
          element={<Privacy />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
