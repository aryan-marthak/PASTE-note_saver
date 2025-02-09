import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useParams } from "react-router-dom";

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log(paste)

  return (
    <div>
      <div className="flex place-content-between flex-row gap-7">
        <input
          disabled
          className="rounded-2xl mt-2 p-2 w-[66%] pl-4"
          type="text"
          placeholder="enter title here"
          value={paste.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button onClick={createPaste} className="rounded-2xl mt-2 p-2">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>
      <div className="mt-8">
        <textarea
          disabled
          className=" rounded-2xl mt-4 min-w-[500px] p-4"
          value={paste.content}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
