// about.jsx

import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to our innovative online course platform. Our mission is to provide learners with the best educational opportunities, empowering individuals to achieve their career and personal goals. Meet the dedicated team behind the platform that makes all of this possible.
        </p>
      </div>

      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Person 1"
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
          <p className="text-sm text-gray-500">CEO & Founder</p>
          <p className="text-gray-600 mt-4">
            John is passionate about revolutionizing the education sector by making quality learning accessible to everyone.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Person 2"
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
          <p className="text-sm text-gray-500">Product Manager</p>
          <p className="text-gray-600 mt-4">
            Jane works tirelessly to ensure that the platform’s features are aligned with the needs of our students and instructors.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Person 3"
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
          <p className="text-sm text-gray-500">Lead Developer</p>
          <p className="text-gray-600 mt-4">
            Michael leads the technical team, bringing innovation and scalability to the platform through cutting-edge development practices.
          </p>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Person 4"
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold text-gray-800">Emily Wang</h3>
          <p className="text-sm text-gray-500">UI/UX Designer</p>
          <p className="text-gray-600 mt-4">
            Emily ensures that our platform is not only functional but also beautifully designed, with an emphasis on user experience.
          </p>
        </div>

        {/* Team Member 5 */}
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Person 5"
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold text-gray-800">David Kim</h3>
          <p className="text-sm text-gray-500">Marketing Manager</p>
          <p className="text-gray-600 mt-4">
            David is responsible for increasing visibility and driving engagement through strategic marketing campaigns and partnerships.
          </p>
        </div>

        {/* Team Member 6 */}
        <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Person 6"
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold text-gray-800">Sophia Turner</h3>
          <p className="text-sm text-gray-500">Customer Support</p>
          <p className="text-gray-600 mt-4">
            Sophia is always ready to assist students with any issues, ensuring that their experience is smooth and enjoyable.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
          Our mission is to empower learners of all ages with the skills they need to succeed in today's competitive world. Through our platform, we strive to provide top-tier courses taught by experts in various fields.
        </p>
      </div>
    </div>
  );
};

export default About;
