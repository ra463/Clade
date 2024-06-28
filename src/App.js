import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loading">
            <h5>Loading...</h5>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
