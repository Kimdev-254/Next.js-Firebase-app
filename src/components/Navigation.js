import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div className="text-white font-semibold">Your App Name</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <a className="text-white hover:text-gray-300">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                            <a className="text-white hover:text-gray-300">Register</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a className="text-white hover:text-gray-300">Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard">
                            <a className="text-white hover:text-gray-300">Dashboard</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
