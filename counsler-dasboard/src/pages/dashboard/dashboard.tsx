import React from 'react';

// Icon Components
const HouseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path>
  </svg>
);

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.49,3-3L215.46,186a8,8,0,0,0,6-3.94A107.6,107.6,0,0,0,232,156.8a8,8,0,0,0-1.48-7.06ZM128,216a95.57,95.57,0,0,1-53.92-16.61l15.16-15.16A78.16,78.16,0,0,0,96,184.63l-8.33,8.33a8,8,0,0,0-1.94,7.19A95.73,95.73,0,0,1,32,156.8a8,8,0,0,0,3.94-6,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06L40,130.16q0-2.16,0-4.32L25.11,107.2a8,8,0,0,0-1.48-7.06A107.21,107.21,0,0,0,13.71,73.89,8,8,0,0,0,6,67.32l2.64-23.72q1.56-1.49,3-3L70,40.54a8,8,0,0,0,6-3.94A107.71,107.71,0,0,0,96,10.28a8,8,0,0,0,7.06-1.49L128,1.16q2.16-.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25,10.88,8,8,0,0,0,6,3.93L186,40.54a8,8,0,0,0,1.48,7.06,107.21,107.21,0,0,0,10.88,26.25A8,8,0,0,0,208,70a8,8,0,0,0,6-3.94l8.33-8.33a78.16,78.16,0,0,0,26.35,15.47l-15.16,15.16A95.57,95.57,0,0,1,128,216Z"></path>
  </svg>
);

const Dashboard = () => (
  <div className="flex h-screen bg-gray-100">
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
              <HouseIcon />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
              <CalendarIcon />
              <span className="ml-3">Appointments</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
              <UsersIcon />
              <span className="ml-3">Clients</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
              <CreditCardIcon />
              <span className="ml-3">Payments</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200">
              <GearIcon />
              <span className="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-6">Good morning, Sarah</h1>
      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        <ul className="space-y-4">
          <li className="flex justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold">Meeting with John Doe</h3>
              <p className="text-gray-500">Aug 30, 2024, 10:00 AM</p>
            </div>
            <button className="text-blue-500 hover:underline">View Details</button>
          </li>
          {/* Add more appointment items here */}
        </ul>
      </section>
    </main>
  </div>
);

export default Dashboard;
