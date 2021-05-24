
export default function Header() {
  return (
    <div className="flex flex-row flex-nowrap justify-between w-full py-5 px-24">
      <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" alt="tiktok logo" />
      <input placeholder="Search accounts" className="px-2 w-360px border-solid border-black border-2 rounded-full" />
      <div>
        <button className="rounded py-2 font-bold ml-1">Upload</button>
        <button className="rounded px-2 py-2 font-bold bg-red-600 text-white min-w-120px ml-2">Log in</button>
      </div>
    </div>
  )
}