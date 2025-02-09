import { useNavigate } from "react-router-dom"; // You can also use 'useNavigate' if you're using React Router v6

function NotFound() {
  const navigate = useNavigate(); // useNavigate() if using React Router v6

  const handleGoHome = () => {
    navigate(-1); // Redirect to home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-400 via-yellow-500 to-pink-500 flex items-center justify-center py-10 px-4">
      <div className="text-center max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl font-medium text-gray-700">
          Oops! Page not found
        </h2>
        <p className="mt-4 text-gray-600">
          The page you're looking for doesn't exist. It might have been moved or
          deleted.
        </p>
        <div className="mt-8">
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Go Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
