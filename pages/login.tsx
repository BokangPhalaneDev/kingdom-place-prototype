import Head from 'next/head';
import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    // Initialize feather icons and functionality
    if (typeof window !== 'undefined') {
      const feather = require('feather-icons');
      feather.replace();
      
      // Toggle password visibility
      const togglePassword = document.querySelector('#togglePassword');
      const password = document.querySelector('#password');
      
      if (togglePassword && password) {
        togglePassword.addEventListener('click', function() {
          const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
          password.setAttribute('type', type);
          feather.replace();
        });
      }
      
      // Form validation
      document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // For prototype, just redirect to admin
        window.location.href = '/admin';
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Admin Login | Kingdom Place Guesthouse</title>
        <meta name="description" content="Admin login for Kingdom Place Guesthouse management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: `
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
            <div>
              <div class="flex justify-center">
                <img class="h-16 w-auto" src="http://static.photos/minimal/200x200/1" alt="Kingdom Place Logo">
              </div>
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Admin Portal
              </h2>
              <p class="mt-2 text-center text-sm text-gray-600">
                Kingdom Place Guesthouse Management System
              </p>
            </div>
            
            <form id="loginForm" class="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i data-feather="mail" class="text-gray-400"></i>
                  </div>
                  <input type="email" id="email" name="email" required class="pl-10 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="admin@kingdomplace.co.za">
                </div>
              </div>
              
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i data-feather="lock" class="text-gray-400"></i>
                  </div>
                  <input type="password" id="password" name="password" required class="pl-10 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="••••••••">
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" class="text-gray-400 hover:text-gray-500" id="togglePassword">
                      <i data-feather="eye" class="w-5 h-5"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              
              <div>
                <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign in to Admin
                </button>
              </div>
            </form>
            
            <div class="text-center">
              <a href="/" class="text-indigo-600 hover:text-indigo-500 text-sm">
                ← Back to main site
              </a>
            </div>
          </div>
        </div>
      ` }} />
    </div>
  );
}
