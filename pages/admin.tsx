import Head from 'next/head';
import { useEffect } from 'react';

export default function Admin() {
  useEffect(() => {
    // Initialize feather icons and functionality
    if (typeof window !== 'undefined') {
      const feather = require('feather-icons');
      feather.replace();
      
      // Sidebar toggle
      const toggleSidebar = document.getElementById('toggleSidebar');
      const sidebar = document.getElementById('sidebar');
      
      if (toggleSidebar && sidebar) {
        toggleSidebar.addEventListener('click', () => {
          sidebar.classList.toggle('collapsed');
        });
      }
      
      // User menu toggle
      const userMenuButton = document.getElementById('userMenuButton');
      const userMenu = document.getElementById('userMenu');
      
      if (userMenuButton && userMenu) {
        userMenuButton.addEventListener('click', () => {
          userMenu.classList.toggle('hidden');
        });
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Admin Dashboard | Kingdom Place Guesthouse</title>
        <meta name="description" content="Admin dashboard for managing Kingdom Place Guesthouse website content and bookings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: `
        <div class="flex h-screen">
          <!-- Sidebar -->
          <div class="sidebar bg-indigo-800 text-white w-64 fixed h-full overflow-y-auto" id="sidebar">
            <div class="p-4 flex items-center justify-between border-b border-indigo-700">
              <div class="flex items-center">
                <img src="http://static.photos/minimal/200x200/1" alt="Logo" class="h-10 w-10 rounded">
                <span class="logo-text ml-2 text-xl font-bold">Kingdom Place</span>
              </div>
              <button id="toggleSidebar" class="text-white focus:outline-none">
                <i data-feather="chevron-left"></i>
              </button>
            </div>
            
            <div class="p-4">
              <div class="flex items-center mb-6">
                <img src="http://static.photos/people/200x200/10" alt="Admin" class="h-10 w-10 rounded-full">
                <div class="ml-3 sidebar-text">
                  <p class="font-medium">Admin User</p>
                  <p class="text-indigo-300 text-sm">Super Admin</p>
                </div>
              </div>
              
              <nav class="mt-8">
                <div class="mb-4 sidebar-text">
                  <p class="text-indigo-400 uppercase text-xs font-bold tracking-wider">Main</p>
                </div>
                
                <a href="#" class="flex items-center py-3 px-4 bg-indigo-700 rounded-lg text-white">
                  <i data-feather="home" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Dashboard</span>
                </a>
                
                <div class="mb-4 mt-8 sidebar-text">
                  <p class="text-indigo-400 uppercase text-xs font-bold tracking-wider">Management</p>
                </div>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white">
                  <i data-feather="calendar" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Bookings</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="users" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Guests</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="dollar-sign" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Payments</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="star" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Reviews</span>
                </a>
                
                <div class="mb-4 mt-8 sidebar-text">
                  <p class="text-indigo-400 uppercase text-xs font-bold tracking-wider">Content</p>
                </div>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white">
                  <i data-feather="image" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Rooms</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="sliders" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Amenities</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="file-text" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Pages</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="settings" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Settings</span>
                </a>
                
                <div class="mb-4 mt-8 sidebar-text">
                  <p class="text-indigo-400 uppercase text-xs font-bold tracking-wider">Admin</p>
                </div>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white">
                  <i data-feather="user" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Staff</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="shield" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Security</span>
                </a>
                
                <a href="#" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white mt-2">
                  <i data-feather="bar-chart-2" class="w-5 h-5"></i>
                  <span class="sidebar-text ml-3">Reports</span>
                </a>
                
                <div class="mt-8 pt-4 border-t border-indigo-700">
                  <a href="/login" class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded-lg text-white">
                    <i data-feather="log-out" class="w-5 h-5"></i>
                    <span class="sidebar-text ml-3">Logout</span>
                  </a>
                </div>

          
              </nav>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="main-content flex-1 ml-64 overflow-y-auto" id="mainContent">
            <!-- Top Navigation -->
            <header class="bg-white shadow-sm">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h1 class="text-xl font-semibold text-gray-900">Dashboard</h1>
                
                <div class="flex items-center space-x-4">
                  <button class="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
                    <i data-feather="bell"></i>
                  </button>
                  
                  <div class="relative">
                    <button class="flex items-center space-x-2 focus:outline-none" id="userMenuButton">
                      <img src="http://static.photos/people/200x200/10" alt="Admin" class="h-8 w-8 rounded-full">
                      <span class="hidden md:inline">Admin User</span>
                      <i data-feather="chevron-down" class="w-4 h-4"></i>
                    </button>
                    
                    <div class="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50" id="userMenu">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                      <a href="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            
            <!-- Dashboard Content -->
            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <!-- Stats Cards -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow p-6">
                  <div class="flex items-center">
                    <div class="p-3 rounded-full bg-indigo-100 text-indigo-600">
                      <i data-feather="calendar" class="w-6 h-6"></i>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-500">Today's Bookings</p>
                      <p class="text-2xl font-semibold text-gray-900">12</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                  <div class="flex items-center">
                    <div class="p-3 rounded-full bg-green-100 text-green-600">
                      <i data-feather="dollar-sign" class="w-6 h-6"></i>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-500">Today's Revenue</p>
                      <p class="text-2xl font-semibold text-gray-900">R24,500</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                  <div class="flex items-center">
                    <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                      <i data-feather="users" class="w-6 h-6"></i>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-500">Current Guests</p>
                      <p class="text-2xl font-semibold text-gray-900">8</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-white rounded-lg shadow p-6">
                  <div class="flex items-center">
                    <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                      <i data-feather="star" class="w-6 h-6"></i>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-500">New Reviews</p>
                      <p class="text-2xl font-semibold text-gray-900">3</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Recent Bookings -->
              <div class="bg-white rounded-lg shadow overflow-hidden mb-8">
                <div class="px-6 py-4 border-b border-gray-200">
                  <h2 class="text-lg font-semibold text-gray-900">Recent Bookings</h2>
                </div>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#KP-1001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Smith</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Deluxe Room</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15-18 Nov 2023</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#KP-1002</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sarah Johnson</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Executive Suite</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20-25 Nov 2023</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#KP-1003</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Michael Brown</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Family Room</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-12 Dec 2023</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Paid</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#KP-1004</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Thembi Nkosi</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Deluxe Room</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05-08 Jan 2024</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="px-6 py-4 border-t border-gray-200">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900 font-medium">View all bookings</a>
                </div>
              </div>
              
              <!-- Recent Reviews -->
              <div class="bg-white rounded-lg shadow overflow-hidden">
                <div class="px-6 py-4 border-b border-gray-200">
                  <h2 class="text-lg font-semibold text-gray-900">Recent Reviews</h2>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="p-6">
                    <div class="flex items-start">
                      <img src="http://static.photos/people/200x200/1" alt="Guest" class="h-10 w-10 rounded-full">
                      <div class="ml-4">
                        <div class="flex items-center">
                          <h4 class="text-sm font-semibold">Sarah Johnson</h4>
                          <div class="flex ml-2 text-yellow-400">
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                          </div>
                        </div>
                        <p class="mt-1 text-sm text-gray-600">"Absolutely loved our stay at Kingdom Place! The room was spacious and clean, the staff was incredibly friendly, and the breakfast was delicious. Will definitely be back!"</p>
                        <p class="mt-2 text-xs text-gray-500">Posted on 15 Nov 2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="p-6">
                    <div class="flex items-start">
                      <img src="http://static.photos/people/200x200/2" alt="Guest" class="h-10 w-10 rounded-full">
                      <div class="ml-4">
                        <div class="flex items-center">
                          <h4 class="text-sm font-semibold">Michael Brown</h4>
                          <div class="flex ml-2 text-yellow-400">
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                            <i data-feather="star" class="w-4 h-4 fill-current"></i>
                          </div>
                        </div>
                        <p class="mt-1 text-sm text-gray-600">"The perfect place for a business trip. Fast WiFi, comfortable bed, and excellent service. The location is convenient with good restaurants nearby. Highly recommend!"</p>
                        <p class="mt-2 text-xs text-gray-500">Posted on 10 Nov 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-6 py-4 border-t border-gray-200">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900 font-medium">View all reviews</a>
                </div>
              </div>
            </main>
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
      ` }} />
    </div>
  );
}
