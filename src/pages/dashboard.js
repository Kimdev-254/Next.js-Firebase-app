import ProtectedRoute from "../components/ProtectedRoute";
import DashboardContent from "../components/Dashboard";
import Layout from "components/_layout";

const DashboardPage = () => {
    return (
        <ProtectedRoute>

            <DashboardContent />

        </ProtectedRoute>
    );
};

export default DashboardPage;
