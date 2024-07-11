// utils/protectedRoute.js
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const protectedRoute = (Component) => {
    return (props) => {
        const { user } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                router.replace("/");
            }
        }, [user, router]);

        return user ? <Component {...props} /> : null;
    };
};

export default protectedRoute;
