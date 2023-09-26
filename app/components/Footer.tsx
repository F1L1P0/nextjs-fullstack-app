import '@/app/globals.css'

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-200 mt-6">
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <p className="w-full text-center">FORMULAR</p>
          <form className="w-full flex flex-wrap gap-4 justify-between">
            <div className="w-[24%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>
            <div className="w-[24%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>
            <div className="w-[24%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>
            <div className="w-[24%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>

            <div className="w-full">
              <label htmlFor="text">*Your message:</label>
              <br />
              <textarea
                name="text"
                id=""
                cols={30}
                rows={10}
                className="w-full rounded-lg p-2"></textarea>
            </div>
            <div className="text-center w-full">
              <button type="submit" className="green-btn">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between bg-slate-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
