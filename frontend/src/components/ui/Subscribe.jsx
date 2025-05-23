import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-full flex flex-col">
      <div className="flex-1 bg-[#8A3FFC] px-4 py-16 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Get our stories delivered From us to your inbox weekly.
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Get started
            </button>
          </form>

          <p className="text-white/80 mt-4 text-sm">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a response the following day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
