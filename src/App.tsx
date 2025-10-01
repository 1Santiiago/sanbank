import { BrowserRouter, Routes, Route } from "react-router";

import AuthLayout from "./components/AuthLayout";

import HomeScreen from "./components/HomeScreen";
import LayoutApp from "./components/Layout";
import { PrivateRoute } from "./components/privateRout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthLayout />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LayoutApp>
                <HomeScreen />
              </LayoutApp>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
