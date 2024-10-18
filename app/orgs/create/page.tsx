"use client";

import BasicInfo from "@/app/orgs/components/InitOrgs/BasicInfo";
import { useState } from "react";
import AddressInfo from "../components/InitOrgs/AddressInfo";


interface BasicInformation {
  name: string;
  description: string;
}

interface ContactInformation {
  primaryContactName: string; // Name of the primary contact person
  email: string; // Email address
  phoneNumber: string; // Phone number
  websieLink: string;
}

interface AddressInformation {
  streetAddress: string; // Street address
  city: string; // City
  stateOrProvince?: string; // State or province (optional for international)
  postalCode: string; // Postal code (can accommodate various formats)
  country: string; // Country
  countryCode?: string; // ISO country code (optional)
  region?: string; // Additional regional information (optional)
}

interface ServicesOffered {
  services: string[]; // Array of key services provided by the organization
}

interface AdditionalInformation {
  yearEstablished: number; // Year the organization was established
  serviceArea: string; // Geographic area served
}

function CreateOrgPage() {
  const panelsArr = [
    "basicInfo", // Basic Information
    "address", // Address
    "contact", // Contact Information
    "services", // Services Offered
    "additionalInfo", // Additional Information
    "review",
  ];

  const [panel, setPanel] = useState<string>(panelsArr[0]);

  const [basicInfo, setInfo] = useState<BasicInformation>({
    name: "",
    description: "",
  });


  const [addressInfo, setAddressInfo] = useState<AddressInformation>({
    streetAddress: '',
    city: '',
    stateOrProvince: '',
    postalCode: '',
    country: '',
    countryCode: '',
    region: '',
  });

  const [currentPanelIndex, setCurrentPanelIndex] = useState<number>(0);

  // Function to handle panel change to the next panel
  const onChangePanelNext = () => {
    if (currentPanelIndex < panelsArr.length - 1) {
        setCurrentPanelIndex((prev) => prev + 1); // Move to the next panel
    }
};

// Function to handle panel change to the previous panel
const onChangePanelBack = () => {
    if (currentPanelIndex > 0) {
        setCurrentPanelIndex((prev) => prev - 1); // Move to the previous panel
    }
};


const renderPanel = () => {
    switch (panelsArr[currentPanelIndex]) {
        case "basicInfo":
            return <BasicInfo onInfoChange={setInfo} info={basicInfo} onNext ={onChangePanelNext}  />;
        case "contact":
            // Return <ContactInfo onInfoChange={setContactInfo} 
            break;
        case "address":
            return <AddressInfo onInfoChange={setAddressInfo} info={addressInfo} onNext ={onChangePanelNext} onBack= {onChangePanelBack}/>
            break;
        case "services":
            // Return <ServicesOffered onInfoChange={setServices} /> when implemented
            break;
        case "additionalInfo":
            // Return <AdditionalInfo onInfoChange={setAdditionalInfo} /> when implemented
            break;
        case "review":
            // Return <Review onSubmit={handleSubmit} /> when implemented
            break;
        default:
            return null;
    }
};

  return (
    <>
      <p> Create Page</p>

      {renderPanel()}


    </>
  );
}

export default CreateOrgPage;
