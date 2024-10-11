//
import Link from 'next/link'

export default function PricingGrid() {
  return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-slate-800">
          <div className="flex flex-col space-y-6 my-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0">
          <div className="bg-slate-700 rounded-xl">
            <div className="bg-slate-800 p-8 mt-3 mx-3 text-white rounded-t-lg">
              <div className="text-center uppercase">Basic</div>
                <h2 className="font-serif text-5xl mt-10 text-center">100GB</h2>
                <h3 className="mt-2 text-center">$1.99/Month</h3>
                <div className="flex justify-center">
                  <Link href="#" className="bg-slate-800 px-6 py-2 mt-4 text-white text-center border border-purple-600 rounded shadow-md shadow-purple-600/50 hover:bg-purple-500">Purchase</Link>
               </div>  
            </div>
            <div className="border-t bg-slate-700 w-0"></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2 text-white text-sm">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">100 GB of storage</span>
                  </div>
                  <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">Option to add members</span>
                  </div>
                  <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">Extra member benefits</span>
                  </div>
                </div>
              </div>
            </div> 
            <div className="bg-violet-600 rounded-xl">
            <div className="bg-slate-800 p-8 mt-3 mx-3 text-white rounded-t-lg">
              <div className="text-center uppercase">Standard</div>
                <h2 className="font-serif text-5xl mt-10 text-center">200GB</h2>
                <h3 className="mt-2 text-center">$3.99/Month</h3>
                <div className="flex justify-center">
                  <Link href="#" className="bg-slate-800 px-6 py-2 mt-4 text-white text-center border border-purple-600 rounded shadow-md shadow-purple-600/50 hover:bg-purple-500">Purchase</Link>
               </div>  
            </div>
            <div className="border-t bg-slate-700 w-0"></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2 text-white text-sm">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">200 GB of storage</span>
                  </div>
                  <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">Option to add members</span>
                  </div>
                  <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">Extra member benefits</span>
                  </div>
                </div>
              </div>
            </div> 
            <div className="bg-slate-700 rounded-xl">
            <div className="bg-slate-800 p-8 mt-3 mx-3 text-white rounded-t-lg">
              <div className="text-center uppercase">Premium</div>
                <h2 className="font-serif text-5xl mt-10 text-center">2 TB</h2>
                <h3 className="mt-2 text-center">$8.99/Month</h3>
                <div className="flex justify-center">
                  <Link href="#" className="bg-slate-800 px-6 py-2 mt-4 text-white text-center border border-purple-600 rounded shadow-md shadow-purple-600/50 hover:bg-purple-500">Purchase</Link>
               </div>  
            </div>
            <div className="border-t bg-slate-700 w-0"></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2 text-white text-sm">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">2 TB of storage</span>
                  </div>
                  <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">Option to add members</span>
                  </div>
                  <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">Extra member benefits</span>
                  </div>
                </div>
              </div>
            </div> 
          </div>            
        </div>
      </>
  );
}