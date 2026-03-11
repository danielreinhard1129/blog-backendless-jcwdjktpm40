import { useParams, Link } from "react-router";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { blogs } from "../data/blogs";
import Navbar from "../components/Navbar";

function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Blog Not Found
            </h1>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-yellow-500 hover:text-purple-600 font-semibold transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-yellow-500 hover:text-purple-600 font-semibold transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-6 space-x-6">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{blog.date}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                {blog.description}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>View More Blogs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
