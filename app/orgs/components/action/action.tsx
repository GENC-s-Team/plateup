"use server";

type orgType = {
  name: String;
  contact_email: String;
  city: String;
  state_region: String;
  address: String;
  zip_code: Number;
  contact_phone: Number;
  country: String;
  user_id?: String;
};

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function createOrgAction(formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // You're not logged in
  if (!user) {
    redirect("/login");
  }

  //The data isn't formatted correctly or missing field

  const orgData: orgType = {
    name: formData.get("name") as string,
    contact_email: formData.get("email") as string,
    city: formData.get("city") as string,
    state_region: formData.get("state") as string,
    address: formData.get("address") as string,
    zip_code: parseInt(formData.get("zip_code") as string, 10),
    contact_phone: parseInt(formData.get("tel") as string, 10),
    country: formData.get("country") as string,
    user_id: (user.id as string) || undefined,
  };

  console.log(orgData);

  const { data, error } = await supabase
    .from("organizations")
    .insert([orgData]);

  if (error) {
    console.log(error);
  }

  revalidatePath("/");
}

export async function GeoCoding(address: string) {
  const apiLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
`;

  try {
    const response = await fetch(apiLink);

    // Check if the response is ok (status code 200)
    if (!response.ok) {
      throw new Error(`Error fetching geocoding data: ${response.statusText}`);
    }

    const result = await response.json();
    return result; // or return specific data as needed
  } catch (error) {
    console.error("Geocoding error:", error);
    // Handle the error accordingly, e.g., return an error response
    return { error: error }; // or throw error to be handled by the caller
  }
}

// Get Google API KEY from Server Side
