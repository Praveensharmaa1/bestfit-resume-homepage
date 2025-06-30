import React from "react";

const Home = () => {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Build Your Best Professional Resume
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Create recruiter-approved, ATS-friendly resumes with BestFit Resume.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Browse Templates
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">Why Choose BestFit Resume?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Suggestions",
                desc: "Get intelligent improvement tips for grammar, content, and structure.",
              },
              {
                title: "20+ Professional Templates",
                desc: "Modern industry-specific templates to impress recruiters.",
              },
              {
                title: "Multiple Resume Versions",
                desc: "Tailor your resume for different job roles and save versions.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="border rounded-2xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Templates Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Popular Resume Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((temp) => (
              <div key={temp} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
                <img
                  src={`https://via.placeholder.com/600x800?text=Template+${temp}`}
                  alt={`Resume Template ${temp}`}
                  className="w-full"
                />
                <div className="p-4 text-center">
                  <p className="font-medium text-gray-700">Template {temp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BestFit Resume. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
