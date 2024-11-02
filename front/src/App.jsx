import React, { useEffect, useState } from "react";

const App = () => {
  const [submissions, setSubmissions] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("http://localhost:5000/submissions");
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        console.log("Submission successful");
        fetchSubmissions();
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <header>
        {/* Topbar Start */}
        <div className="container mx-auto px-4 bg-yellow-50">
          <div className="flex items-center justify-between py-3">
            <div className="hidden lg:block">
              <a href="#" className="text-decoration-none">
                <h1 className="text-5xl font-semibold text-gray-800">
                  <span className="text-yellow-500 font-bold border border-yellow-500 px-3 mr-1">
                    S
                  </span>
                  Shanthi Tex
                </h1>
              </a>
            </div>
            <div className="flex-1 lg:flex-grow-0">
              <form>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-grow border border-gray-300 p-2 rounded-l"
                    placeholder="Search for products"
                  />
                  <button className="bg-yellow-500 text-white px-4 rounded-r">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="border p-2 rounded border-yellow-500">
                <i className="fas fa-heart text-yellow-500"></i>
                <span className="ml-1">0</span>
              </a>
              <a href="#" className="border p-2 rounded border-yellow-500">
                <i className="fas fa-shopping-cart text-yellow-500"></i>
                <span className="ml-1">0</span>
              </a>
            </div>
          </div>
        </div>
        {/* Topbar End */}

        {/* Navbar Start */}
        <div className="container mx-auto px-4 mb-5 bg-yellow-100">
          <div className="flex border-t border-yellow-200">
            <div className="flex-grow">
              <nav className="flex justify-between items-center py-3">
                <a href="#" className="font-semibold text-gray-800">
                  Home
                </a>
                <a href="#" className="font-semibold text-gray-800">
                  Latest Collections
                </a>
                <a href="#" className="font-semibold text-gray-800">
                  Contact
                </a>
                <div className="space-x-4">
                  <a href="#" className="font-semibold text-gray-800">
                    Login
                  </a>
                  <a href="#" className="font-semibold text-gray-800">
                    Register
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Navbar End */}

        {/* Contact Section */}
        <div className="container mx-auto px-4 py-5 bg-yellow-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-xl mb-4 text-gray-800">
                Get In Touch
              </h5>
              <p className="mb-4 text-gray-700">
                We would love to hear from you! Please contact us by filling out
                the form below:
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="border p-2"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    className="border p-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <textarea
                  className="border p-2 mt-4 w-full"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-2 mt-4 rounded"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h5 className="font-semibold text-xl mb-4 text-gray-800">
                Contact Information
              </h5>
              <p className="mb-2 text-gray-700">
                <i className="fa fa-map-marker-alt mr-2"></i>123 Street, City,
                State, Country
              </p>
              <p className="mb-2 text-gray-700">
                <i className="fa fa-phone-alt mr-2"></i>+123 456 7890
              </p>
              <p className="mb-2 text-gray-700">
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </p>
            </div>
          </div>
        </div>
        {/* Contact End */}

        {/* Submissions Display */}
        <div className="container mx-auto px-4 py-5">
          <h2 className="text-xl font-bold">Submissions</h2>
          <ul className="mt-4">
            {submissions.map((submission, index) => (
              <li key={index} className="border-b py-2">
                <strong>Name:</strong> {submission.name} |{" "}
                <strong>Email:</strong> {submission.email} |{" "}
                <strong>Message:</strong> {submission.message}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Start */}
        <footer className="bg-yellow-100 py-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-800">
              <div>
                <h5 className="font-semibold text-xl mb-4">Get In Touch</h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>123 Street, City,
                  State, Country
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+123 456 7890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-xl mb-4">Quick Links</h5>
                <a href="#" className="block mb-2">
                  About Us
                </a>
                <a href="#" className="block mb-2">
                  Contact Us
                </a>
                <a href="#" className="block mb-2">
                  Privacy Policy
                </a>
                <a href="#" className="block">
                  Terms & Conditions
                </a>
              </div>
              <div>
                <h5 className="font-semibold text-xl mb-4">Newsletter</h5>
                <p>Subscribe to our newsletter for the latest updates:</p>
                <input
                  type="text"
                  className="border p-2 w-full mt-2"
                  placeholder="Your email address"
                />
                <button className="bg-yellow-500 text-white w-full mt-2 py-2">
                  Subscribe
                </button>
              </div>
              <div>
                <h5 className="font-semibold text-xl mb-4">Follow Us</h5>
                <div className="flex space-x-2">
                  <a
                    className="text-yellow-500 p-2 border rounded-full"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="text-yellow-500 p-2 border rounded-full"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="text-yellow-500 p-2 border rounded-full"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="text-yellow-500 p-2 border rounded-full"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer End */}
      </header>
    </div>
  );
};

export default App;
