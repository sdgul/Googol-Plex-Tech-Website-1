import React from 'react';
import { Monitor, FileText, Settings, Smartphone, Users, Globe } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'We build bespoke software tailored to your specific business processes, ensuring a perfect fit for your operational needs.',
    icon: Monitor,
  },
  {
    title: 'Automation Solutions',
    description: 'From email automation to complex data processing pipelines, we remove manual bottlenecks from your workflow.',
    icon: Settings,
  },
  {
    title: 'Filing & Document Management',
    description: 'Digitize your paperwork. Our systems categorize, store, and secure your files, making retrieval instant and effortless.',
    icon: FileText,
  },
  {
    title: 'Mobile App Development',
    description: 'Extend your business to mobile. We create responsive, high-performance apps for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'Enterprise ERP Systems',
    description: 'Scalable solutions for large firms to manage resources, finance, and HR in one unified dashboard.',
    icon: Globe,
  },
  {
    title: 'IT Consultancy',
    description: 'Not sure where to start? Our experts analyze your current infrastructure and recommend the best tech strategy.',
    icon: Users,
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Tech Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Whether you are a single person startup or a multinational firm, we have the tools to upgrade your business.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
