import React from "react";
import ailogo from "../../assets/bloglogo.jfif";
function LandingPage() {
  return (
    <div className="min-h-screen sm:min-h-full xl:min-h-screen bg-[#8A3FFC] relative overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxNDQwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLTEwIDIwQzE5MC4xMzMgMjAgMTkwLjEzMyAxMDAgMzkwLjI2NyAxMDBDNTkwLjQgMTAwIDU5MC40IDIwIDc5MC41MzMgMjBDOTkwLjY2NyAyMCA5OTAuNjY3IDEwMCAxMTkwLjggMTAwQzEzOTAuOTMgMTAwIDEzOTAuOTMgMjAgMTU5MS4wNyAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] animate-wave"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-6 top-10 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-purple-200 text-sm uppercase tracking-wider">
              Featured Post
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              How AI will Change the Future
            </h1>
            <p className="text-purple-100 text-lg max-w-lg">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </p>
            <button className="bg-white text-[#8A3FFC] px-8 py-3 rounded-full hover:bg-purple-100 transition-colors inline-flex items-center">
              Read more
            </button>
          </div>
          <div className="relative">
            <img
              src={ailogo}
              alt="AI Illustration"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
