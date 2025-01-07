import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CallToAction from '../component/CallToAction.jsx';
import PostCard from '../component/PostCard.jsx';
import { FaPlus } from 'react-icons/fa';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts by search query
  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-all duration-500">
      <header>
        <div className="max-w-6xl mx-auto relative">
          {/* Floating Action Button */}
          <button
            className="fixed bottom-10 right-10 bg-gradient-to-br from-teal-500 to-green-400 p-4 rounded-full shadow-lg hover:animate-bounce"
            title="Create New Post"
          >
            <Link to="/create-post">
              <FaPlus size={24} color="white" />
            </Link>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Intro Section */}
        <section className="mb-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Discover Amazing Articles
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore tutorials, guides, and insights on web development,
            programming, and software engineering.
          </p>
        </section>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by title or category..."
            className="border border-gray-300 rounded-lg p-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white transition-all"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>

        {/* Recent Posts */}
        <section className="mb-6 animate-fadeInUp">
          <h3 className="text-3xl font-bold text-center mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Recent Posts'}
          </h3>
          {loading ? (
            <div className="text-center text-gray-600">Loading...</div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No posts found.</div>
          )}
        </section>

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`py-1 px-3 rounded-lg ${
                  index + 1 === currentPage
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>

      {/* Call to Action */}
      <footer className="p-6 bg-amber-100 dark:bg-gray-800">
        <CallToAction />
      </footer>
    </div>
  );
}