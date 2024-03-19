import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/dashboard";

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
