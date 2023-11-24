import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function IndexPage() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
}
