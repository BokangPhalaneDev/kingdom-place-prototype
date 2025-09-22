import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const feather = require('feather-icons');
      feather.replace();
      
      const menuButton = document.querySelector('.mobile-menu-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Kingdom Place Guesthouse - Luxury Accommodation in Rustenburg</title>
        <meta name="description" content="Experience luxury at Kingdom Place Guesthouse in Rustenburg, South Africa. Book your stay now for premium comfort and hospitality." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: `
        <nav class="bg-white shadow-lg fixed w-full z-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
              <div class="flex items-center">
                <a href="/" class="flex-shrink-0 flex items-center">
                  <img class="h-10 w-auto" src="http://static.photos/minimal/200x200/1" alt="Kingdom Place Logo">
                  <span class="ml-2 text-xl font-bold text-indigo-600">Kingdom Place Guesthouse</span>
                </a>
              </div>
              <div class="hidden md:flex items-center space-x-8">
                <a href="/" class="text-indigo-600 hover:text-indigo-800 px-3 py-2 font-medium">Home</a>
                <a href="/rooms" class="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">Rooms</a>
                <a href="/about" class="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">About</a>
                <a href="/contact" class="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">Contact</a>
                <a href="/faq" class="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">FAQ</a>
                <a href="/booking" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Book Now</a>
              </div>
              <div class="md:hidden flex items-center">
                <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none">
                  <i data-feather="menu"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div class="mobile-menu hidden md:hidden fixed inset-0 z-40 bg-white pt-16">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" class="block px-3 py-2 text-base font-medium text-indigo-600">Home</a>
            <a href="/rooms" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Rooms</a>
            <a href="/about" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">About</a>
            <a href="/contact" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Contact</a>
            <a href="/faq" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">FAQ</a>
            <a href="/booking" class="block px-3 py-2 text-base font-medium text-white bg-indigo-600 rounded-md">Book Now</a>
          </div>
        </div>

        <div id="hero" class="hero-bg min-h-screen flex items-center justify-center text-white pt-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Luxury Accommodation in Rustenburg</h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience premium comfort and hospitality at Kingdom Place Guesthouse
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/booking" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-md font-medium transition duration-300">
                Book Now
              </a>
              <a href="/rooms" class="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-md font-medium transition duration-300">
                Explore Rooms
              </a>
            </div>
          </div>
        </div>

        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Featured Rooms</h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">Comfortable accommodations designed for your relaxation</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white rounded-lg overflow-hidden shadow-md room-card transition duration-300">
                <img src="http://static.photos/hotel/640x360/1" alt="Deluxe Room" class="w-full h-64 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Deluxe Room</h3>
                  <p class="text-gray-600 mb-4">Spacious room with king-size bed and modern amenities</p>
                  <div class="flex justify-between items-center">
                    <span class="text-indigo-600 font-bold">R1,200/night</span>
                    <a href="/room-deluxe" class="text-indigo-600 hover:text-indigo-800 font-medium">View Details</a>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg overflow-hidden shadow-md room-card transition duration-300">
                <img src="http://static.photos/hotel/640x360/2" alt="Executive Suite" class="w-full h-64 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Executive Suite</h3>
                  <p class="text-gray-600 mb-4">Luxurious suite with separate living area and premium features</p>
                  <div class="flex justify-between items-center">
                    <span class="text-indigo-600 font-bold">R1,800/night</span>
                    <a href="/room-executive" class="text-indigo-600 hover:text-indigo-800 font-medium">View Details</a>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg overflow-hidden shadow-md room-card transition duration-300">
                <img src="http://static.photos/hotel/640x360/3" alt="Family Room" class="w-full h-64 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">Family Room</h3>
                  <p class="text-gray-600 mb-4">Perfect for families with children, featuring extra space</p>
                  <div class="flex justify-between items-center">
                    <span class="text-indigo-600 font-bold">R2,000/night</span>
                    <a href="/room-family" class="text-indigo-600 hover:text-indigo-800 font-medium">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a href="/rooms" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300">
                View All Rooms
                <i data-feather="arrow-right" class="ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        <footer class="bg-gray-900 text-white py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">Kingdom Place Guesthouse</h3>
                <p class="text-gray-400">Luxury accommodation in the heart of Rustenburg, offering premium comfort and exceptional service.</p>
                <div class="flex space-x-4 mt-4">
                  <a href="#" class="text-gray-400 hover:text-white"><i data-feather="facebook"></i></a>
                  <a href="#" class="text-gray-400 hover:text-white"><i data-feather="instagram"></i></a>
                  <a href="#" class="text-gray-400 hover:text-white"><i data-feather="twitter"></i></a>
                </div>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                  <li><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="/rooms" class="text-gray-400 hover:text-white">Rooms</a></li>
                  <li><a href="/about" class="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="/faq" class="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
                <ul class="space-y-2 text-gray-400">
                  <li class="flex items-start"><i data-feather="map-pin" class="w-4 h-4 mt-1 mr-2"></i><span>123 Kingdom Street, Rustenburg, 0300</span></li>
                  <li class="flex items-start"><i data-feather="phone" class="w-4 h-4 mt-1 mr-2"></i><span>+27 12 345 6789</span></li>
                  <li class="flex items-start"><i data-feather="mail" class="w-4 h-4 mt-1 mr-2"></i><span>info@kingdomplace.co.za</span></li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-4">Payment Methods</h3>
                <div class="flex flex-wrap gap-2">
                  <img src="https://via.placeholder.com/50x30?text=Visa" alt="Visa" class="h-8">
                  <img src="https://via.placeholder.com/50x30?text=MC" alt="Mastercard" class="h-8">
                  <img src="https://via.placeholder.com/50x30?text=PP" alt="PayPal" class="h-8">
                  <img src="https://via.placeholder.com/50x30?text=Zapper" alt="Zapper" class="h-8">
                  <img src="https://via.placeholder.com/50x30?text=EFT" alt="EFT" class="h-8">
                </div>
              </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm">&copy; 2023 Kingdom Place Guesthouse. All rights reserved.</p>
              <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" class="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="/terms" class="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                <a href="/sitemap" class="text-gray-400 hover:text-white text-sm">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
      ` }} />
    </div>
  );
}