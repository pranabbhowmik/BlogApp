import React, { useEffect, useState } from "react";
import meeting from "../assets/meeting.jpg";
import Subscribe from "../components/ui/Subscribe";

function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Start at the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);

    // Smoothly scroll to the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, []);
  const steps = [
    {
      number: "01",
      title: "Brainstorming",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated",
    },
    {
      number: "02",
      title: "Analysing",
      description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.",
    },
    {
      number: "03",
      title: "News Publishing",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wider">
            ABOUT US
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Creative Blog Writing and publishing site
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>
      </div>

      {/* Team Image Section */}
      <div className="container mx-auto px-4 sm:px-28 py-8">
        <div className="rounded-2xl overflow-hidden ">
          <img
            src={meeting}
            alt="Our team collaborating"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* How We Work Section */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="inline-block px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full mb-6 uppercase tracking-wider">
            HOW WE WORK
          </p>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              I will show you how
              <br className="hidden md:block" />
              our team works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bring to the table win-win market strategies to ensure perfect
              articles.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
        {steps.map((step, index) => (
          <div
            key={step.number}
            onClick={() => setActiveIndex(index)}
            className={`rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
              index === activeIndex
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-600 hover:bg-purple-50"
            }`}
          >
            <div className="mb-6">
              <span
                className={`text-6xl font-bold ${
                  index === activeIndex ? "text-white" : "text-gray-200"
                }`}
              >
                {step.number}
              </span>
            </div>
            <h3
              className={`text-xl font-semibold mb-4 ${
                index === activeIndex ? "text-white" : "text-gray-900"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mb-6 ${
                index === activeIndex ? "text-purple-100" : "text-gray-600"
              }`}
            >
              {step.description}
            </p>
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white text-purple-600 hover:bg-purple-50"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      <div className="container mx-auto py-16">
        <Subscribe />
      </div>
    </div>
  );
}

export default About;
