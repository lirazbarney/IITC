import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
