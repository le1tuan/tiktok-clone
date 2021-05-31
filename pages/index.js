import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-row flex-nowrap justify-start w-full py-5 px-24">
        <div className="flex-grow-0 flex-shrink-0 w-260px"></div>
        <div className="flex-grow-0 flex-shrink-0 w-260px">
          <div className="w-full flex flex-row flex-wrap h-screen overflow-scroll">
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
                <div className="flex flex-row items-center h-16 mb-1 hover:bg-gray-100 cursor-pointer">
                  <div className="h-avatar w-avatar border border-solid border-white rounded-full relative overflow-hidden">
                    <img className="h-full w-full" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fad79a1c925b90f323cb5f9242ae34b.jpeg?x-expires=1622131200&x-signature=diHip8M8BJEV%2F9v7oZkLnnq1Oik%3D" />
                  </div>
                  <div className="ml-4">
                    <div>kienreview90</div>
                    <div>Kien Review</div>
                  </div>
                </div>

                <div className="flex flex-row items-center h-16 mb-1 hover:bg-gray-100 cursor-pointer">
                  <div className="h-avatar w-avatar border border-solid border-white rounded-full relative overflow-hidden">
                    <img className="h-full w-full" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fad79a1c925b90f323cb5f9242ae34b.jpeg?x-expires=1622131200&x-signature=diHip8M8BJEV%2F9v7oZkLnnq1Oik%3D" />
                  </div>
                  <div className="ml-4">
                    <div>kienreview90</div>
                    <div>Kien Review</div>
                  </div>
                </div>

                <div className="flex flex-row items-center h-16 mb-1 hover:bg-gray-100 cursor-pointer">
                  <div className="h-avatar w-avatar border border-solid border-white rounded-full relative overflow-hidden">
                    <img className="h-full w-full" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fad79a1c925b90f323cb5f9242ae34b.jpeg?x-expires=1622131200&x-signature=diHip8M8BJEV%2F9v7oZkLnnq1Oik%3D" />
                  </div>
                  <div className="ml-4">
                    <div>kienreview90</div>
                    <div>Kien Review</div>
                  </div>
                </div>

                <div className="flex flex-row items-center h-16 mb-1 hover:bg-gray-100 cursor-pointer">
                  <div className="h-avatar w-avatar border border-solid border-white rounded-full relative overflow-hidden">
                    <img className="h-full w-full" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fad79a1c925b90f323cb5f9242ae34b.jpeg?x-expires=1622131200&x-signature=diHip8M8BJEV%2F9v7oZkLnnq1Oik%3D" />
                  </div>
                  <div className="ml-4">
                    <div>kienreview90</div>
                    <div>Kien Review</div>
                  </div>
                </div>


                <div className="flex flex-row items-center h-16 mb-1 hover:bg-gray-100 cursor-pointer">
                  <div className="h-avatar w-avatar border border-solid border-white rounded-full relative overflow-hidden">
                    <img className="h-full w-full" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fad79a1c925b90f323cb5f9242ae34b.jpeg?x-expires=1622131200&x-signature=diHip8M8BJEV%2F9v7oZkLnnq1Oik%3D" />
                  </div>
                  <div className="ml-4">
                    <div>kienreview90</div>
                    <div>Kien Review</div>
                  </div>
                </div>


                <div className="flex flex-row items-center h-16 mb-1 hover:bg-gray-100 cursor-pointer">
                  <div className="h-avatar w-avatar border border-solid border-white rounded-full relative overflow-hidden">
                    <img className="h-full w-full" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fad79a1c925b90f323cb5f9242ae34b.jpeg?x-expires=1622131200&x-signature=diHip8M8BJEV%2F9v7oZkLnnq1Oik%3D" />
                  </div>
                  <div className="ml-4">
                    <div>kienreview90</div>
                    <div>Kien Review</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Video</div>
      </main>
    </div>
  )
}
