function HorrizontalLoader() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 via-[#0B0F18] to-gray-900 relative overflow-hidden h-screen cursor-wait">
        <div className="inset-0 bg-gradient-to-b from-gray-900 via-[#0B0F18] to-gray-900 opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full font-mono flex flex-col items-center relative z-10">
            <p className="font-extrabold text-8xl my-44 text-green-400 animate-bounce animate-ping">
              <div className="flex justify-center  items-center">
                <div
                  className="
          animate-spin
          rounded-full
          h-32
          w-32
          border-t-2 border-b-2 border-green-500
          "
                ></div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HorrizontalLoader
