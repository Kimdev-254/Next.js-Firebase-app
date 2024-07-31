// src/components/ProtectedRoute.js
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebaseConfig"

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login")
      } else if (user.email !== "bonifacekimani715@gmail.com") {
        router.push("/unauthorized")
      }
    }
  }, [user, loading, router])

  if (loading || !user) {
    return <div>Loading...</div> // or a spinner
  }

  return children
}

// Add this line to set the display name
ProtectedRoute.displayName = "ProtectedRoute"

export default ProtectedRoute
