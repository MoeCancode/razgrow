import React from 'react'
import { useState } from 'react'

const Navbar = ({currentPage, handlePageChange}) => {
    console.log(currentPage);

  return (
    <div className="navbar bg-[#171717]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><button
        className={currentPage === "tiktok" ? "bg-orange-700" : ""} 
        onClick={() => handlePageChange("tiktok")}>
            TikTok
            </button></li>
        
        <li><button
        className={currentPage === "instagram" ? "bg-[#9f1f93]" : ""} 
        onClick={() => handlePageChange("instagram")}>
            Instagram
            </button></li>
      </ul>
    </div>
    <button className="btn btn-ghost normal-case text-xl">RazGrow</button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li ><button
      className={currentPage === "tiktok" ? "bg-orange-700" : ""} 
      onClick={() => handlePageChange("tiktok")}>
        TikTok
        </button></li>
      
      <li><button 
      className={currentPage === "instagram" ? "bg-[#9f1f93]" : ""}
      onClick={() => handlePageChange("instagram")}>
        Instagram
        </button></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn bg-red-700">Get started</button>
  </div>
</div>
  )
}

export default Navbar