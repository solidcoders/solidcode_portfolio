"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import deserter2dImg from "../public/assets/projects/deserter2d.jpg";
import publicApisImg from "../public/assets/projects/public_apis.png";
import googleUiCloneImg from "../public/assets/projects/googleui.png";
import teslaclone from "../public/assets/projects/teslacone.png";
import titaniumpos from "../public/assets/projects/pos.png";
import myzamtel from "../public/assets/projects/myzamtel.png";
import smarttutor from "../public/assets/projects/smarttutor.png";
import comehome from "../public/assets/projects/comehome.png";
import covid19tracker from "../public/assets/projects/covid19.png";
import netflixClone from "../public/assets/projects/netflix.png";
import ProjectItem from "./ProjectItem";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const projectItems = [
	<ProjectItem
		key={5}
		title={"My Zamtel"}
		backgroundImg={myzamtel}
		projectType={"React Native"}
		projectUrl={
			"https://play.google.com/store/apps/details?id=com.myzamtel&hl=en&gl=US&pli=1"
		}
	/>,
	<ProjectItem
		key={5}
		title={"Smart Tutor ZM"}
		backgroundImg={smarttutor}
		projectType={"React Native, Express & Firebase"}
		projectUrl={
			"https://play.google.com/store/apps/details?id=com.smarttutorzm"
		}
	/>,
	<ProjectItem
		key={0}
		title={"Come Home"}
		backgroundImg={comehome}
		projectType={"ReactJS & Redux"}
		projectUrl={"https://apps.zamtel.co.zm/ComeHome/"}
	/>,
	<ProjectItem
		key={0}
		title={"Covid 19 Tracker"}
		backgroundImg={covid19tracker}
		projectType={"ReactJS & Redux"}
		projectUrl={"https://covid-19-tracker-6e11e.web.app/"}
	/>,
	<ProjectItem
		key={0}
		title={"Netflix Clone"}
		backgroundImg={netflixClone}
		projectType={"ReactJS & Redux"}
		projectUrl={"https://netflix-clone-c1fc0.web.app/"}
	/>,
	<ProjectItem
		key={0}
		title={"Dserter 2D"}
		backgroundImg={deserter2dImg}
		projectType={"Unity"}
		projectUrl={
			"https://github.com/SikanaAli/Deserter-2D-Project-Files/releases"
		}
	/>,
	<ProjectItem
		key={1}
		title={"Public Apis"}
		backgroundImg={publicApisImg}
		projectType={"NextJS"}
		projectUrl={"https://public-apis-five.vercel.app/"}
	/>,
	<ProjectItem
		key={2}
		title={"Google UI Clone"}
		backgroundImg={googleUiCloneImg}
		projectType={"HTML & CSS"}
		projectUrl={"https://clone-3406b.web.app/"}
	/>,
	<ProjectItem
		key={3}
		title={"Tesla Clone"}
		backgroundImg={teslaclone}
		projectType={"ReactJS & Firebase"}
		projectUrl={"https://tesla-clone-4ca3a.web.app/"}
	/>,
	<ProjectItem
		key={4}
		title={"Titanium POS"}
		backgroundImg={titaniumpos}
		projectType={"PHP"}
		projectUrl={"http://139.144.5.124/pos/index.php"}
	/>,
];

function Projects() {
	return (
		<div
			id="projects"
			className="w-full relative bg-gradient-to-b py-20 from-[#7FE17F] to-[#f1f1eb]"
		>
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className=" pt-4 pb-10">What We&apos;v Built</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
					{projectItems.map((item, i) => {
						return item;
					})}
				</div>
			</div>
			<div className="absolute w-full z-0 bottom-0 left-0 overflow-hidden leading-[0]">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="fill-white"
					></path>
				</svg>
			</div>
			<div className="flex justify-center py-12 z-[40]">
				<Link href="#home">
					<div className="rounded-full bg-gray-300 shadow-lg shadow-gray-400 p-4 cursor-pointer scale-110 hover:scale-125 ease-in duration-300">
						<HiOutlineChevronDoubleUp
							className="text-[#5651e5]"
							size={30}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Projects;
