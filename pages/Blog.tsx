import React from 'react';
import { BlogPost } from '../types';
import { User, ArrowRight, Tag } from 'lucide-react';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Ways Automation is Reshaping the Corporate Landscape',
    excerpt: "In today's fast-paced digital economy, automation isn't just a luxury—it's a necessity. From streamlined data entry to intelligent filing systems, discover how businesses are reclaiming their time.",
    date: 'Oct 12, 2023',
    author: 'Ali Raza',
    category: 'Industry Insights',
    imageUrl: 'https://picsum.photos/800/600?random=20'
  },
  {
    id: '2',
    title: 'Googol Plex Tech: A Year in Review',
    excerpt: "We look back at our journey over the past year, celebrating the milestones we've achieved with our partners and looking forward to the innovative solutions on our roadmap.",
    date: 'Dec 28, 2023',
    author: 'Sarah Ahmed',
    category: 'Company News',
    imageUrl: 'https://picsum.photos/800/600?random=21'
  },
  {
    id: '3',
    title: 'Understanding the Basics of Digital Filing Management',
    excerpt: "Say goodbye to physical cabinets. Learn the fundamental strategies for organizing your digital assets securely and efficiently using modern software solutions.",
    date: 'Jan 15, 2024',
    author: 'Ayesha Khan',
    category: 'Productivity',
    imageUrl: 'https://picsum.photos/800/600?random=22'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Insights & News</h1>
             <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
               Latest updates, industry trends, and tips on automation from the Googol Plex Tech team.
             </p>
           </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center text-sm font-medium text-blue-600 mb-2">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </div>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                   <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{post.author}</span>
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                           <User className="h-6 w-6 text-gray-500"/>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.date}>{post.date}</time>
                        </div>
                      </div>
                   </div>
                   <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center cursor-pointer bg-transparent border-none">
                     Read <ArrowRight className="ml-1 h-4 w-4"/>
                   </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
