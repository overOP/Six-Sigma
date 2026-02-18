import { Users } from "lucide-react"

const Years = () => {
  return (
    <div className="w-60 h-20 flex items-center space-x-5 rounded-full bg-gray-100 p-6 shadow-md">
        <Users className="w-12 h-12 text-red-500" />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800">10+ Years</h2>
        <p className="text-gray-400 text-sm">of Experience</p>
      </div>
    </div>
  )
}

export default Years
