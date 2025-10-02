import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./components/AuthLayout";
import HomeScreen from "./components/HomeScreen";
import LayoutApp from "./components/Layout";
import { PrivateRoute } from "./components/privateRout";
import { PageCard } from "./components/CardPage";

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
        <Route
          path="/card"
          element={
            <LayoutApp>
              <PageCard />
            </LayoutApp>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
