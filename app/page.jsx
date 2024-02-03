import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-20 flex flex-row justify-between">
        <Image src={"/hero-image.png"} width={1120} height={564} alt="jaguar image"></Image>
        <section className="flex flex-col justify-between w-[637px] mr-[50px] h-[380px]">
          <h2 className="text-6xl font-russo tracking-widest">One of the biggest sportcar rentals in Dubai</h2>
          <p className="text-3xl font-russo text-stone-500">We will make every ride of yours - <span className="red-text">unforgetable</span></p>
        </section>
      </div>
      <div className="flex flex-col items-center">
        <button className="mx-auto w-[280px] h-[80px] button-animate  text-white text-2xl mb-20 mt-10">Browse Cars</button>
        <hr className="w-[1000px] red-color h-[4px]"/>
      </div>

      <h2 className="font-raleway text-4xl text-center font-bold mb-5 mt-20">Car Catalogue</h2>
      <p className="font-raleway text-3xl text-center mb-[75px]">Your driving journey starts here</p>

      {/* Car Cards */}

      <div className="flex flex-row justify-center mb-52">

        <div className="flex flex-col items-center w-[525px] h-[590px] border-4 border-stone-400 border-3 bg-stone-200">
          <p className="font-nunito font-extrabold text-2xl mt-9">
            <img className="inline mb-1 mr-1" src="/price-icon.png" alt="" />
            550 AED / DAY
          </p>
          <Image className="mt-[40px]" width={460} height={200} src={"/rs6.png"} alt="RS6 Image"></Image>
          <div className="mt-[55px] w-[415px] flex flex-row justify-between pb-3 border-b-2 border-black">
            <h3 className="font-raleway font-bold text-3xl">Audi RS6</h3>
            <button className="button-animate w-[170px] h-[35px] text-white rounded-md">Book Now</button>
          </div>
          <div className="text-xl w-[415px] mt-[25px]">
            <p className="mb-[2px]">
              <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/engine-icon.png" alt="Engine icon" />
              <span className="font-bold">Torque:</span> 621 HP
            </p>
            <p className="mb-[2px]">
              <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/speedo-icon.png" alt="speedometer icon" />
              <span className="font-bold">Max Speed:</span> 302 KM/H
            </p>
            <p className="mb-[2px]">
              <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/seat-icon.png" alt="seats icon" />
              <span className="font-bold">Seats:</span> 5
            </p>
            <p className="mb-[2px]">
              <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/avaliable-icon.png" alt="seats icon" />
              <span className="text-green-700 font-bold">Avaliable</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
