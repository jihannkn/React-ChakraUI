import { Outlet } from "react-router-dom";
import Navbar from "../fragments/dashboard/nav";

const DashboardLayout: React.FC = () => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
