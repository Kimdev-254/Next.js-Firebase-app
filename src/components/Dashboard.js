import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

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
        <div className="max-w-7xl bg-foreground  text-gray-300 font-serif  mx-auto mt-8">
            <h2 className="text-3xl flex justify-center font-semibold font-sans mb-4">Submissions</h2>
            <ul>
                {submissions.map(submission => (
                    <li key={submission.id} className="bg-[#003403] mb-4 p-4 rounded-lg border border-gray-600">
                        <div className="flex justify-center mb-4 p-2 bg-foreground rounded">
                            <h2 className="font-bold text-lg"><i>{submission.admno}</i></h2>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="border-zinc-900">
                                <h3 className="font-bold mb-2">Personal Info</h3>
                                <p><strong>Name:</strong> {submission.fullname}</p>
                                <p><strong>Adm No:</strong> {submission.admno}</p>
                                <p><strong>Contact:</strong> {submission.contact}</p>
                                <p><strong>Email:</strong> {submission.email}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">School Info</h3>
                                <p><strong>Institution:</strong> {submission.institution}</p>
                                <p><strong>Course:</strong> {submission.course}</p>
                                <p><strong>Role:</strong> {submission.role}</p>
                                <p><strong>Supervisor:</strong> {submission.supervisor}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Attachment Info</h3>
                                <p><strong>Company:</strong> {submission.company}</p>
                                <p><strong>Department:</strong> {submission.department}</p>
                                <p><strong>Commenced:</strong> {submission.commenced}</p>
                                <p><strong>Completed:</strong> {submission.completed}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Document Info</h3>
                                <p><strong>No. of Pages:</strong> {submission.numPages}</p>
                                <p><strong>Document Type:</strong> {submission.docType}</p>
                                <p><strong>Timeline:</strong> {submission.timeline}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold mb-2">Additional Information</h3>
                            <textarea
                                value={submission.message}
                                readOnly
                                className="w-full p-2 border bg-[#003403] border-gray-500 rounded-md"
                                rows="4"
                            ></textarea>
                        </div>
                        {submission.photoUrl && (
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">Cover Photo</h3>
                                <a
                                    href={submission.photoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    View Cover Photo
                                </a>
                            </div>
                        )}
                        {submission.fileUrl && (
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">Uploaded File</h3>
                                <a
                                    href={submission.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    View Uploaded File
                                </a>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
