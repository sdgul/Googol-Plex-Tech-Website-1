import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    role: 'Managing Director',
    bio: 'Sarah brings over 15 years of experience in software engineering and strategic management. She leads the vision of Googol Plex Tech.',
    imageUrl: 'https://picsum.photos/300/300?random=3'
  },
  {
    id: '2',
    name: 'Ali Raza',
    role: 'Technical Director',
    bio: 'Ali is an expert in cloud architecture and automation. He ensures our solutions are scalable, secure, and cutting-edge.',
    imageUrl: 'https://picsum.photos/300/300?random=4'
  },
  {
    id: '3',
    name: 'Ayesha Khan',
    role: 'Lead Developer',
    bio: 'Ayesha specializes in full-stack development and leads our core engineering team to deliver robust applications.',
    imageUrl: 'https://picsum.photos/300/300?random=5'
  },
  {
    id: '4',
    name: 'Bilal Sheikh',
    role: 'Product Designer',
    bio: 'Bilal crafts intuitive user experiences, ensuring that our complex automation tools are accessible to everyone.',
    imageUrl: 'https://picsum.photos/300/300?random=6'
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-blue-600 py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100">
               We are a team of passionate innovators dedicated to simplifying work through technology.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
           <p className="mt-8 text-xl text-gray-500 leading-8">
             Founded in Lahore, <strong>Googol Plex Tech</strong> was born from a simple idea: technology should work for you, not the other way around. 
             We saw businesses struggling with piles of paperwork and repetitive data entry. We decided to build the solution. 
             Today, we serve clients globally, providing software that automates the mundane so you can focus on the extraordinary.
           </p>
        </div>
        
        <div className="mt-20">
           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-12">Meet Our Leadership</h2>
           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.id} className="group">
                   <div className="relative rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1 mb-4">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                   <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                   <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
