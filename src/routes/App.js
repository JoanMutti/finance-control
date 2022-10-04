import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import "../styles/vars.css";
import "../styles/App.css";
import { useAuth } from "../hooks/useAuth";
import Investing from "../pages/Investing";
import Savings from "../pages/Savings";

function App() {
  const auth = useAuth();

  if (!auth?.user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }

  if (auth?.user) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ahorros" element={<Savings />} />
          <Route path="/inversiones" element={<Investing />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
