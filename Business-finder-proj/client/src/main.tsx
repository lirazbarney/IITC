import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Feed from "./pages/Feed.tsx";
import BusinessDetails from "./pages/BusinessDetails.tsx";
import CreateNewBusiness from "./pages/CreateNewBusiness.tsx";
import UpdatingBusiness from "./pages/UpdatingBusiness.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} /> {/*✅*/}
      <Route path="/signup" element={<Signup />} /> {/*✅*/}
      <Route path="/business" element={<Feed />} /> {/*✅*/}
      <Route path="/business/create" element={<CreateNewBusiness />} /> {/*✅*/}
      <Route path="/business/:id" element={<BusinessDetails />} />
      <Route path="/business/update/:id" element={<UpdatingBusiness />} />
      {/* the last router */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
