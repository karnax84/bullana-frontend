import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "pages/login";
import MainPage from "pages";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/*"} element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
