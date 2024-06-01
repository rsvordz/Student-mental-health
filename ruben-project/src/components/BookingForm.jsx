import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");

  return (
    <div className="h-10/12 bg-gray-100 py-8 px-6 flex justify-center items-center">
      <form className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
        <h2 className="text-2xl font-bold mb-6">{name}</h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            type="date"
            id="date"
            name="date"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="4"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={submitForm}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

function submitForm() {
  fetch("server", name);
}

export default BookingForm;
