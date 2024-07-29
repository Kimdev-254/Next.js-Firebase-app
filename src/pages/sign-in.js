"use client"
import { useState } from "react"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../config/firebaseConfig"
import { useRouter } from "next/navigation"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const router = useRouter()

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(email, password)
    } catch (e) {
      console.error("Error signing in: ", e)
    }
  }

  // Redirect to home if user is logged in
  if (user) {
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </div>
    </div>
  )
}

export default SignIn
