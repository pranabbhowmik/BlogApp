import { useState } from "react";
import Subscribe from "../components/ui/Subscribe";
import { MapPin, Mail, Phone } from "lucide-react";
import useContact from "../hooks/useContact.js";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [verify, setVerify] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { sendMessage } = useContact();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setVerify(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 mt-16 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Contact us to publish your content and show ads to our website and get
          a good reach.
        </p>
      </div>

      <div className=" mx-auto px-4 mb-16">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <MapPin className="w-8 h-8  text-white" />,
              title: "Office",
              detail: "Victoria Street, London, UK",
            },
            {
              icon: <Mail className="w-8 h-8 text-white" />,
              title: "Email",
              detail: "hello@artim.com",
            },
            {
              icon: <Phone className="w-8 h-8 text-white" />,
              title: "Phone",
              detail: "+001 2345 6789",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8  rounded-lg shadow-md text-center transition-transform transform  hover:shadow-xl  cursor-pointer"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?..."
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="location map"
            ></iframe>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["name", "email"].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-400 hover:bg-gray-50 transition"
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["phone", "subject"].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-400 hover:bg-gray-50 transition"
                      required={field === "subject"}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:border-purple-400 hover:bg-gray-50 transition"
                  required
                ></textarea>
              </div>
              <ReCAPTCHA
                sitekey="6LfZGt4qAAAAAFEdivpSrg9wlu-O269ZZWR970sx"
                onChange={onChange}
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Subscribe />
    </div>
  );
}

export default Contact;
