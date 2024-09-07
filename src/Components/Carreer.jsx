import React from 'react'
import hiringPost from "../assets/hiring post.jpg"
import hiringVideo from "../assets/HIRING REEL .mp4"
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <div>

      <div className='py-6 flex justify-center items-center flex-wrap gap-4'>

        {/* Relationship Manager */}
        <Link to="/job/relationship-manager" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Relationship Manager
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
            </p>
          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Apply Now
            </button>
          </div>
        </Link>

        {/* Business Development Executive */}
        <Link to="/job/business-development-executive" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Business Development Executive (Female)
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
            </p>
          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Apply Now
            </button>
          </div>
        </Link>

        {/* Video Host */}
        <Link to="/job/video-host" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Video Host ( Females )
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
            </p>
          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Apply Now
            </button>
          </div>
        </Link>

        {/* Sales Team */}
        <Link to="/job/sales-team" className="relative flex flex-col bg-white shadow-sm border-slate-200 w-96 h-72 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl cursor-pointer">
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Sales Operation Coordinator Team
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
            </p>
          </div>
          <div className="p-4">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Apply Now
            </button>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Career





































