'use client'

import Link from "next/link";
import { useState } from "react"


const Card = () => {
  const [name,setName] = useState("")
  console.log(name);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
    <div className="text-center">
      <div className="flex justify-center">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          className="w-12 h-12 mb-4"
        />
      </div>
      <h1 className="text-2xl font-bold">Find Your GitHub Profile</h1>
    </div>

    <form className="flex mt-6 w-full max-w-md flex-col items-center">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="w-[400px] text-center p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    <Link className="w-[100px] mt-4 p-3 text-center bg-blue-500 hover:bg-blue-600 rounded-lg font-bold" href={`/users/${name}`}>Search</Link>

    </form>
  </div>

  )
}

export default Card