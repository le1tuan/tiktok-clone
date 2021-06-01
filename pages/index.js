import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-row flex-nowrap justify-start w-full py-5 px-24 m-main-container z-40">
        <div className="flex-grow-0 flex-shrink-0 w-260px">
          <div className="w-full flex flex-row flex-wrap h-screen overflow-auto fixed w-260px top-sidebar bottom-0 pb-1">
            <div className="flex-grow w-full h-12 font-bold flex flex-row items-center">
              <p>For You</p>
            </div>
            <div className="flex-grow w-full h-12 font-bold flex flex-row items-center">
              <p>Following</p>
            </div>
            <div className="flex-grow w-full h-12 flex flex-row items-center mt-12">
              <p className="text-gray-500">Log in to follow creators, like videos and view comments</p>
            </div>
            <div className="flex-grow w-full h-12 flex flex-row items-center">
              <button className="rounded px-2 py-2 font-bold border-red-600 border-2 text-red-600 w-full">Log in</button>
            </div>
            <div className="flex-grow w-full">

              <div className="w-full h-12 flex flex-row items-center">
                <p className="text-gray-500">Suggest accounts</p>
              </div>
              <div className="w-full">
                {
                  Array.from({ length: 10 }).map((item, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center h-16 mb-1 hover:bg-gray-100 cursor-pointer">
                        <div className="h-avatar w-avatar border border-solid border-white rounded-full relative overflow-hidden">
                          <img className="h-full w-full" src="https://i.pinimg.com/originals/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.png" />
                        </div>
                        <div className="ml-4">
                          <div>kienreview90</div>
                          <div>Kien Review</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div>Video</div>
      </main>
    </div>
  )
}
