import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//pages
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Feed from "./pages/Feed.tsx";
import CreateNewBusiness from "./pages/CreateNewBusiness.tsx";
import UpdatingBusiness from "./pages/UpdatingBusiness.tsx";
import UserProvider from "./providers/user-context.tsx";
import Navbar from "./components/Navbar.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} /> {/*✅*/}
          <Route path="/signup" element={<Signup />} /> {/*✅*/}
          <Route path="/" element={<Feed />} /> {/*✅*/}
          <Route path="/business/create" element={<CreateNewBusiness />} />{" "}
          {/*✅*/}
          <Route path="/business/update/:id" element={<UpdatingBusiness />} />
          {/* the last router */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </UserProvider>
);
