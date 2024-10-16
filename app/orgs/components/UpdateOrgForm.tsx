"use client";

import { useState } from "react";

export function UpdateOrg({ organization }: { organization: any }) {
  const [showModel, toggleModal] = useState<boolean>(false);

  const [formData, setFormData] = useState(organization);

  const onclickModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    toggleModal((prev) => {
      return !prev;
    });
    console.log(showModel);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <p>Update </p>

      <button onClick={onclickModal}>Open</button>

      {showModel && (
        <form>
          <h2>Update Organization</h2>

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>

          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>

          <label>
            State/Region:
            <input
              type="text"
              name="state_region"
              value={formData.state_region}
              onChange={handleChange}
            />
          </label>

          <label>
            Zip Code:
            <input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
            />
          </label>

          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Save</button>
        </form>
      )}
    </>
  );
}
