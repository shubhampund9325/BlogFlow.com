import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all hover:shadow-lg hover:shadow-teal-300'>
      {/* Image Section */}
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </Link>

      {/* Post Details */}
      <div className='p-4 flex flex-col gap-3'>
        {/* Title */}
        <p className='text-lg font-semibold line-clamp-2 hover:text-teal-500 transition-colors'>
          {post.title}
        </p>

        {/* Category */}
        <span className='italic text-sm text-gray-500'>{post.category}</span>

        {/* Read More Button */}
        <Link
          to={`/post/${post.slug}`}
          className='absolute bottom-4 left-0 right-0 mx-3 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}