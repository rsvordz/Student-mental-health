import React, { useState } from "react";
import { staffs } from "./componentChildren/MosData";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

const Mos = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const openModal = (staff) => {
    setSelectedStaff(staff);
  };

  const closeModal = () => {
    setSelectedStaff(null);
  };

  return (
    <div className="text-primary-100">
      <h1 className="text-4xl mb-10 font-semibold">Meet Our Staff</h1>
      <div className="grid grid-cols-3 gap-4 mb-12">
        {staffs.map((staff) => (
          <div
            key={staff.id}
            className="  p-3 cursor-pointer relative hover:bg-primary-300 ease-in duration-200 hover:scale-95 border-b-4  hover:border-b-blue-300"
            onClick={() => openModal(staff)}
          >
            <Image
              src={staff.src}
              alt={staff.name}
              width="70%"
              className="rounded-[50%] m-auto"
            />
            <h3 className="text-base font-medium text-center">{staff.name}</h3>
            <p className="text-gray-400 text-center">{staff.position}</p>
          </div>
        ))}
      </div>
      {selectedStaff && (
        <div className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-80">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{selectedStaff.name}</h3>
            <p className="mb-4">Position: {selectedStaff.position}</p>

            <div>
              <h4 className="font-semibold mb-2">Specialties:</h4>
              <ul className="list-disc pl-6">
                {selectedStaff.specialties.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Qualifications:</h4>
              <ul className="list-disc pl-6">
                {selectedStaff.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mos;
