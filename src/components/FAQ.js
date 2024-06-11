import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const FAQ = () => {
  return (
    <div className="flex flex-col h-screen" id="faq">
      <div className="flex flex-col items-center justify-center bg-yellow-200 h-2/5 p-6">
        <div className="text-center text-black">
          <h1 className="text-4xl font-bold">Get Started</h1>
          <h2 className="text-xl mt-2">No Payment Needed, Get Your Quote Now</h2>
        </div>
        <div className="mt-6 flex gap-6">
        <Link to="/" className="custom-link">  <button className="w-36 h-12 text-lg bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300">Get Started</button></Link>
        <Link to="/contact" className="custom-link"> <button className="w-36 h-12 text-lg border border-black hover:bg-gray-200 transition-colors duration-300">Contact Us</button></Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white flex-grow p-6" id="faq-section">
      <section className="light:bg-gray-100 light:text-yellow-950">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">How do you calculate the quotes?.</h3>
				<p className="mt-1 light:text-yellow-600">Our platform calculates and provides your quotes based on your inputs.</p>
			</div>
			<div>
				<h3 className="font-semibold">How do you calculate the quotes?.</h3>
				<p className="mt-1 light:text-yellow-600">Our platform calculates and provides your quotes based on your inputs.</p>
			</div>
			<div>
				<h3 className="font-semibold">How do you calculate the quotes?.</h3>
				<p className="mt-1 light:text-yellow-600">Our platform calculates and provides your quotes based on your inputs.</p>
			</div>
			<div>
				<h3 className="font-semibold">How do you calculate the quotes?.</h3>
				<p className="mt-1 light:text-yellow-600">Our platform calculates and provides your quotes based on your inputs.</p>
			</div>
		</div>
	</div>
</section>
      </div>
    </div>
  );
};

export default FAQ;
