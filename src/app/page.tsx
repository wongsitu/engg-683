import React from 'react';
import logo from './images/mpmfw.png';
import hero from './images/hero.png';

import digitalTwins from './images/digital-twins.png';
import cloudSolutions from './images/cloud-solutions.png';
import realTimeData from './images/real-time-data.png';
import artificialIntelligence from './images/artificial-intelligence.png';
import sensors from './images/sensors.png';
import augmentedReality from './images/augmented-reality.png';

import './globals.css';
import Image from 'next/image';

function App() {
  return (
    <div className="bg-sky-900">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between flex-wrap py-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
              <Image src={logo} alt="Company Logo" className="h-12 w-auto" />
              <span className="font-semibold text-xl tracking-tight ml-2">Oil & Gas Company</span>
            </div>
            <div className="block lg:hidden">
              <button className="navbar-burger flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
                </svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                  Services
                </a>
                <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                  About Us
                </a>
                <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500">
                  Contact
                </a>
              </div>
              <div>
                <a href="#newsletter" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0">
                  Subscribe to Newsletter
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <h1 className="font-bold text-4xl md:text-6xl mb-4 text-gray-700">Welcome to Oil & Gas Company</h1>
              <p className="text-gray-700 text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia faucibus posuere. Sed elementum nisi neque, et efficitur justo sagittis vitae.</p>
              <a href="#services" className="inline-block bg-black text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-gray-800">Learn More</a>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <Image src={hero} alt="Oil Rig" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-sky-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10">Our Services</h2>
          <div className="columns-1 md:columns-2 lg:columns-3">
            <div className="px-4 mb-8 break-inside-avoid-column">
              <div className="bg-white p-6 rounded-lg shadow">
                <Image src={digitalTwins} alt="Digital twins" className="w-full rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-700">Digital twins</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="px-4 mb-8 break-inside-avoid-column">
              <div className="bg-white p-6 rounded-lg shadow">
                <Image src={cloudSolutions} alt="Cloud Solutions" className="w-full rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-700">Cloud integrated solutions</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="px-4 mb-8 break-inside-avoid-column">
              <div className="bg-white p-6 rounded-lg shadow">
                <Image src={artificialIntelligence} alt="AI-driven assistance" className="w-full rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-700">AI-driven assistance</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="px-4 mb-8 break-inside-avoid-column">
              <div className="bg-white p-6 rounded-lg shadow">
                <Image src={realTimeData} alt="Real Time data" className="w-full rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-700">Real-time data</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="px-4 mb-8 break-inside-avoid-column">
              <div className="bg-white p-6 rounded-lg shadow">
                <Image src={sensors} alt="E2E sensor installation" className="w-full rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-700">E2E sensor monitoring</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="px-4 mb-8 break-inside-avoid-column">
              <div className="bg-white p-6 rounded-lg shadow">
                <Image src={augmentedReality} alt="E2E sensor installation" className="w-full rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-700">Augmented reality</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-gray-700">About Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4">
              {/* <img src={teamImage} alt="Team" className="w-full rounded-lg mb-8" /> */}
            </div>
            <div className="md:w-1/2 px-4">
              <p className="text-xl mb-8 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eleifend mauris, vitae commodo nunc bibendum eget. Fusce tristique, magna nec mollis malesuada, mi nunc pellentesque nisl, sed congue turpis nisi non enim. In vel magna sem. Pellentesque viverra interdum turpis, at ultrices odio vehicula ut. Curabitur nec suscipit nisl, ac hendrerit lorem.</p>
              <p className="text-xl text-gray-700">Phasellus vitae purus ac libero faucibus efficitur vitae et erat. Mauris vitae felis cursus, cursus turpis non, cursus leo. Fusce sed sollicitudin est. Nunc eget tristique ligula, eget hendrerit magna. Aliquam ullamcorper purus id quam vulputate, non aliquam purus lobortis.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-sky-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4 mb-8">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full py-3 px-4 rounded-lg border border-gray-300" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full py-3 px-4 rounded-lg border border-gray-300" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="message">Message</label>
                  <textarea id="message" className="w-full py-3 px-4 rounded-lg border border-gray-300 h-32 resize-none" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-black text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-gray-800">Send Message</button>
              </form>
            </div>
            <div className="md:w-1/2 px-4">
              <p className="text-xl mb-4">123 Main Street</p>
              <p className="text-xl mb-4">City, State</p>
              <p className="text-xl mb-4">Country</p>
              <p className="text-xl mb-4">Phone: (123) 456-7890</p>
              <p className="text-xl">Email: info@company.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <span className="text-white">© 2023 Oil & Gas Company. All rights reserved.</span>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <a href="#privacy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
