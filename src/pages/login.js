// src/pages/login.js
import Login from "../components/Login";

const LoginPage = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Login Page</h2>
                <Login />
            </div>
        </Layout>
    );
};

export default LoginPage;
