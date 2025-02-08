import React, { useEffect, useState } from "react";
import { PlusCircle as CirclePlus, Upload, X } from "lucide-react";
import useBloge from "../hooks/useBloge";

function BlogPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null); // Store the file object
  const [imagePreview, setImagePreview] = useState(null); // Store the preview URL
  const [category, setCategory] = useState("Technology");
  const [author, setAuthor] = useState("");

  const { BlogePost } = useBloge();

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("category", category);
    formData.append("author", author);
    if (imageFile) {
      formData.append("image", imageFile); // Append the file object
    }
    BlogePost(title, description, category, date, imageFile, author);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file); // Store the file object
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL
    } else {
      console.log("Please upload an image file.");
    }
  };
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

  return (
    <div className="min-h-screen bg-gradient-to-br mt-16 from-purple-100 to-indigo-200 p-4 sm:p-6 md:min-h-full xl:min-h-screen flex flex-col md:flex-row items-start justify-center gap-6">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-700">
          Create New Blog Post
        </h1>

        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Category Select */}
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
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Description Textarea */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
            required
          />
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Author Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image
          </label>
          <div
            className={
              "relative group rounded-lg transition-all duration-300 ease-in-out"
            }
          >
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <label
                      htmlFor="image"
                      className="cursor-pointer bg-white text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50"
                    >
                      <Upload className="h-4 w-4" />
                      Change Image
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center h-48 sm:h-64 cursor-pointer p-4"
              >
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-center text-gray-500">
                  <span className="font-medium text-indigo-600">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </label>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center transition-colors"
        >
          <CirclePlus className="h-5 w-5 mr-2" />
          Post Blog
        </button>
      </form>

      {/* Preview Section */}
      <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-700">
          Preview
        </h2>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">
            {title || "Your Title Here"}
          </h3>
          <p className="text-gray-600 mb-2">
            {description || "Your description will appear here..."}
          </p>
          <p className="text-sm text-gray-500">{date || "Select a date"}</p>
          <p className="text-gray-600 mb-2">Category: {category}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
