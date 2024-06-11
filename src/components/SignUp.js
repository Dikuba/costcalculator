import React, { useState } from 'react';
import Signup from './Assets/Signup.jpg';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!strongPasswordRegex.test(formData.password)) {
      setPasswordError('Password must be at least 8 characters long and include letters and numbers.');
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    // Submit the form if all validations pass
    console.log('Form submitted:', formData);
  };

  return (
    <section class="h-screen">
      <div class="h-full">
        <div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 ">
            <img src={Signup} class="w-full" />
          </div>

          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit} class="p-3 max-w-lg mt-20 mx-auto bg-gray-50 shadow-md rounded-md">
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up for an account
              </h2>

              <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="space-y-6">
                  <div>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      autoComplete="name"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      autoComplete="email"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Address"
                      autoComplete="street-address"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      autoComplete="new-password"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>

                  {passwordError && (
                    <p class="text-red-500 text-sm mt-2">{passwordError}</p>
                  )}

                  <div>
                    <button
                      type="submit"
                      class="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                <p class="mt-10 text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <a href="/login" class="font-semibold leading-6 text-gray-600 hover:text-indigo-500">Sign In</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
