import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Build Your <span className="text-blue-600">Best Professional Resume</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
            Create recruiter-approved, ATS-friendly resumes with BestFit Resume’s AI guidance.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="text-lg px-6 py-3">Get Started</Button>
            <Button className="text-lg px-6 py-3" style={{ backgroundColor: '#fff', color: '#1d4ed8', border: '1px solid #1d4ed8' }}>
              Browse Templates
            </Button>
          </div>
          <img
            src="/src/assets/hero.jpg"
            alt="Resume Hero"
            className="mt-12 rounded-xl shadow-xl mx-auto max-w-4xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-10 text-gray-800">Why Choose BestFit Resume?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
                <h3 className="text-xl font-bold text-blue-600">{feature.title}</h3>
                <p className="mt-3 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Templates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Popular Resume Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((temp) => (
              <div
                key={temp}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={`/src/assets/template${temp}.jpg`}
                  alt={`Resume Template ${temp}`}
                  className="w-full h-96 object-cover"
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
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} BestFit Resume. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

