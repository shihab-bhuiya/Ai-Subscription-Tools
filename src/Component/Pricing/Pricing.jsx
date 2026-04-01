import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-2 text-gray-900">Simple, Transparent Pricing</h2>
      <p className="text-gray-500 mb-16">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Starter Plan */}
        <div className="p-8 rounded-3xl text-left bg-white text-gray-900 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold">Starter</h3>
          <p className="text-sm mb-6 text-gray-500">Perfect for getting started</p>
          <div className="mb-8">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-sm text-gray-400">/Month</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm">
            <li className="flex items-center"><CheckIcon /> Access to 10 free tools</li>
            <li className="flex items-center"><CheckIcon /> Basic templates</li>
            <li className="flex items-center"><CheckIcon /> Community support</li>
            <li className="flex items-center"><CheckIcon /> 1 project per month</li>
          </ul>
          <button className="w-full py-3 rounded-xl font-bold text-sm bg-purple-600 text-white hover:bg-purple-700">
            Get Started Free
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="relative p-8 rounded-3xl text-left bg-purple-600 text-white shadow-xl scale-105 z-10">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Most Popular
          </span>
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="text-sm mb-6 text-purple-100">Best for professionals</p>
          <div className="mb-8">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-sm text-purple-100">/Month</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm">
            <li className="flex items-center"><CheckIcon light /> Access to all premium tools</li>
            <li className="flex items-center"><CheckIcon light /> Unlimited templates</li>
            <li className="flex items-center"><CheckIcon light /> Priority support</li>
            <li className="flex items-center"><CheckIcon light /> Unlimited projects</li>
            <li className="flex items-center"><CheckIcon light /> Cloud sync</li>
            <li className="flex items-center"><CheckIcon light /> Advanced analytics</li>
          </ul>
          <button className="w-full py-3 rounded-xl font-bold text-sm bg-white text-purple-600 hover:bg-gray-100">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="p-8 rounded-3xl text-left bg-white text-gray-900 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold">Enterprise</h3>
          <p className="text-sm mb-6 text-gray-500">For teams and businesses</p>
          <div className="mb-8">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-sm text-gray-400">/Month</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm">
            <li className="flex items-center"><CheckIcon /> Everything in Pro</li>
            <li className="flex items-center"><CheckIcon /> Team collaboration</li>
            <li className="flex items-center"><CheckIcon /> Custom integrations</li>
            <li className="flex items-center"><CheckIcon /> Dedicated support</li>
            <li className="flex items-center"><CheckIcon /> SLA guarantee</li>
            <li className="flex items-center"><CheckIcon /> Custom branding</li>
          </ul>
          <button className="w-full py-3 rounded-xl font-bold text-sm bg-purple-600 text-white hover:bg-purple-700">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
};

// Helper Check Icon to reduce clutter
const CheckIcon = ({ light }) => (
  <svg className={`w-4 h-4 mr-3 ${light ? 'text-purple-200' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default PricingSection;