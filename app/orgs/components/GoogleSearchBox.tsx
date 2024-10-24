"use client"

import {  useMapsLibrary } from "@vis.gl/react-google-maps";

import { useRef, useState, useEffect } from "react";

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const GoogleSearchBox = ({ onPlaceSelect }: Props) => {

  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>();
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });

    
  }, [onPlaceSelect, placeAutocomplete]);

  return (
  
        <div className="autocomplete-container flex justify-center align-middle m-10">
          <input ref={inputRef} />
        </div>


  );
};

export default GoogleSearchBox;
