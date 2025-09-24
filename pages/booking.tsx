import Head from 'next/head';
import { useEffect } from 'react';

export default function Booking() {
  useEffect(() => {
    // Initialize feather icons
    if (typeof window !== 'undefined') {
     
      
      // Mobile menu toggle
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
        <title>Book Your Stay | Kingdom Place Guesthouse</title>
        <meta name="description" content="Book your stay at Kingdom Place Guesthouse in Rustenburg, South Africa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: `
        <!-- Navigation -->
        <nav class="bg-white shadow-lg fixed w-full z-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
              <div class="flex items-center">
                <a href="/" class="flex-shrink-0 flex items-center">
                  <img class="h-10 w-auto" src="https://picsum.photos/seed/kp-logo/200/200" alt="Kingdom Place Logo">
                  <span class="ml-2 text-xl font-bold text-indigo-600">Kingdom Place Guesthouse</span>
                </a>
              </div>
              <div class="hidden md:flex items-center space-x-8">
                <a href="/" class="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">Home</a>
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

        <!-- Mobile Menu -->
        <div class="mobile-menu hidden md:hidden fixed inset-0 z-40 bg-white pt-16">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/rooms" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Rooms</a>
            <a href="/about" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">About</a>
            <a href="/contact" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Contact</a>
            <a href="/faq" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">FAQ</a>
            <a href="/booking" class="block px-3 py-2 text-base font-medium text-white bg-indigo-600 rounded-md">Book Now</a>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="pt-16 min-h-screen bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="text-center mb-12">
              <h1 class="text-3xl font-bold text-gray-900 mb-4">Book Your Stay</h1>
              <p class="text-lg text-gray-600">Complete your reservation in just a few steps - no account needed!</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2">
                <div class="bg-white rounded-lg shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-6">Booking Details</h2>
                  
                  <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label for="check-in" class="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                        <input type="date" id="check-in" name="check-in" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      </div>
                      <div>
                        <label for="check-out" class="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                        <input type="date" id="check-out" name="check-out" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      </div>
                    </div>
                    
                    <div>
                      <label for="room-type" class="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                      <select id="room-type" name="room-type" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="">Select a room type</option>
                        <option value="deluxe">Deluxe Room - R1,200/night</option>
                        <option value="executive">Executive Suite - R1,800/night</option>
                        <option value="family">Family Room - R2,000/night</option>
                      </select>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                        <select id="guests" name="guests" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                        </select>
                      </div>
                      <div>
                        <label for="children" class="block text-sm font-medium text-gray-700 mb-1">Children (under 12)</label>
                        <select id="children" name="children" class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                          <option value="0">0 Children</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Children</option>
                        </select>
                      </div>
                    </div>
                    
                    <h3 class="text-lg font-medium mt-8 mb-4">Guest Information</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" id="first-name" name="first-name" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      </div>
                      <div>
                        <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" id="last-name" name="last-name" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" name="email" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      </div>
                      <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      </div>
                    </div>
                    
                    <div>
                      <label for="special-requests" class="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                      <textarea id="special-requests" name="special-requests" rows="3" class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                    
                    <div class="pt-6">
                      <button type="submit" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 font-medium">
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div>
                <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 class="text-xl font-semibold mb-4">Booking Summary</h2>
                  <div class="space-y-4">
                    <div class="flex justify-between">
                      <span class="text-gray-600">Room:</span>
                      <span class="font-medium">-</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Nights:</span>
                      <span class="font-medium">-</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Guests:</span>
                      <span class="font-medium">-</span>
                    </div>
                    <div class="border-t pt-4 mt-4">
                      <div class="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span>-</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-6 p-4 bg-indigo-50 rounded-lg">
                    <h3 class="font-medium text-indigo-800 mb-2">Why book directly with us?</h3>
                    <ul class="text-sm text-indigo-600 space-y-1">
                      <li>✓ Best price guarantee</li>
                      <li>✓ No booking fees</li>
                      <li>✓ Instant confirmation</li>
                      <li>✓ Flexible cancellation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

           <div style="position: fixed; bottom: 20px; right: 20px; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15); z-index: 9999;">
          <h4 style="margin: 0 0 6px 0; font-size: 12px; color: #4f46e5;">Quick Nav</h4>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <a href="/" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Home</a>
            <a href="/booking" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Booking</a>
            <a href="/login" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Login</a>
            <a href="/admin" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Admin</a>
          </div>
        </div>
        
        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">Kingdom Place Guesthouse</h3>
                <p class="text-gray-400">
                  Luxury accommodation in the heart of Rustenburg, offering premium comfort and exceptional service.
                </p>
                <div class="flex space-x-4 mt-4">
                  <a href="#" class="text-gray-400 hover:text-white">
                    <i data-feather="facebook"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                    <i data-feather="instagram"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                    <i data-feather="twitter"></i>
                  </a>
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
                  <li class="flex items-start">
                    <i data-feather="map-pin" class="w-4 h-4 mt-1 mr-2"></i>
                    <span>123 Kingdom Street, Rustenburg, 0300</span>
                  </li>
                  <li class="flex items-start">
                    <i data-feather="phone" class="w-4 h-4 mt-1 mr-2"></i>
                    <span>+27 12 345 6789</span>
                  </li>
                  <li class="flex items-start">
                    <i data-feather="mail" class="w-4 h-4 mt-1 mr-2"></i>
                    <span>info@kingdomplace.co.za</span>
                  </li>
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
                <div class="mt-4">
                  <img src="https://via.placeholder.com/150x50?text=Secure+Payment" alt="Secure Payment" class="h-10">
                </div>
              </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm">
                &copy; 2023 Kingdom Place Guesthouse. All rights reserved.
              </p>
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