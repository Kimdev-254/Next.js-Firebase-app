// src/components/Dashboard.js
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Dashboard = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            const querySnapshot = await getDocs(collection(db, "submissions"));
            const submissionsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSubmissions(submissionsData);
        };

        fetchSubmissions();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Submissions</h2>
            <ul>
                {submissions.map(submission => (
                    <li key={submission.id} className="mb-4 p-4 border border-gray-300 rounded-md">
                        <p><strong>Name:</strong> {submission.name}</p>
                        <p><strong>Email:</strong> {submission.email}</p>
                        <p><strong>Institution:</strong> {submission.institution}</p>
                        {/* Add other fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
