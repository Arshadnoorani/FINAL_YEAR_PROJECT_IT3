import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-100 to-indigo-100 flex flex-col">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src="/logo_nobg.png"
            alt="MedVision Logo"
            className="h-10 w-10 object-contain"
          />
          <h2 className="text-2xl font-extrabold text-indigo-600">MedVision AI</h2>
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-indigo-500 transition">Home</a>
          </li>
          <li>
            <a href="/auth" className="hover:text-indigo-500 transition">Login</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            Welcome to <span className="text-indigo-600">MedVision AI</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A smart assistant for medical image analysis. Secure, fast, and AI-powered to help you diagnose with confidence and get insights on your health – anytime.
          </p>
          <a
            href="/auth"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </main>

      {/* Tips Section */}
      <section className="w-full bg-indigo-90 rounded-t-3xl py-12 px-6 sm:px-10 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">How to Get the Best Results</h2>
          <p className="text-gray-700 mb-6 text-center">
            To ensure accurate and meaningful analysis, follow these tips:
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-10">
            <div className="bg-indigo-50 rounded-lg p-4 text-gray-700 shadow">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>Ensure the image is clear and not blurry.</li>
                <li>Avoid uploading images with annotations or external markings.</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 text-gray-700 shadow">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>Use the optional description to ask focused questions or highlight specific concerns.</li>
                <li>Wait for the model to process and generate a detailed analysis.</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-indigo-600 mb-3">Try Asking:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
              <li>Describe medical condition in this image.</li>
              <li>What could be the possible diagnosis?</li>
              <li>Analyze any unusual areas in the image.</li>
              <li>what does this scan indicate about the patient's health?</li>
              <li>Explain what the image might suggest overall.</li>
              <li>Look for any patterns that don’t seem normal.</li>
              <li>Point out areas that may need attention.</li>
              <li>what are the key findings in this image?</li>
              <li>Give a full overview of what this image shows.</li>
              <li>What would a radiologist look for in this image?</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
