import { useRouter } from "next/router"
import { useAuth } from "../context/AuthContext"

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter()
    const { user, loading } = useAuth()

    if (typeof window !== "undefined") {
      if (loading) return null
      if (!user) {
        router.replace("/sign-in")
        return null
      }
      return <WrappedComponent {...props} />
    }

    return null
  }
}

export default withAuth
