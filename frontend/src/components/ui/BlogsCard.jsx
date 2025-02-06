import React from "react";
import singer from "../../assets/singer.jfif";
import train from "../../assets/train.jfif";
import laptop from "../../assets/laptop.jfif";
import jump from "../../assets/jump.jfif";
import calling from "../../assets/callwithsomeone.jfif";
import chocklate from "../../assets/choclate.jfif";

const posts = [
  {
    id: 1,
    title: "Train Or Bus Journey?Which one suits?",
    excerpt:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
    category: "Travel",
    date: "15 March 2023",
    image: train,
  },
  {
    id: 2,
    title: "Best Website to research for your next project",
    excerpt:
      "Expedita on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    category: "DEVELOPMENT",
    date: "15 March 2023",
    image: laptop,
  },
  {
    id: 3,
    title: "How to Be a Dancer in 2023 with proper skills?",
    excerpt:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment survival strategies to ensure proactive",
    category: "Sports",
    date: "15 March 2023",
    image: jump,
  },
  {
    id: 4,
    title: "Who is the best singer on chart? Know him?",
    excerpt:
      "Get by Billboard which ranks the all time greatest artists based on their performance on the weekly Billboard Hot 100 and",
    category: "Travel",
    date: "15 March 2023",
    image: singer,
  },
  {
    id: 5,
    title: "How to start export import business from home?",
    excerpt:
      "Expedita on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    category: "DEVELOPMENT",
    date: "15 March 2023",
    image: calling,
  },
  {
    id: 6,
    title: "Make some drinks with chocolates chocolates and milk",
    excerpt:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment survival strategies to ensure proactive",
    category: "Sports",
    date: "15 March 2023",
    image: chocklate,
  },
];

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-purple-600">{post.category}</span>
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {post.excerpt}
        </p>
        <button className="text-purple-600 text-sm hover:text-purple-700">
          Read More...
        </button>
      </div>
    </div>
  );
};

function BlogCard() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Post</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default BlogCard;
