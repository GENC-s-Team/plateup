"use client";

import { useState } from 'react';

interface ServiceInformation {
  delivery: boolean;
  pickup: boolean;
  vegan: boolean
  foodType: string;
//   server: string;
}

interface ServiceInfoProps {
  onInfoChange: (updateInfo: ServiceInformation) => void;
  info: ServiceInformation;
  onBack: () => void;
  onNext: () => void;
}

export default function ServiceInfo({ onInfoChange, info, onBack, onNext }: ServiceInfoProps) {
  const [serviceDetails, setServiceDetails] = useState<ServiceInformation>(info);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const updatedValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    const updatedDetails = { ...serviceDetails, [name]: updatedValue };
  
    setServiceDetails(updatedDetails);
    onInfoChange(updatedDetails);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Enter Service Information</h2>
      <form className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg">
        <label className="text-sm font-semibold" htmlFor="delivery">
          <input
            type="checkbox"
            id="delivery"
            name="delivery"
            checked={serviceDetails.delivery}
            onChange={handleInputChange}
            className="mr-2"
          />
          Delivery Option
        </label>

        <label className="text-sm font-semibold" htmlFor="pickup">
          <input
            type="checkbox"
            id="pickup"
            name="pickup"
            checked={serviceDetails.pickup}
            onChange={handleInputChange}
            className="mr-2"
          />
          Pickup Option
        </label>

        <label className="text-sm font-semibold" htmlFor="vegan">
          <input
            type="checkbox"
            id="vegan"
            name="vegan"
            checked={serviceDetails.vegan}
            onChange={handleInputChange}
            className="mr-2"
          />
          Vegan Friendly
        </label>

        <label className="text-sm font-semibold" htmlFor="foodType">
          Type of Food:
          <select
            id="foodType"
            name="foodType"
            value={serviceDetails.foodType}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
          >
            <option value="">Select a type</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Thai">Thai</option>
            <option value="French">French</option>
            <option value="Vietnamese">French</option>
          </select>
        </label>

        {/* <label className="text-sm font-semibold" htmlFor="server">
          Server Name:
          <input
            type="text"
            id="server"
            name="server"
            value={serviceDetails.server}
            onChange={handleInputChange}
            placeholder="Enter server's name"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
          />
        </label> */}
      </form>

      <div className="flex mt-4">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700 transition duration-200"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 ml-2"
        >
          Next
        </button>
      </div>
    </>
  );
}
