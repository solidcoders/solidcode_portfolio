import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function About() {
	return (
		<div
			id="about"
			className="w-full  p-2 relative flex items-center py-16 bg-[#E4DFFC] "
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who We Are</h2>
					<p className="py-2 text-gray-600">
						{"// Zambia's finest developers"}
					</p>
					<p className="py-2 text-gray-600">
						Welcome to Solid Code, your premier destination for
						cutting-edge software development across a spectrum of
						platforms. At Solid Code, we specialize in crafting
						solutions that elevate your digital presence and empower
						your business to thrive in the dynamic landscape of
						technology.
					</p>
					<h3>Our Expertise</h3>

					<h4 className="pt-4">Android & iOS Development</h4>
					<p className="py-2 text-gray-600">
						Unleash the potential of the mobile frontier with our
						expert Android and iOS development services. From
						intuitive user interfaces to robust functionality, we
						turn your app ideas into user-centric digital
						experiences.
					</p>
					<h4>Web Development</h4>
					<p>
						Navigating the ever-evolving web landscape requires a
						solid foundation. Our web development team excels in
						creating responsive, scalable, and visually stunning
						websites that leave a lasting impression.
					</p>
					<h4>Desktop Applications</h4>
					<p>
						From concept to deployment, our desktop application
						development ensures seamless performance and a
						user-friendly interface. Tailored to your specific
						needs, our solutions run efficiently across various
						operating systems.</p>
					<h4>IoT Solutions</h4>
					<p>Embrace the era ofconnected devices with our Internet of Things (IoT)
						development services. We create smart, interconnected
						solutions that bring automation and intelligence to your
						business operations.</p>
						<h4>REST API, SOAP, gRPC
						Development</h4> <p>Harness the power of robust communication
						protocols with our expertise in REST API, SOAP, and gRPC
						development. We create efficient and secure interfaces
						that facilitate seamless data exchange between
						applications.
					</p>
					
					<a href="#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							check out some of our latest projects
						</p>
					</a>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<img
						className="rounded-xl"
						src="/assets/work_about.jpeg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
