import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main className="dashboard">
      <nav className="sidebar">
        <Navbar/>
      </nav>
      <section className="content">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;

