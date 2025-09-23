import Head from 'next/head';
import { useEffect } from 'react';

export default function Admin() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Feather icons (optional but you use them)
      

      // Sidebar open/close
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.getElementById('mainContent');
      const btnInsideSidebar = document.getElementById('toggleSidebar');
      const btnInHeader = document.getElementById('toggleSidebarHeader');

      const toggle = () => {
        sidebar?.classList.toggle('expanded');     // slide in/out
        mainContent?.classList.toggle('shifted');  // add/remove left margin
      };

      // Ensure we start closed (CSS already defaults to closed; this just enforces)
      sidebar?.classList.remove('expanded');
      mainContent?.classList.remove('shifted');

      btnInsideSidebar?.addEventListener('click', toggle);
      btnInHeader?.addEventListener('click', toggle);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Admin Dashboard | Kingdom Place Guesthouse</title>
        <meta name="description" content="Admin dashboard for managing Kingdom Place Guesthouse website content and bookings." />
        {/* IMPORTANT for proper mobile layout */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        dangerouslySetInnerHTML={{
          __html: `
        <!-- Inline CSS to control collapsed/open behavior -->
        <style>
          @media (min-width: 768px) {
            /* Sidebar starts closed (off-canvas), slides in when .expanded is present */
            #sidebar {
              transform: translateX(-100%);
              transition: transform .2s ease;
              will-change: transform;
            }
            #sidebar.expanded {
              transform: translateX(0);
            }

            /* Main content only shifts when sidebar is open */
            #mainContent {
              margin-left: 0;
              transition: margin-left .2s ease;
            }
            #mainContent.shifted {
              margin-left: 16rem; /* 64 (Tailwind) = 16rem */
            }
          }
        </style>

        <div class="flex h-screen">
          <!-- Sidebar (hidden on mobile, off-canvas by default on md+) -->
          <div class="sidebar bg-indigo-800 text-white w-64 fixed h-full overflow-y-auto hidden md:block" id="sidebar">
            <div class="p-4 flex items-center justify-between border-b border-indigo-700">
              <div class="flex items-center">
                <img src="http://static.photos/minimal/200x200/1" alt="Logo" class="h-10 w-10 rounded">
                <span class="logo-text ml-2 text-xl font-bold">Kingdom Place</span>
              </div>
              <!-- This button works when the sidebar is visible -->
              <button id="toggleSidebar" class="text-white focus:outline-none" title="Close sidebar">
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
          <div class="main-content flex-1 ml-0 overflow-y-auto" id="mainContent">
            <!-- Top Navigation -->
            <header class="bg-white shadow-sm">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <!-- Add a header toggle so you can open the sidebar when it's closed -->
                <div class="flex items-center gap-2">
                  <button class="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none" id="toggleSidebarHeader" title="Open/close sidebar">
                    <i data-feather="menu"></i>
                  </button>
                  <h1 class="text-xl font-semibold text-gray-900">Dashboard</h1>
                </div>

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
              <!-- ... your cards, tables, etc (unchanged) ... -->
            </main>
          </div>
        </div>

        <!-- Quick Nav (unchanged) -->
        <div style="position: fixed; bottom: 20px; right: 20px; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15); z-index: 9999;">
          <h4 style="margin: 0 0 6px 0; font-size: 12px; color: #4f46e5;">Quick Nav</h4>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <a href="/" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Home</a>
            <a href="/booking" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Booking</a>
            <a href="/login" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Login</a>
            <a href="/admin" style="font-size: 13px; color: #4f46e5; text-decoration: none;">Admin</a>
          </div>
        </div>
      `,
        }}
      />
    </div>
  );
}
