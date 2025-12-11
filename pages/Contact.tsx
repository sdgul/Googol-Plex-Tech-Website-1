import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Bot } from 'lucide-react';
import { getAutomationAdvice } from '../services/geminiService';

const Contact: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  // AI Advisor State
  const [businessType, setBusinessType] = useState('');
  const [problem, setProblem] = useState('');
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleAiConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !problem) return;
    
    setLoadingAi(true);
    const advice = await getAutomationAdvice(businessType, problem);
    setAiAdvice(advice);
    setLoadingAi(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-gray-400">We'd love to hear from you. Visit us or send a message.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Address</p>
                    <p className="text-gray-500">Hafeez Center, Main Boulevard, Gulberg III, Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Phone</p>
                    <p className="text-gray-500">+92 300 1234567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Email</p>
                    <p className="text-gray-500">info@googolplex.tech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-80">
              <iframe 
                title="Hafeez Center Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.586826693898!2d74.3436063151433!3d31.50970698137356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a5b5030d3%3A0x633d987627447d21!2sHafeez%20Center!5e0!3m2!1sen!2s!4v1646216484631!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: AI Consultant & Contact Form */}
          <div className="space-y-8">
            
            {/* AI Advisor Feature - Highlighting Tech Capabilities */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="h-6 w-6 text-yellow-400" />
                <h3 className="text-xl font-bold">Ask Our AI Consultant</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Not sure what you need? Tell our AI about your business, and it will suggest an automation strategy.
              </p>
              
              <form onSubmit={handleAiConsult} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-blue-200 tracking-wider mb-1">Business Type</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Law Firm, Bakery, Logistics"
                    className="w-full px-3 py-2 rounded bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-blue-200 tracking-wider mb-1">Current Challenge</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Too much paperwork, Lost inventory"
                    className="w-full px-3 py-2 rounded bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loadingAi}
                  className="w-full bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition flex justify-center items-center"
                >
                  {loadingAi ? <Loader2 className="animate-spin h-5 w-5" /> : 'Get Advice'}
                </button>
              </form>

              {aiAdvice && (
                <div className="mt-4 p-4 bg-blue-800 rounded border border-blue-700 animate-fadeIn">
                  <h4 className="font-semibold text-yellow-400 text-sm mb-1">Recommendation:</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">{aiAdvice}</p>
                </div>
              )}
            </div>

            {/* Standard Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Send us a message</h3>
              {formStatus === 'success' ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-md">
                  Thank you! Your message has been sent. We will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
