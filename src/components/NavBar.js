import React from "react";

const NavBar = (props) => {
    const {page, setPage} =props;
  return (
    <div className="h-[116px] flex justify-center items-center p-8 w-full ">
      <div className="p-4 bg-zinc-100 w-full flex justify-between items-center z-[20]">
        <div className="flex-2 uppercase">
          <ul className="flex gap-3 items-center justify-center text-sm">
            <li onClick={()=>setPage('home')} className={`${page=='home'&&'text-[#c02411]'}`}>Home</li>
            <li onClick={()=>setPage('about')} className={`${page=='about'&&'text-[#c02411]'}`}>About</li>
            <li onClick={()=>setPage('services')} className={`${page=='services'&&'text-[#c02411]'}`}>Services</li>
            <li onClick={()=>setPage('gallery')} className={`${page=='gallery'&&'text-[#c02411]'}`}>Gallery</li>
            <li onClick={()=>setPage('faq')} className={`${page=='faq'&&'text-[#c02411]'}`}>FAQ & Pricing</li>
            <li onClick={()=>setPage('contact')} className={`${page=='contact'&&'text-[#c02411]'}`}>Contact</li>
          </ul>
        </div>
        <div className="flex-1 text-center text-xl">GeetaFabs</div>
        <div className="flex-1 text-right">Share</div>
      </div>
    </div>
  );
};

export default NavBar;
