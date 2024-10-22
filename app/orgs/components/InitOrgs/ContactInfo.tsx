"use client";

import { useState } from "react";

interface ContactInformation {
    primaryContactName: string; // Name of the primary contact person
    email: string; // Email address
    phoneNumber: string; // Phone number
    websiteLink: string;
}

interface ContactInfoProps {
    onInfoChange: (updateInfo: ContactInformation) => void;
    info: ContactInformation;
    onBack: () => void;
    onNext: () => void;
}

export default function ContactInfo({ onInfoChange, info, onBack, onNext }: ContactInfoProps) {
    const [formData, setFormData] = useState<ContactInformation>(info);

    const onChangeInfo = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => { 
        const { name, value } = e.target;

        const updatedInfo: ContactInformation = { ...formData, [name]: value };

        setFormData(updatedInfo);

        onInfoChange(updatedInfo);
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2> {/* Title */}
            <form className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg">
                <label className="text-sm font-semibold" htmlFor="primaryContactName">
                    Primary Contact Name
                </label>
                <input
                    type="text"
                    id="primaryContactName"
                    name="primaryContactName"
                    value={formData.primaryContactName}
                    onChange={onChangeInfo}
                    placeholder="Enter primary contact name"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="text-sm font-semibold" htmlFor="email">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChangeInfo}
                    placeholder="Enter email address"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="text-sm font-semibold" htmlFor="phoneNumber">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={onChangeInfo}
                    placeholder="Enter phone number"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="text-sm font-semibold" htmlFor="websiteLink">
                    Website Link (link to your organization's website)
                </label>
                <input
                    type="url"
                    id="websiteLink"
                    name="websiteLink"
                    value={formData.websiteLink}
                    onChange={onChangeInfo}
                    placeholder="Enter website link (e.g., http://...)"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </form>

            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    onClick={onBack} // Call the onBack function
                    className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700 transition duration-200"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={onNext} // Call the onNext function
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    Next
                </button>
            </div>
        </>
    );
}
