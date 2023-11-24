"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ConstructionBunner from "./ConstructionBunner";

function Navbar() {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const navHandler = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			className={
				shadow
					? "fixed bg-[#E4DFFC] w-full h-20 shadow-xl z-[100]"
					: "fixed  w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				{/* <Image src="/assets/navLogo.png" alt='logo' width={60} height={25} /> */}
				{/* <ConstructionBunner /> */}
				<Link href="/">
					<h2 className=" text-[#5651e5]">&lt;SolidCode/&gt;</h2>
				</Link>
				<div>
					<ul className="hidden md:flex">
						<a href="#hero">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Home
							</li>
						</a>
						<a href="#about">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								About
							</li>
						</a>
						<a href="#skills">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Skills
							</li>
						</a>
						<a href="#projects">
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Projects
							</li>
						</a>
						<a href={"#contact"}>
							<li className="ml-10 text-sm uppercase font-bold hover:border-b">
								Contact
							</li>
						</a>
					</ul>
					<div onClick={navHandler} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
						: ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							{/* <Image src='/assets/navLogo.png' alt="/" width={50} height={25}/> */}
							<h2 className="uppercase text-[#5651e5]">
								a.sikana
							</h2>
							<div
								onClick={navHandler}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								let&apos;s build something epic together
							</p>
						</div>
					</div>
					<div className="py-4 felx flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm ">Home</li>
							</Link>
							<Link href="/#about">
								<li className="py-4 text-sm ">About</li>
							</Link>
							<Link href="/#skills">
								<li className="py-4 text-sm ">Skills</li>
							</Link>
							<Link href="/#projects">
								<li className="py-4 text-sm ">Projects</li>
							</Link>
							<Link href="/#contact">
								<li className="py-4 text-sm ">Contact</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								Let&apos;s Connect
							</p>
							<div className="flex items-center justify-between">
								<Link
									className="bg-white z-10 mix-blend-multiply hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
									href={
										"https://www.linkedin.com/in/alinaswe-sikana/"
									}
								>
									<FaLinkedin />
								</Link>
								<Link
									className="bg-white z-10 mix-blend-multiply hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
									href={"https://github.com/SikanaAli"}
								>
									<FaGithub />
								</Link>
								<Link
									className="bg-white z-10 mix-blend-multiply hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
									href={"mailto:sikanaalinaswe@gmail.com"}
								>
									<AiOutlineMail />
								</Link>
								<Link
									className="bg-white z-10 mix-blend-multiply hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
									href={"https://wa.me/260771231901"}
								>
									<BsWhatsapp />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
