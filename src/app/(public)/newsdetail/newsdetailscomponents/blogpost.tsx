'use client';



interface BlogPost {
  id: string;
  imageUrl: string;
  source: string;
  title: string;
  date: string;
}


const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    imageUrl: '/public/assets/images/newsimg1.png',
    source: 'National Accord',
    title: 'Hold us responsible if FG fails to deliver roads, other projects due to procurement lapses',
    date: 'May 12, 2025',
  },
  {
    id: '2',
    imageUrl: '/public/assets/images/newsimg2.png',
    source: 'PeoplesDaily',
    title: 'BPP, PCNGI partner on clean energy transition',
    date: 'May 08, 2025',
  },
  {
    id: '3',
    imageUrl: '/public/assets/images/newsimg2.png',
    source: 'PromptNews',
    title: "BPP: Adedokun Adebowale's silent revolution to reform procurement",
    date: 'May 07, 2025',
  },
];


const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full w-80 sm:w-72 md:w-80 lg:w-96 ">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/300x200/F0F0F0/333333?text=Image+Not+Found';
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-6 plus">
        <div>
          <p className="text-gray-500 text-[14px] mb-2">{post.source}</p>
          <h3 className="text-[18px] font-semibold text-gray-800 mb-4 line-clamp-3 leading-[30px]">
            {post.title}
          </h3>
        </div>
        <p className="text-gray-500 text-sm mt-2">{post.date}</p>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 plus">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-[600] text-gray-900">Similar Blog</h2>
          <a
            href="#"
            className="text-green-700 hover:text-blue-800 text-sm font-semibold whitespace-nowrap no-underline"
          >
            VIEW ALL
          </a>
        </div>

        {/* Blog Cards */}
        <div className="flex space-x-6 pb-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {mockBlogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
