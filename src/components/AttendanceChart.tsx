"use client";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Sat',
        present: 60,
        absent: 40,
    },
    {
        name: 'Sun',
        present: 75,
        absent: 25,
    },
    {
        name: 'Mon',
        present: 80,
        absent: 20,
    },
    {
        name: 'Tue',
        present: 33,
        absent: 67,
    },
    {
        name: 'Wed',
        present: 89,
        absent: 11,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <img src="/moreDark.png" alt="More options" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingBottom:"40px", paddingTop:"20px"}}/>
                    <Bar dataKey="present" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]}/>
                    <Bar dataKey="absent" fill="#C3EBFA"  legendType='circle' radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart