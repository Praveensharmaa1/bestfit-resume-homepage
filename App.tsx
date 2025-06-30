import "./index.css";

function App() {
  return (
    <div className="font-sans">
      <header className="bg-white shadow py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">BestFit Resume</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </header>
      <section className="bg-gradient-to-r from-blue-50 to-white text-center py-20">
        <h2 className="text-4xl font-bold text-gray-800">Create the Best Professional Resume</h2>
        <p className="mt-4 text-gray-600">AI-powered, recruiter-approved templates crafted for success.</p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">Get Started</button>
      </section>
      <section className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">Choose from Our Templates</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8).keys()].map((i) => (
            <div key={i} className="shadow rounded overflow-hidden">
              <img src={`https://via.placeholder.com/400x520?text=Template+${i+1}`} alt={`Template ${i+1}`} />
              <div className="p-2 text-center text-sm text-gray-700">Template {i + 1}</div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        &copy; {new Date().getFullYear()} BestFit Resume. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
