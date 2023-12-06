import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Layout } from "./Layout/Layout";

/**
 * RouteNotFound component displays a "Page not found" message when no matching route is found.
 * @component
 * @returns {JSX.Element} The RouteNotFound component.
 */
function RouteNotFound() {
  return <div>Page not found</div>;
}

/**
 * RouterPathway component configures the routing for the application using React Router.
 * @component
 * @returns {JSX.Element} The RouterPathway component.
 */
export function RouterPathway() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
