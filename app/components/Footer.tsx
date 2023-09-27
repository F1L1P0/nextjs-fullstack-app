import '@/app/globals.css'

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-200 mt-6 text-black">
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <p className="w-full text-center my-8 font-bold">FORMULAR</p>
          <form className="w-full flex flex-wrap gap-4 justify-between">
            <div className="px-4 w-full max-w-[100%] sm:max-w-[45%] lg:max-w-[23%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>
            <div className="px-4 w-full max-w-[100%] sm:max-w-[45%] lg:max-w-[23%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>
            <div className="px-4 w-full max-w-[100%] sm:max-w-[45%] lg:max-w-[23%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>
            <div className="px-4 w-full max-w-[100%] sm:max-w-[45%] lg:max-w-[23%]">
              <label htmlFor="fname">*First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                id=""
                className="rounded-lg p-2 w-full"
              />
            </div>

            <div className="w-full px-4">
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
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between bg-slate-800 mt-9">
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
      <div className="flex w-screen justify-between p-4">
        <div className="w-1/2 items-center justify-center flex flex-col gap-4 p-3">
          <p>
            Lorem ipsum dolor sit amet, culpa eveniet. Quod, non tempora ab nam
            dolore ad dolores enim? Ab esse architecto necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, culpa eveniet. Quod, non tempora ab nam
            dolore ad dolores enim? Ab esse architecto necessitatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, culpa eveniet. Quod, non tempora ab nam
            dolore ad dolores enim? Ab esse architecto necessitatibus.
          </p>
        </div>
        <div className="w-1/2 items-center justify-center flex">
          <iframe
            id="google-map"
            height="350"
            width="600"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.1856606804863!2d17.003656215671526!3d48.77834567927974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47132b66a2b823db%3A0x3fdd80c0af86bdb0!2sOstratick%C3%BD%20s.r.o.!5e0!3m2!1scs!2scz!4v1673124739690!5m2!1scs!2scz"
            loading="lazy"></iframe>
        </div>
      </div>
    </footer>
  )
}
