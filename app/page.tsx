import { Inter, Kanit, Lato, Open_Sans } from "next/font/google";
import Image from "next/image";

const latoFont700 = Lato({
	weight: "700",
	subsets: ["latin"],
});

const interFont500 = Inter({
	weight: "500",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main className="bg-White flex flex-col gap-y-10 ">
			<div className="flex px-32 pt-40 pb-96 gap-x-12 justify-center w-screen relative overflow-clip">
				<div className="z-10 flex flex-col justify-center gap-y-3">
					<h1 className={`text-Red text-6xl text-Black ${latoFont700.className}`}>
						Jestem Bartosz <br />
						Wiaderek
					</h1>
					<h3 className={`text-2xl text-black ${interFont500.className}`}>Razem uczynimy Traugutta lepszym!</h3>

					<p className="text-lg">
						Cześć, nazywam się Bartosz Wiaderek,
						<br /> jestem w klasie 2C i kandyduje na przewodniczącego Traugutta.
					</p>
				</div>

				<div className="z-10">
					<div className="aspect-[9/16] bg-gray-600 w-80"></div>
				</div>

				<Image src="/blob.svg" alt="" className="object-cover blob absolute w-full h-full  left-0 right-0 bottom-0" width={200} height={200} />
			</div>

			<div className="bg-White w-full flex flex-col items-center py-20"></div>
		</main>
	);
}
