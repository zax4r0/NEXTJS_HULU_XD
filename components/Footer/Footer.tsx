function Footer() {
  return (
    <div className="select-none">
      <hr className="h-px my-6 text-white hover:text-green-400" />

      <footer className="bg-gray-200 text-black">
        <div className="p-10 max-w-1100 m-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <ul>
              <li className="uppercase font-bold mb-3">BROWSE</li>
              <li>
                <a href="#">Streaming Library</a>
              </li>
              <li>
                <a href="#">Live TV</a>
              </li>
              <li>
                <a href="#">Live News</a>
              </li>
              <li>
                <a href="#">Live Sports</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Originals</a>
              </li>
              <li>
                <a href="#">Networks</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">FX on Hulu</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Hulu, Disney+, and ESPN+</a>
              </li>
              <li>
                <a href="#">Disney Bundle</a>
              </li>
              <li>
                <a href="#">HBO Max</a>
              </li>
              <li>
                <a href="#">Cinimax</a>
              </li>
              <li>
                <a href="#">Showtime</a>
              </li>
              <li>
                <a href="#">STARZ</a>
              </li>
            </ul>
            <ul>
              <li className="uppercase font-bold mb-3">HELP</li>
              <li>
                <a href="#">Account & Billing</a>
              </li>
              <li>
                <a href="#">Plans & Pricing</a>
              </li>
              <li>
                <a href="#">Supported Devices</a>
              </li>
              <li>
                <a href="#">Accesibility</a>
              </li>
            </ul>
            <ul>
              <li className="uppercase font-bold mb-3">ABOUT US</li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-7 border-gray-400" />
          <div className="flex items-center">
            <a href="#">
              <img
                src="/static/images/social/facebook.svg"
                alt="facebook"
                className="w-6 h-6 mr-6"
              />
            </a>
            <a href="#">
              <img
                src="/static/images/social/twitter.svg"
                alt="twitter"
                className="w-6 h-6 mr-6"
              />
            </a>
            <a href="#">
              <img
                src="/static/images/social/youtube.svg"
                alt="youtube"
                className="w-6 h-6 mr-6"
              />
            </a>
            <a href="#">
              <img
                src="/static/images/social/instagram.svg"
                alt="instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
