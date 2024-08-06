// src/pages/unauthorized.js
import Link from "next/link"

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96 text-center">
        <h1 className="text-2xl mb-4">Unauthorized</h1>
        <p className="mb-6">You do not have permission to view this page.</p>
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Unauthorized
