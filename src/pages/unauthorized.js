// src/pages/unauthorized.js
const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96 text-center">
        <h1 className="text-2xl mb-4">Unauthorized</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    </div>
  )
}

export default Unauthorized
