import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../data/coursesData";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-[Poppins]">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl text-red-600 font-bold mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-blue-600 underline">Go Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#eef2f3] to-[#cfd9df] font-[Poppins] pt-[6rem]">
      <div className="max-w-5xl mx-auto p-6 flex flex-col items-center text-center relative z-10">
        {/* Hero Section */}
        <div className="relative w-full bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            {course.title}
          </h1>

          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
            {course.description}
          </p>

          {/* Course Contents */}
          {course.contents && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Topics Covered</h3>
              <ul className="space-y-3 text-left text-gray-800">
                {course.contents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Duration & Fees */}
          <div className="mb-8 flex flex-col sm:flex-row gap-6 justify-center">
            <p className="bg-blue-100 text-blue-800 py-3 px-6 rounded-full shadow text-lg">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="bg-green-100 text-green-800 py-3 px-6 rounded-full shadow text-lg">
              <strong>Fees:</strong> {course.fees}
            </p>
          </div>

          {/* Job Opportunities */}
          {course.job_opportunity && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Job Opportunities</h3>
              <ul className="flex flex-wrap gap-4 justify-center">
                {course.job_opportunity.map((job, idx) => (
                  <li key={idx} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full shadow">
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block text-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow transition duration-300"
            >
              Enroll Now
            </Link>
            <Link
              to="/courses"
              className="inline-block text-center bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-900 font-bold py-4 px-8 rounded-full shadow transition duration-300"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
