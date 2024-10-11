//

export default function SubscribeEmail() {

    return (
      <>
     <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
      <div className="flex flex-col md:flex-row rounded-l-xl">
        <img className="object-fit rounded-xl h-72 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" src='/images/imageModal.jpg' alt='email-subscribe' />
      <div className="p-6 md:p-12">
        <h1 className="font-serif text-xl font-medium text-center md:text-left text-white">Get diet and fitness tips in your inbox</h1>
        <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
          Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
          <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-2 px-4 text-center text-zinc-700 bg-white border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"/>
            <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
              Subcribe 
            </button>
            </div>
          </div>
      </div>
    </div>
  </div>
  </>
    );
  }
  