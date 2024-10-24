"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleSearchBox from "../GoogleSearchBox";

import { useState } from "react";
import { GeoCoding } from "../action/action";

interface AddressInformation {
  streetAddress: string; // Street address
  city: string; // City
  stateOrProvince?: string; // State or province (optional for international)
  postalCode: string; // Postal code (can accommodate various formats)
  country: string; // Country
  countryCode?: string; // ISO country code (optional)
  region?: string; // Additional regional information (optional)
}

interface AddressInfoProps {
  onInfoChange: (updateInfo: AddressInformation) => void;
  info: AddressInformation;
  onBack: () => void;
  onNext: () => void;
}

export default function AddressInfo({
  onInfoChange,
  info,
  onBack,
  onNext,
}: AddressInfoProps) {
  const [formData, setFormData] = useState<AddressInformation>(info);

  const [recAddress, setRecAddress] = useState(""); // Initialize as a string for the recommended address

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInfo: AddressInformation = { ...formData, [name]: value };
    setFormData(updatedInfo);
    onInfoChange(updatedInfo);
  };

  const onClickNext = async () => {
    // Construct the address from form data
    const address = `
      ${formData.streetAddress},
      ${formData.city}${
        formData.stateOrProvince ? `, ${formData.stateOrProvince}` : ""
      } 
      ${formData.postalCode},
      ${formData.country}${
        formData.countryCode ? ` (${formData.countryCode})` : ""
      }
      ${formData.region ? `, ${formData.region}` : ""}
    `.trim();
  

  
    try {
      const res = await GeoCoding(address);

      const formatted_address = res.results[0].formatted_address

      console.log(formatted_address)

      setRecAddress(formatted_address)
  
      // Check the result and handle accordingly
      if (res.error) {
        console.error("Geocoding error:", res.error);
        // Handle the error, e.g., show a message to the user
      } else {
        console.log("Geocoding result:", res);
        // Process the result as needed
      }
    } catch (error) {
      console.error("Error during geocoding:", error);
      // Handle any unexpected errors
    }
  };
  

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Address Information</h2>
      <form className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg">
        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={onChangeInfo}
          placeholder="Enter street address"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={onChangeInfo}
          placeholder="Enter city"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="stateOrProvince">State/Province (optional)</label>
        <input
          type="text"
          id="stateOrProvince"
          name="stateOrProvince"
          value={formData.stateOrProvince}
          onChange={onChangeInfo}
          placeholder="Enter state or province"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={onChangeInfo}
          placeholder="Enter postal code"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={onChangeInfo}
          placeholder="Enter country"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="countryCode">Country Code (optional)</label>
        <input
          type="text"
          id="countryCode"
          name="countryCode"
          value={formData.countryCode}
          onChange={onChangeInfo}
          placeholder="Enter ISO country code"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="region">Region (optional)</label>
        <input
          type="text"
          id="region"
          name="region"
          value={formData.region}
          onChange={onChangeInfo}
          placeholder="Enter additional region information"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>

      <p>Correct Address: {recAddress} </p>

      <button
        type="button"
        onClick={onBack} // Call the onBack function
        className="mt-4 bg-gray-600 text-white p-2 rounded hover:bg-gray-700 transition duration-200"
      >
        Back
      </button>
      <button
        type="button"
        //onClick={onClickNext} // (we need to find out a way to implement this and the onNext function, right now it doesn't produce the correct address section)
        onClick={onNext} // Call the onNext function
        className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Next
      </button>
    </>
  );
}
