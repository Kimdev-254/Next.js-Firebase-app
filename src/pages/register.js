// src/pages/register.js
import Register from "../components/Register";

const RegisterPage = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Register Page</h2>
                <Register />
            </div>
        </Layout>
    );
};

export default RegisterPage;
