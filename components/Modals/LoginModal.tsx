import { Dialog, Transition } from "@headlessui/react"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"

export default function LoginModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const router = useRouter()
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-white font-bold border-0 bg-none uppercase tracking-widest cursor-pointer px-4 py-2 text-sm  bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        LOG IN
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-5 my-8 overflow-hidden  align-middle transition-all transform bg-white">
                <a
                  onClick={closeModal}
                  className="text-gray-800 font-bold  px-96   inline-flex text-right cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
                <Dialog.Title
                  as="h3"
                  className="font-bold  text-2xl leading-6 text-gray-900 text-left mb-10 mt-14 "
                >
                  LOG IN
                </Dialog.Title>

                <div className="flex flex-col mb-48 mt-18">
                  <div className="mb-4">
                    <label
                      className="block text-[#9AA1B0]  text-sm font-bold mb-3 text-left"
                      htmlFor="username"
                    >
                      USERNAME
                    </label>
                    <input
                      className=" appearance-none border border-black  border-solid  w-full py-2 px-3 text-[#9AA1B0]"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-[#9AA1B0] text-sm font-bold mb-3 text-left"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className=" appearance-none border border-black border-solid w-full py-2 px-3 text-grey "
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-red-400 cursor-pointer mt-4 text-left"
                    onClick={() => router.push("/forgotpass")}
                  >
                    Forgot your email or password?
                  </a>
                </div>

                <button
                  type="button"
                  className=" w-full h-12 px-40 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center text-center"
                  onClick={closeModal}
                >
                  LOG IN
                </button>

                <a className="inline-block align-baseline font-bold text-sm text-gray-400 text-center items-center justify-center mt-24">
                  Don't have an account ?
                  <a
                    className=" font-bold text-sm text-blue-400 hover:text-red-400 cursor-pointer"
                    onClick={() => router.push("/forgotpass")}
                  >
                    Start your free trial ?
                  </a>
                </a>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
