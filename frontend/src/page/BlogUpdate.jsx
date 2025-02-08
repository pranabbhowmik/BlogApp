import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useUpdate from "../hooks/UseUpdate.js";

function BlogUpdate() {
  const { id } = useParams();
  const { blogData, loading, error, updateBlog } = useUpdate(id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState("Technology");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (blogData) {
      setTitle(blogData.title);
      setDescription(blogData.description);
      setDate(blogData.date);
      setCategory(blogData.category);
      setAuthor(blogData.author);
      setImagePreview(blogData.image);
    }
  }, [blogData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { title, description, date, category, author };
    if (imageFile) updatedData.image = imageFile;
    await updateBlog(id, updatedData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-purple-100 to-indigo-200 p-4 sm:p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-700">
          {id ? "Edit Blog Post" : "Create New Blog Post"}
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default BlogUpdate;
