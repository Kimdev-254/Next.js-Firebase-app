import React, { useState } from "react"
import { db, collection, addDoc, storage } from "../config/firebaseConfig" // Ensure this path is correct
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    admno: "",
    contact: "",
    email: "",
    institution: "",
    course: "",
    company: "",
    department: "",
    role: "",
    supervisor: "",
    commenced: "",
    completed: "",
    message: "",
    numPages: "",
    docType: "",
    timeline: "",
    photoUrl: "",
    fileUrl: "",
  })

  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePhotoChange = (e) => {
    setSelectedPhoto(e.target.files[0])
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let photoUrl = ""
      let fileUrl = ""

      if (selectedPhoto) {
        const photoRef = ref(storage, `uploads/photos/${selectedPhoto.name}`)
        await uploadBytes(photoRef, selectedPhoto)
        photoUrl = await getDownloadURL(photoRef)
      }

      if (selectedFile) {
        const fileRef = ref(storage, `uploads/files/${selectedFile.name}`)
        await uploadBytes(fileRef, selectedFile)
        fileUrl = await getDownloadURL(fileRef)
      }

      const submissionData = { ...formData, photoUrl, fileUrl }
      await addDoc(collection(db, "submissions"), submissionData)
      alert("Form submitted successfully!")
    } catch (error) {
      console.error("Error adding document: ", error)
      alert("Error submitting form: " + error.message) // Log and alert the exact error
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#003301] bg-card text-gray-300 rounded-lg shadow-md font-serif mb-1">
      <form onSubmit={handleSubmit}>
        <div className="mb-8 font-red">
          <h2 className="text-xl font-semibold mb-4 flex justify-center text-gray-300">
            Attachment Report Details
          </h2>
          <p className="text-muted-foreground mb-4 flex justify-center">
            Fill the form to give a clear description of the attachment period
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="admno" className="block text-sm font-medium">
                Admission No.
              </label>
              <input
                type="text"
                id="admno"
                name="admno"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.admno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">School Information</h2>
          <div className="mb-4">
            <label htmlFor="institution" className="block text-sm font-medium">
              Institution
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
              placeholder="e.g Karatina University"
              value={formData.institution}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="course" className="block text-sm font-medium">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
              value={formData.course}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Cover photo</label>
            <div className="mt-2 border-2 grid-cols-2 border-dashed border-border rounded-md p-6">
              <div className="flex justify-center">
                <label
                  htmlFor="upload-photo"
                  className="text-center ml-20 cursor-pointer"
                >
                  <input
                    id="upload-photo"
                    type="file"
                    accept="image/*"
                    className="visible"
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Place of Attachment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium">
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium">
                Your role in the company
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="supervisor" className="block text-sm font-medium">
                Supervisor
              </label>
              <input
                type="text"
                id="supervisor"
                name="supervisor"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.supervisor}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="commenced" className="block text-sm font-medium">
                Commenced (Starting date)
              </label>
              <input
                type="text"
                id="commenced"
                name="commenced"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.commenced}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="completed" className="block text-sm font-medium">
                Completed
              </label>
              <input
                type="text"
                id="completed"
                name="completed"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.completed}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Document Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="numPages" className="block text-sm font-medium">
                Number of pages
              </label>
              <input
                type="text"
                id="numPages"
                name="numPages"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.numPages}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="docType" className="block text-sm font-medium">
                Document type
              </label>
              <input
                type="text"
                id="docType"
                name="docType"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.docType}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium">
                Report Due Date
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                className="bg-gray-100 mt-1 block w-full border border-border text-black rounded-md shadow-sm p-2"
                value={formData.timeline}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="upload-file" className="block text-sm font-medium">
              {" "}
              Add file/draft(optional)
            </label>
            <div className="bg-foreground mt-2 border-2 grid-cols-2 border-dashed border-border rounded-md p-6">
              <div className="flex justify-center">
                <label
                  htmlFor="upload-file"
                  className="text-center ml-20 cursor-pointer"
                >
                  <input
                    id="upload-file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="visible"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white font-serif py-2 px-4 rounded hover:bg-teal-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
