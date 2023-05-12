import localFont from "next/font/local";

const avenirFont = localFont({ src: "./Valencia.ttf" });
import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
	weight: "600",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main>
			<div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 ">
				<h1 className={"text-9xl text-center " + avenirFont.className}>Bartosz Wiaderek</h1>
				<h2 className={"text-3xl text-center mt-3 " + openSansFont.className}>Website available later...</h2>
			</div>
		</main>
	);
}
