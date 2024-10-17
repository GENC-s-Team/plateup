'use client'

import { APIProvider } from "@vis.gl/react-google-maps"
import GoogleSearchBox from "../components/GoogleSearchBox"

import { useState } from "react"

const testPage = () => {


    const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

    return <>

    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>

        <GoogleSearchBox onPlaceSelect={setSelectedPlace} />


    </APIProvider>
    
    
    </>
}

export default testPage