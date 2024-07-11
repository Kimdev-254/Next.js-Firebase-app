import Layout from "../components/_layout";
import Form from "../components/Form";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-semibold">Welcome to Your App</h1>
        <Form />
        <p className="text-gray-600 mb-4">© 2024 Your Company. All rights reserved.</p>
        <p>
          <Link href="/dashboard" passHref>
            <span className="text-blue-500 hover:underline cursor-pointer">Go to Dashboard</span>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Home;
