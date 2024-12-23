import { Routes, Route } from "react-router";
import GetAllPost from "./pages/GetAllPosts";
import GetPostDetails from "./pages/GetPostDetails";
import AddNewPost from "./pages/AddNewPost";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<GetAllPost />} />
        <Route path="/add" element={<AddNewPost />} />
        <Route path="/posts/:id" element={<GetPostDetails />} />
      </Routes>
    </>
  );
}
