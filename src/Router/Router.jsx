import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Signin from "../SignIn Page/Signin";
import Dashboard from "../Dashboard/Dashboard";
function Router(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Signin formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard formData={formData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
