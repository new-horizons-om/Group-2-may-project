import { useTime } from "../../utils/time"
import { FaPlus, FaFile } from "react-icons/fa"



const Heading = ({ setAction }) => {
  const time = useTime()
  return (
    <div className="grid lg:grid-cols-3">

      <div className="space-y-1">
        <h1 className="text-green-800 text-2xl font-bold">Welcome, Guest User</h1>
        <p className="text-sm text-gray-800">Project Manager at New Horizon, Nigeria</p>
      </div>

      {/* Time and Status */}
      <div className="flex gap-20 items-start">
        <div className="w-40">
          <small className="text-gray-800 font-semibold">Active Time</small>
          <h3 className="text-lg font-semibold">{time}</h3>
        </div>
        <div >
          <small className="text-gray-800 font-semibold">Status</small>
          <form className="border border-green-800 rounded-sm p-0.5 text-sm">
            <select name="Status" className="text-green-800">
              <option value="working">Working</option>
              <option value="break">Break</option>
              <option value="meeting">Meeting</option>
            </select>
          </form>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-start gap-4">
        <button onClick={() => setAction({ project: true })} className="py-1.5 px-4 rounded-md flex items-center gap-1 bg-green-800 text-white cursor-pointer hover:opacity-90"><FaFile /> New Project</button>
        <button onClick={() => setAction({ task: true })} className="py-1.5 px-4 rounded-md flex items-center gap-1 bg-blue-800 text-white cursor-pointer hover:opacity-90"><FaPlus /> Add New Task</button>
      </div>
    </div>
  )
}

export default Heading
