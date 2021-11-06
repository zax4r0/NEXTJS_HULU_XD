function HorrizontalLoader() {
  return (
    <>
      <div className="bg-dark-800 relative overflow-hidden h-screen">
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full font-mono flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You&#x27;re alone here
            </h1>
            <p className="font-extrabold text-8xl my-44 text-green-400 animate-bounce">
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
