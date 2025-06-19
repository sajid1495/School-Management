import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-Purple even:bg-Yellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          16/05/2025
        </span>
        <Image src="/more.png" alt="More options" width={20} height={20}/>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="text-sm font-medium text-gray-500">
        {type.charAt(0).toUpperCase() + type.slice(1)}s
      </h2>
    </div>
  )
}

export default UserCard