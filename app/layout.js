import "./globals.css";
export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body className=" relative">{children}</body>
		</html>
	);
}
