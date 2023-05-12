import "./globals.css";

export const metadata = {
	title: "Bartosz Wiaderek",
	description: "Bartosz Wiaderek portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
