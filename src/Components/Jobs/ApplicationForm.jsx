import React, { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

// Initialize EmailJS with your User ID
emailjs.init("-Fdp5T8n_Ca_dlvEe");

const ApplicationForm = ({ jobCategory }) => {
    const navigate = useNavigate();
    const [isApplying, setIsApplying] = useState(false);

    // State hooks for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [resume, setResume] = useState(null);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    // Validate form fields
    const validateForm = () => {
        if (!email) {
            toast.error('Email is required');
            return false;
        }
        if (!emailRegex.test(email)) {
            toast.error('Enter a valid email');
            return false;
        }
        if (!phone) {
            toast.error('Phone Number is required');
            return false;
        }
        if (!firstName) {
            toast.error('First Name is required');
            return false;
        }
        if (!description) {
            toast.error('Description is required');
            return false;
        }
        if (!resume) {
            toast.error('Resume is required');
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;  // Stop submission if validation fails
        }

        try {
            setIsApplying(true);
            let data = await emailjs.send("service_onwlkzy", "template_evxa0e4", {
                firstName,
                lastName,
                email,
                phone,
                category: jobCategory,
                description,
                reply_to: email,
            });

            if (data.status === 200) {
                setIsApplying(false);
                toast.success("Your Application Sent Successfully.");
                // Reset form fields
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setDescription("");
                setResume(null);
                navigate("/");
            }
        } catch (error) {
            setIsApplying(false);
            console.error("Error:", error);
            toast.error("Error Sending Application");
        }
    };

    return (
        <div className='bg-gray-100 pb-[80px]'>
            {/* Application Form */}
            <section>
                <div className="flex flex-col items-center justify-center bg-gray-900 text-white pb-[50px]">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Application Form</h1>
                        <p className="text-gray-400 my-5 px-2 lg:px-[250px] text-center">
                            Explore the opportunities aligning with your qualifications and career goals. Take the next step in your career with <span className='text-[#ff8e2b]'>IES Marketing</span> by submitting your application.
                        </p>
                    </div>
                </div>

                <div className="bg-white mx-auto -mt-[50px] text-black rounded-lg shadow-lg w-full max-w-[900px] p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Submit Your Application</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                    Job Category <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    value={jobCategory}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                    Upload Resume <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    onChange={handleFileChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                rows="4"
                                placeholder="Write Message..."
                                value={description}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                            ></textarea>
                        </div>

                        <div className="text-center w-full">
                            <button
                                type="submit"
                                className="w-full bg-gray-900 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
                            >
                                {isApplying ? "Applying ......" : "Apply Now"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ApplicationForm;

