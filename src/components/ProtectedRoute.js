// src/components/ProtectedRoute.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebaseConfig";

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div>Loading...</div>; // or a spinner
    }

    return children;
};

export default ProtectedRoute;
