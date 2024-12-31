import BlogGrid from './components/BlogGrid';
import { blogPosts } from './data/blogData';

export default function Blog() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Car Care Blog</h2>
          <p className="mt-4 text-xl text-gray-600">
            Tips, tricks, and insights for keeping your car in perfect condition
          </p>
        </div>
        <BlogGrid posts={blogPosts} />
      </div>
    </div>
  );
}