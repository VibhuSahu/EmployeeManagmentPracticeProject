import React from 'react';

const Docs = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-center mb-4">This is the about page of the Employee Management System.</p>
      <div className="about-section text-center mb-8">
        <p className="text-lg">Some text about who we are and what we do.</p>
        <p className="text-sm text-gray-600">Resize the browser window to see that this page is responsive.</p>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-6">Our Team</h2>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/w3images/team1.jpg" alt="Jane" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Jane Doe</h2>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="mt-2 text-gray-700">Some text that describes me lorem ipsum ipsum lorem.</p>
            <p className="mt-2 text-gray-500">jane@example.com</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Contact
            </button>
          </div>
        </div>

        <div className="max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/w3images/team2.jpg" alt="Mike" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Mike Ross</h2>
            <p className="text-gray-500">Art Director</p>
            <p className="mt-2 text-gray-700">Some text that describes me lorem ipsum ipsum lorem.</p>
            <p className="mt-2 text-gray-500">mike@example.com</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Contact
            </button>
          </div>
        </div>

        <div className="max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/w3images/team3.jpg" alt="John" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-500">Designer</p>
            <p className="mt-2 text-gray-700">Some text that describes me lorem ipsum ipsum lorem.</p>
            <p className="mt-2 text-gray-500">john@example.com</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
