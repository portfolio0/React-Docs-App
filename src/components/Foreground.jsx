import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  // const data = [
  //   {
  //     desc: "lorem is the automated text generator used in programming languages",
  //     filesize: ".9mb",
  //     close: false,
  //     tag: { isopen: false, tagtitle: "Download Now", tagcolor: "green" },
  //   },
  //   {
  //     desc: "lorem is the automated text generator used in programming languages",
  //     filesize: ".9mb",
  //     close: true,
  //     tag: { isopen: true, tagtitle: "Download Now", tagcolor: "red" },
  //   },
  //   {
  //     desc: "lorem is the automated text generator used in programming languages",
  //     filesize: ".9mb",
  //     close: false,
  //     tag: { isopen: false, tagtitle: "Download Now", tagcolor: "green" },
  //   },
  // ];
  const data = [
    {
      desc: "Placeholder text is widely used for UI and print design templates.",
      filesize: "1.2mb",
      close: true,
      tag: { isopen: true, tagtitle: "Access File", tagcolor: "blue" },
    },
    {
      desc: "Sample content helps in visualizing design layouts during development.",
      filesize: "2.5mb",
      close: false,
      tag: { isopen: true, tagtitle: "Preview", tagcolor: "green" },
    },
    {
      desc: "Generating dummy text simplifies the testing of layouts and formats.",
      filesize: "1.8mb",
      close: true,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "blue" },
    },
    {
      desc: "Placeholder content can be a great way to experiment with typography.",
      filesize: "3.4mb",
      close: false,
      tag: { isopen: true, tagtitle: "View Details", tagcolor: "green" },
    },
    {
      desc: "Using realistic text samples makes prototypes feel more authentic.",
      filesize: "0.7mb",
      close: false,
      tag: { isopen: true, tagtitle: "Get File", tagcolor: "blue" },
    },
    {
      desc: "Dummy text allows designers to focus on aesthetics without distractions.",
      filesize: "4.1mb",
      close: false,
      tag: { isopen: true, tagtitle: "Start Download", tagcolor: "green" },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className=" fixed top left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 "
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
