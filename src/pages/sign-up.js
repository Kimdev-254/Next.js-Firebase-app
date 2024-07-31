"use client"
import { useState } from "react"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../config/firebaseConfig"
import { useRouter } from "next/navigation"
import Link from "next/link"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setErrorMessage("") // Clear previous error message

    try {
      await createUserWithEmailAndPassword(email, password)
    } catch (e) {
      // Handle Firebase Auth errors
      if (e.code === "auth/invalid-email") {
        setErrorMessage("The email address is not valid.")
      } else if (e.code === "auth/email-already-in-use") {
        setErrorMessage("The email address is already in use.")
      } else if (e.code === "auth/weak-password") {
        setErrorMessage("The password is too weak.")
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.")
      }
      console.error("Sign up error: ", e)
    }
  }

  // Redirect to home if user is signed up
  if (user) {
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-4">
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
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
        <p className="text-gray-400 mt-4">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-indigo-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
