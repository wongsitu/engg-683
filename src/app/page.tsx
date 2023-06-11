import React from 'react';
import logo from './mpmfw.png';
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
              <h1 className="font-bold text-4xl md:text-6xl mb-4">Welcome to Oil & Gas Company</h1>
              <p className="text-gray-700 text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia faucibus posuere. Sed elementum nisi neque, et efficitur justo sagittis vitae.</p>
              <a href="#services" className="inline-block bg-black text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-gray-800">Learn More</a>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              {/* <img src={oilRigImage} alt="Oil Rig" className="w-full rounded-lg" /> */}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-sky-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <svg className="w-12 h-12 mb-4 text-black" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14 11h6v2h-6zM4 11h12v2H4zM14 5h6v2h-6zM4 5h6v2H4z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Exploration</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <svg className="w-12 h-12 mb-4 text-black" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 12h16v2H4zM4 18h16v2H4zM4 6h16v2H4z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Production</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <svg className="w-12 h-12 mb-4 text-black" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22 6h-4V4h-2v2h-4V4H8v2H4v12h16V6zm-2 10H4V8h16v8z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Refining</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10">About Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4">
              {/* <img src={teamImage} alt="Team" className="w-full rounded-lg mb-8" /> */}
            </div>
            <div className="md:w-1/2 px-4">
              <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eleifend mauris, vitae commodo nunc bibendum eget. Fusce tristique, magna nec mollis malesuada, mi nunc pellentesque nisl, sed congue turpis nisi non enim. In vel magna sem. Pellentesque viverra interdum turpis, at ultrices odio vehicula ut. Curabitur nec suscipit nisl, ac hendrerit lorem.</p>
              <p className="text-xl">Phasellus vitae purus ac libero faucibus efficitur vitae et erat. Mauris vitae felis cursus, cursus turpis non, cursus leo. Fusce sed sollicitudin est. Nunc eget tristique ligula, eget hendrerit magna. Aliquam ullamcorper purus id quam vulputate, non aliquam purus lobortis.</p>
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
