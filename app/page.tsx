"use client";

import localFont from "next/font/local";
const valenciaFont = localFont({ src: "./Valencia.ttf" });
import { Open_Sans } from "next/font/google";
import { motion } from "framer-motion";

const openSansFont = Open_Sans({
	weight: "600",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main className="w-full flex flex-col gap-x-10 bg-background">
			<section className="w-screen h-screen">
				<div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-full text-gray ">
					<div className="overflow-hidden ">
						<motion.h1
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							transition={{ duration: 0.5 }}
							className={"text-7xl sm:text-8xl md:text-9xl z-10 h-fit text-center lg:text-14xl " + valenciaFont.className}
						>
							Bartosz Wiaderek
						</motion.h1>
					</div>
					<div className="overflow-hidden ">
						<motion.h2
							initial={{ opacity: 0, y: "100%" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								type: "spring",
								stiffness: 260,
								damping: 20,
								delay: 0.45,
							}}
							className={"text-1xl sm:text-2xl md:text-3xl text-center uppercase text-gray/70 " + openSansFont.className}
						>
							Website available later...
						</motion.h2>
					</div>
				</div>
			</section>
		</main>
	);
}
