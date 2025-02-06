import React from "react";
import vrimage from "../../assets/vrglass.jfif";
import seabith from "../../assets/seabich.jfif";
import football from "../../assets/football.jfif";
import domore from "../../assets/domore.jfif";

function PopulerBlog() {
  const posts = [
    {
      id: 1,
      title:
        "How to make a Game look more attractive with New VR & AI Technology",
      category: "DEVELOPMENT",
      date: "18 March 2023",
      image: vrimage,
      excerpt:
        "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it's publishing research papers or creating tools and resources that enable others, we're committed to making AI accessible to everyone.",
      featured: true,
    },
    {
      id: 2,
      title: "8 Rules Of Travelling In Sea You Need To Know",
      category: "Travel",
      date: "15 March 2023",
      image: seabith,
      excerpt:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
      featured: false,
    },
    {
      id: 3,
      title: "How to build strong portfolio and get a Job in UI/UX",
      category: "DEVELOPMENT",
      date: "15 March 2023",
      image: domore,
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional throughputs from",
      featured: false,
    },
    {
      id: 4,
      title: "How to Be a Professional Footballer in 2023",
      category: "Sports",
      date: "18 March 2023",
      image: football,
      excerpt:
        "Originally from the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure proactive",
      featured: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Recent Post
        </h2>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          View All
        </button>
      </div>

      {/* Featured Post */}
      {posts
        .filter((post) => post.featured)
        .map((post) => (
          <div key={post.id} className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden">
              <div className="relative h-[300px] md:h-auto">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-purple-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors w-fit">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}

      {/* Regular Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts
          .filter((post) => !post.featured)
          .map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-purple-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Read More...
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PopulerBlog;
