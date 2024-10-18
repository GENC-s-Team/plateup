"use client";

import { useState } from "react";

interface BasicInformation {
  name: string;
  description: string;
}

interface BasicInfoProps {
  onInfoChange: (updateInfo: BasicInformation) => void,
  info: BasicInformation,
  onNext: () => void
}

export default function BasicInfo({ onInfoChange, info, onNext }: BasicInfoProps) {
  const [formData, setFormData] = useState<BasicInformation>(info);

  const onChangeInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const updatedInfo: BasicInformation = { ...formData, [name]: value };

    setFormData(updatedInfo);

    onInfoChange(updatedInfo);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Register Your Organization</h2>{" "}
      {/* Title */}
      <form className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg">
        <label className="text-sm font-semibold" htmlFor="name">
          Organization Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChangeInfo}
          placeholder="Enter organization name"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="text-sm font-semibold" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={onChangeInfo}
          placeholder="Enter organization description"
          rows={4}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

        <button
          type="button"
          onClick={onNext} // Call the onNext function
          className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Next
        </button>
    </>
  );
}
