import localFont from "next/font/local";

const valenciaFont = localFont({ src: "./Valencia.ttf" });
import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "600",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main className="w-screen h-screen bg-background">
			<div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-full text-gray ">
				<h1 className={"text-7xl sm:text-8xl md:text-9xl text-center lg:text-14xl " + valenciaFont.className}>Bartosz Wiaderek</h1>
				<h2 className={"text-1xl sm:text-2xl md:text-3xl text-center mt-6 uppercase " + openSansFont.className}>Website available later...</h2>
			</div>
		</main>
	);
}
