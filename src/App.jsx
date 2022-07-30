import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Layout from "./components/Layout";
import LinkPage from "./pages/LinkPage";
import Unauthorized from "./pages/Unauthorized";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";
import Lounge from "./pages/Lounge";
import Missing from "./pages/Missing";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

const App = () => {
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (success !== "") {
      toast.success(success);
    }
  }, [success]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login setSuccess={setSuccess} />} />
          <Route
            path="register"
            element={<Register setSuccess={setSuccess} />}
          />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
              <Route path="editor" element={<Editor />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>

            <Route
              element={
                <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
              }
            >
              <Route path="lounge" element={<Lounge />} />
            </Route>
          </Route>
          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
