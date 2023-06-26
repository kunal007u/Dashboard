import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Store';
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

const Users = () => {

  // ---------------------------Global UseStates --------------------------- //
  const [active, setActive] = React.useState(0);
  
  // --------------------------- UseSelectors --------------------------- //
  const currentTheme = useSelector((state: RootState) => state.CurrentTheme.theme);

  // --------------------------- Table --------------------------- //
  const TABLE_HEAD = ["No.", "Name", "Email", "Phone", "Department", "Role", "Actions"];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];

  // --------------------------- Pagination Function --------------------------- //
  const totalPages = Math.ceil(TABLE_ROWS.length / 5);

  const next = () => {
    if (active === totalPages - 1) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 0) return;
    setActive(active - 1);
  };

  // --------------------------- Date range Picker Tailwind Functions --------------------------- //

  interface DateRange {
    startDate: Date;
    endDate: Date;
  }

  // Usage:
  // const [value, setValue] = useState<DateRange>({
  //   startDate: new Date(),
  //   endDate: new Date(new Date().setMonth(11)),
  // });
  const [value, setValue] = useState<string | null>(null);
  const handleValueChange = (newValue: DateRange) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  // ------------------------------------------------------------------------------------------------------------ //
  return (

    <>
      {/* -------------------------------- Row - 1  --------------------------------*/}

      <section className="body-font ">
        <div className="container px-5 py-2 mx-auto justify-between ">
          <div className="lg:w-full flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-4xl font-medium title-font ">User</h1>
            <div className='flex gap-4'>

              <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-md">Refresh</button>

              <button className="flex btn items-center px-4 py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform border  rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-md">Create User</button>


            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- Row - 2 (Search Box and Clear buttton) --------------------------------*/}

      <div className={`overflow-scroll  container px-10 py-10 mx-auto justify-between  mt-10 rounded-2xl ${currentTheme === "light" ? "bg-white text-black" : "bg-[#2c384c] "}`}>
        <div className='flex justify-between mb-10  '>
          <div className=" flex  gap-4 w-[80%]">
            <div className='flex relative'>

              <input
                type="email"
                placeholder="Search"
                className={` rounded-md py-2 pl-5 pr-14  ring-4 ring-transparent border placeholder:text-blue-gray-200 text-blue-gray-500 ${currentTheme === "dark" ? "bg-[#1e293b]  text-white" : "bg-white"}`}
              />
              <div className='absolute top-[25%] right-[4%]'>

                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>

            </div>

            <div className="form-control w-[20%] max-w-xs">

              <select className={`select select-bordered ${currentTheme === "dark" ? "bg-[#1e293b]  text-white" : "bg-white"}`}>
                <option disabled selected>All</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings </option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>

            </div>
            <div className='w-[30%]  datepicker '>

              <Datepicker
                value={value}
                onChange={handleValueChange}
                placeholder={'choose Date'}
                primaryColor={"blue"} 
               
              />

            </div>

          </div>
          <div className='flex gap-4 '>

            <button className="flex items-center px-4 py-2 font-medium text-white tracking-wide capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-md">Search</button>

            <button className="flex btn items-center px-4 py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-md">Clear</button>

          </div>
        </div>

        {/* -------------------------------- Row - 3  (Table Start) --------------------------------*/}

        <table className="w-full min-w-max table-auto text-left ">
          <thead className={`bg-${currentTheme}-500`}>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="py-3 px-6 text-left text-sm font-medium  uppercase tracking-wider border-b-2"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {TABLE_ROWS.slice(active * 5, active * 5 + 5).map((row, index) => (
              <tr key={index}>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm ">{index + 1 + active * 5}</div>
                </td>

                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="flex items-center">

                    <div className="ml-4">
                      <div className="text-sm font-medium ">{row.name}</div>
                      <div className="text-sm text-gray-500">{row.job}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm ">example@gmail.com</div>
                  <div className="text-sm ">abc@gmail.com</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    +91 1234567890
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {row.job}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {row.date}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-center flex gap-4 justify-center text-sm font-medium">
                  <a href="/" className={`text-${currentTheme}-500 hover:text-${currentTheme}-900`}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </a>
                  <a href="/" className={`ml-2 text-red-500 hover:text-red-900`}>
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* -------------------------------  Pagenation  -------------------------------*/}
        <div className="flex items-center gap-4 justify-end mt-10">
          <button
            color="blue-gray"
            className="flex items-center gap-2 rounded-full"
            onClick={prev}
          // disabled={active === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <div className="flex items-center gap-2">
            {[...Array(Math.ceil(TABLE_ROWS.length / 5))].map((_, index) => (
              <span
                key={index}
                onClick={() => setActive(index)}
                className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${active === index ? "bg-blue-600 text-white" : "bg-blue-gray-200"
                  }`}
              >
                {index + 1}
              </span>
            ))}
          </div>

          <button
            color="blue-gray"
            className="flex items-center gap-2 rounded-full"
            onClick={next}
            disabled={active === 5}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>

  )
}

export default Users