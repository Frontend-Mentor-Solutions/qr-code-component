export default function App() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="h-3/5 bg-[#ffffff] p-[1rem] pb-[1.5rem] rounded-[1rem] aspect-[0.667] shadow-lg">
				<div className="h-2/3 w-full">
					<img
						src="../src/assets/images/image-qr-code.png"
						className="rounded-[1rem]"
					/>
				</div>
				<div className="w-full h-1/3 px-[1rem] flex flex-col justify-end">
					<p className="text-[#1f3251] font-outfit font-[700] text-center py-[0.5rem] leading-7 h-full text-[2.5vh] flex items-center">
						Improve your front-end skills by building projects
					</p>
					<p className="text-[#7b879d] font-outfit text-[400] text-center leading-5 h-full text-[2vh] flex items-center">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</div>
		</div>
	);
}
