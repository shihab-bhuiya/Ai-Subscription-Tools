import React from 'react';

const StepProcess = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2 text-gray-900">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md">01</span>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-50 rounded-2xl">
              <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">Create Account</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        {/* Step 2 */}
        <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md">02</span>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-50 rounded-2xl">
              <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">Choose Products</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
        </div>

        {/* Step 3 */}
        <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md">03</span>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-50 rounded-2xl">
              <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">Start Creating</h3>
          <p className="text-gray-500 text-sm leading-relaxed">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </section>
  );
};

export default StepProcess;