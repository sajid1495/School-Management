import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import AttendanceChart from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"
import EventCalender from "@/components/EventCalender"
import Announcement from "@/components/Announcement"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
      {/* USER CARDS */}
      <div className="flex gap-4 justify-center flex-wrap">
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="stuff" />
      </div>
      {/* MIDDLE CHART */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* COUNT CHART */}
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>    
        </div>
        {/* ATTENDANCE CHART */}
        <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
        </div>
      </div>
      {/* BOTTOM CHART */}
      <div className="w-full h-[500px]">
        <FinanceChart/>
      </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  )
}

export default AdminPage