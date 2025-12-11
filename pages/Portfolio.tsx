import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'AutoFile Pro',
    category: 'Automation',
    description: 'An automated document sorting system for a legal firm in Lahore, reducing filing time by 70%.',
    imageUrl: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: '2',
    title: 'RetailInventory Mate',
    category: 'Software Dev',
    description: 'A custom POS and inventory management system for a chain of grocery stores.',
    imageUrl: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: '3',
    title: 'HealthTrack App',
    category: 'App Dev',
    description: 'A patient management mobile application for private clinics allowing appointment scheduling and history tracking.',
    imageUrl: 'https://picsum.photos/600/400?random=12'
  },
  {
    id: '4',
    title: 'EduStream Platform',
    category: 'Web Platform',
    description: 'An online learning management system for a vocational training institute.',
    imageUrl: 'https://picsum.photos/600/400?random=13'
  },
  {
    id: '5',
    title: 'FinCorp Dashboard',
    category: 'Enterprise',
    description: 'A unified financial reporting dashboard for a large textile manufacturer.',
    imageUrl: 'https://picsum.photos/600/400?random=14'
  },
  {
    id: '6',
    title: 'LogisticGo',
    category: 'Mobile App',
    description: 'Driver tracking and route optimization app for a logistics company.',
    imageUrl: 'https://picsum.photos/600/400?random=15'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Portfolio</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            See how we've helped businesses transform their operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {project.category}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
