// src/pages/dashboard.js
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
    return (
        <ProtectedRoute>
            <Layout>
                <Dashboard />
            </Layout>
        </ProtectedRoute>
    );
};

export default DashboardPage;
