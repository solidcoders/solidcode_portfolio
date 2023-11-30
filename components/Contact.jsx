"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

function contacts() {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tracking-widest upercase text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full reounded-xl">
							<div>
								<img
									className="rounded hover:scale-105 ease-in duration-300"
									src="/assets/contact.png"
									alt=""
								/>
							</div>
							<div>
								<h2 className="py-2">Solid Code</h2>
								<p>Limitles Engineers</p>
								<p className="py-4">
									We are avaliable for freelance or contract
									work. Contact us and lets talk.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">
									Connect with us
								</p>
								<div className="flex items-center justify-between py-4">
									{/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin />
                  </div> */}
									<Link
										className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
										href={"https://github.com/solidcoders"}
									>
										<FaGithub />
									</Link>
									<Link
										className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
										href={"mailto:sikanaalianswe@gmail.com"}
									>
										<AiOutlineMail />
									</Link>
									<Link
										className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
										href={"https://wa.me/260771231901"}
									>
										<BsWhatsapp />
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* Right */}

					<div className="col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl h-auto lg:p-4 ">
						<div className="p-4">
							<form onSubmit={()=>{}}>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Name
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											name="uname"
											type="text"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											name="msisdn"
											type="tel"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">
										Email
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										name="email"
										type="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">
										Subject
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										name="subject"
										type="text"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">
										Merssage
									</label>
									<textarea
										className="border-2 rounded-lg p-3 flex border-gray-300"
										name="message"
										rows={10}
									/>
								</div>
								<button
									className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
									type="submit"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default contacts;
