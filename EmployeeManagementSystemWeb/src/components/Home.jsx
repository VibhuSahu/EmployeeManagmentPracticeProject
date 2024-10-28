import React from 'react';


const Home = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-gray-900" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      {/* Header with image */}
      <header className="relative w-full h-3/4 flex items-center justify-center text-center">
        <div className="absolute bottom-8 left-8 hidden md:block">
          <span className="bg-gray-800 text-white px-4 py-2">Open from 9am to 6pm</span>
        </div>
        <div className="text-white text-center">
          <h1 className="text-6xl md:text-8xl font-bold">The <br /> Employee Management App</h1>
        </div>
        <div className="absolute bottom-8 right-8">
          <span className="text-white">15 Adr Street, 5015, NY</span>
        </div>
      </header>

      {/* Content */}
      <div className="bg-gray-800 text-white text-lg py-12">
        <div className="max-w-3xl mx-auto p-8">
          <h5 className="text-center text-2xl md:text-4xl font-semibold mb-8">About The Employee Management App</h5>
          <p>
            The Employee Management App is a powerful tool designed to streamline employee data management, improve efficiency, and ensure compliance with HR policies. With this app, you can quickly add, view, and update employee records, manage payroll, track attendance, and generate reports.
          </p>
          <p className="mt-4">
            <strong>Pros:</strong> This application offers a user-friendly interface, secure data storage, customizable reporting features, and seamless integration with existing systems. It is ideal for businesses of all sizes, helping to reduce administrative workload and improve the accuracy of employee records.
          </p>
          <div className="border-l-4 border-gray-600 bg-gray-700 text-white p-4 mt-6">
            <p><i>"Streamline your HR processes and focus on what truly matters - your team."</i></p>
            <p>HR Manager and Founder: Alex Green</p>
          </div>
          <img src="../../public/pic2.jpg" alt="Employee management illustration" className="w-full max-w-full mt-6" />
          <p className="mt-4"><strong>Office Hours:</strong> Monday - Friday, 9am to 6pm.</p>
          <p><strong>Address:</strong> 15 Adr Street, 5015, NY</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center bg-gray-900 text-white py-6">
        <p>Powered by <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Tailwind CSS</a></p>
      </footer>
    </div>
  );
};

export default Home;
