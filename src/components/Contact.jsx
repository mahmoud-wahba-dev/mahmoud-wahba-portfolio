import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through the form or my social media.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:mahmoud.wahba.dev@gmail.com" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} className="mr-4" />
                mahmoud.wahba.dev@gmail.com
              </a>
              
              <a 
                href="https://github.com/mahmoud-wahba-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={20} className="mr-4" />
                github.com/mahmoud-wahba-dev
              </a>
              
              <a 
                href="https://linkedin.com/in/mahmoud--wahba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} className="mr-4" />
                linkedin.com/in/mahmoud--wahba
              </a>

              <div className="flex items-center text-gray-600">
                <MapPin size={20} className="mr-4" />
                Al Hay Al Asher, Nasr City, Cairo
              </div>

              <div className="flex items-center text-gray-600">
                <Phone size={20} className="mr-4" />
                0120-707-5722
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}