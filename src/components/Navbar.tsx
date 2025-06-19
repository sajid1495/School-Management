import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex item-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2 py-1">
        <Image src="/search.png" alt="" width={24} height={24} className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-1 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USERS */}
      <div className=" flex items-center gap-6 justify-end w-full" >
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-4 right-0 w-5 h-5 flex item-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">Sajid</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" height={36} width={36} className="rounded-full"/>
      </div>
    </div>
  )
}

export default Navbar