import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ duration: 0.5, ease: "easeInOut" }}
        className=" flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-400 text-black px-5 py-10 overflow-hidden "
      >
        <FaRegFileLines />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex justify-between py-3 px-8 items-center mb-3">
            <h5>{data.filesize}</h5>
            {data.close ? <IoClose /> : <MdDownloadForOffline />}
          </div>
          {data.tag.isopen && (
            <div
              className={`tag w-full py-4 h-12 flex items-center justify-center ${
                data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
              }`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
