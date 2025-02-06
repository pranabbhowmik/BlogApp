import React from "react";
import vrplay from "../assets/vrglass.jfif";
import carcontrol from "../assets/carcontrol.jpg";
function BlogDetails() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 mt-16 lg:px-8">
      {/* Header */}
      <header className="mb-8">
        <div className="text-sm text-gray-600 uppercase tracking-wider mb-4">
          DEVELOPMENT • 24 March 2023
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          How to make a Game look more attractive with New VR & AI Technology
        </h1>
      </header>

      {/* Featured Image */}
      <div className="rounded-lg overflow-hidden mb-8">
        <img
          src={vrplay}
          alt="Person wearing VR headset"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-6">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it's
          advancing the state-of-the-art in building helpful products or
          developing tools and resources that enable others, we're committed to
          making AI accessible to everyone.
        </p>

        <p className="text-gray-700 mb-6">
          Every step in a special partnership with AI Builder, RealityEngine and
          more. We're deliberately releasing how people interact with our
          products — and at Google, we've been responsibly developing large
          language models so we can safely bring them to our products. Today,
          we're excited to share our early progress. Developers and businesses
          can now try new API-powered AI tools and take advantage of our open
          models in safe building blocks for innovation. And we're eager to
          improve more introducing new features that help people harness the
          power of generative AI to create, connect and collaborate.
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-gray-300 pl-4 my-8">
          <p className="text-xl text-gray-600 italic">
            "People worry that computers will get too smart and take over the
            world, but the real problem is that they're too stupid and they've
            already taken over the world."
          </p>
          <footer className="text-gray-500 mt-2">- Pedro Domingos</footer>
        </blockquote>

        <p className="text-gray-700 mb-6">
          More than 3 billion people already benefit from AI-powered features in
          Google Workspace, whether it's using Smart Compose in Gmail or
          auto-generated summaries in Google Docs. Now we're excited to take the
          next step and bring a limited set of trusted users a new set of
          features that make the process of writing even easier. In Gmail and
          Google Docs, you can simply type in a topic you'd like to write about,
          and a draft will instantly be created for you. From there, you can
          elaborate upon or abbreviate the message or adjust the tone to be more
          playful or professional — all in just a few clicks. We'll be rolling
          out these new experiences to testers in the coming weeks.
        </p>

        {/* Secondary Image */}
        <div className="rounded-lg overflow-hidden my-8">
          <img
            src={carcontrol}
            alt="VR visualization work"
            className="w-full h-96 object-cover"
          />
        </div>

        <p className="text-gray-700">
          We're excited by the potential of generative AI, and the opportunities
          it will unlock — from helping people express themselves creatively, to
          helping developers build brand new types of applications, to
          transforming how businesses and governments engage their customers and
          constituents.
        </p>
      </div>
    </article>
  );
}

export default BlogDetails;
