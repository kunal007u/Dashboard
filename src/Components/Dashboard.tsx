import { faCar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiSteeringWheel } from "react-icons/gi"
import { FaTachometerAlt } from "react-icons/fa"
import car from "../assets/car.png"

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, AreaChart, Area, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux'
import { RootState } from '../Store/Store'


const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Dashboard = () => {
  const currentTheme = useSelector((state: RootState) => state.CurrentTheme.theme);

  return (
    <>
      {/* ------------------------ First 4 Cards (1-Row ) ------------------------ */}

      <section className="text-gray-600 body-font">
        <div className=" px-5 py-5 mx-auto ">
          <div className="flex flex-wrap -m-4 gap-1 justify-around ">
            <div className={`p-4 md:w-[24%] rounded-2xl flex justify-between text-center ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'}`}>
              <div className="tile-card ">
                <span className={`text-lg `}>Total Cars</span>  <br /> <span className={`text-2xl text-yellow-600`}>750+</span>
              </div>
              <div className='icon flex items-center text-xl'>
                <FontAwesomeIcon icon={faCar} />
              </div>
            </div>
            <div className={`p-4 md:w-[24%] rounded-2xl flex justify-between text-center ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'}`}>

              <div className="tile-card ">
                <span className='text-lg'>Daily trips</span>  <br /> <span className='text-2xl text-yellow-600'>1650+</span>
              </div>
              <div className='icon flex items-center text-2xl'>
                <GiSteeringWheel />
              </div>
            </div>
            <div className={`p-4 md:w-[24%] rounded-2xl flex justify-between text-center ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'}`}>

              <div className="tile-card ">
                <span className='text-lg'>Client Annually</span>  <br /> <span className='text-2xl text-yellow-600'>85+</span>
              </div>
              <div className='icon flex items-center text-xl'>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className={`p-4 md:w-[24%] rounded-2xl flex justify-between text-center ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'}`}>
              <div className="tile-card ">
                <span className='text-lg'>Kilometers Daily</span>  <br /> <span className='text-2xl text-yellow-600'>2167+</span>
              </div>
              <div className='icon flex items-center text-xl'>
                <FaTachometerAlt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------  (2-Row ) ------------------------ */}
      <section className="text-gray-600 body-font mt-5">
        <div className=" px-5 py-5 mx-auto ">
          <div className="flex flex-wrap -m-4 gap-1 justify-around ">
            <div className={`p-4 md:w-[49%] h-[50vh] rounded-2xl flex justify-between text-center ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'} `}>

              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data1}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,

                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className={`p-4 md:w-[49%] h-[50vh] rounded-2xl flex justify-between text-center ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'} `}>

              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={data2}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------  (3-Row ) ------------------------ */}
      <section className=" body-font mt-5 flex">
        <div className="flex flex-wrap justify-around w-[49%]">
          <div className={`p-4 md:w-full  flex flex-col gap-5 rounded-2xl ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'} `}>

            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-base-200">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap   gap-2 px-3  mx-auto w-[49%] ">
          <div className={`p-4 md:w-[49%]   flex flex-col gap-5 rounded-2xl ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'} `}>
            <span className=' text-2xl p-4'>Top recomndation</span>
            <div className="car-img  ">
              <img src={car} alt="" className='w-full h-full' />
            </div>

          </div>
          <div className={`p-4 md:w-[49%]  flex flex-col gap-5 rounded-2xl ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'} `}>

            <span className=' text-2xl p-4'>Top recomndation</span>
            <div className="car-img  ">
              <img src={car} alt="" className='w-full h-full' />
            </div>

          </div>
          <div className={`p-4 md:w-[49%]   flex flex-col gap-5 rounded-2xl ${currentTheme === 'dark' ? 'bg-[#1e293b]  text-white' : 'bg-white text-black'} `}>

            <span className=' text-2xl p-4'>Top recomndation</span>
            <div className="car-img  ">
              <img src={car} alt="" className='w-full h-full' />
            </div>

          </div>
        </div>
      </section>

    </>


  )
}

export default Dashboard

