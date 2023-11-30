"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.module.css";

export default function Hero() {
	return (
		<div
			id="home"
			className="w-full relative h-screen text-center z-0 bg-white overflow-x-hidden"
		>
			<div className="absolute z-0 pointer-events-none top-60 md:left-[33%] w-96 h-96 bg-[#e49732] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 "></div>
			<div className="absolute z-0 pointer-events-none top-60 md:left-[40%] w-96 h-96 bg-[#2a9dfc] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000 "></div>
			<div className="absolute z-0 pointer-events-none top-56 md:left-[47%] w-96  h-96 bg-[#01c401] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob "></div>
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-50">
				<div>
					<p className="uppercase text-sm tracking-widest">
						let&apos;s build something Great
					</p>
					<h1 className="py-4 text-gray-700">
						<span className="text-[#5651e5]">SolidCode</span>
						<br className="m-0" />
						<span className="text-[#5651e5] text-2xl">BYTEHUB</span>
					</h1>
					<h3 className="py-2 text-gray-700">
						Transforming ideas into Robust Realities
					</h3>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Android & IOS, Web, Desktop, IoT, REST API, SOAP, gRPC
					</p>
					<div className="flex z-10 items-center justify-center space-x-4  w-[130px] m-auto py-4">
						{/* <Link
							className="bg-white z-10 mix-blend-multiply hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={
								"https://www.linkedin.com/in/alinaswe-sikana/"
							}
						>
							<FaLinkedin />
						</Link>
						*/}
						<Link
							className="bg-white z-10 mix-blend-multiply hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={"https://github.com/solidcoders"}
						>
							<FaGithub />
						</Link>
						<Link
							className="bg-gray-300 z-10 mr-4 mix-blend-multiply hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={"mailto:info@bytehubzambia.onmicrosoft.com"}
						>
							<AiOutlineMail />
						</Link>
						<Link
							className="bg-gray-300 z-10 mix-blend-multiply ml-2 hover:mix-blend-normal rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={"https://wa.me/260771231901"}
						>
							<BsWhatsapp />
						</Link>
					</div>
				</div>
			</div>
			<div className="absolute w-full bottom-0 left-0 overflow-hidden leading-[0] rotate-180">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						className="fill-[#E4DFFC]"
					></path>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						className="fill-[#E4DFFC]"
					></path>
					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						className="fill-[#E4DFFC]"
					></path>
				</svg>
			</div>
		</div>
	);
}
