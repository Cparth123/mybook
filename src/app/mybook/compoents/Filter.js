import { Save } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";

function Filter({ savabtn = true, SetValue }) {
  const option = ["day", "15 day", "monthly", "Yearly"];
  const [state, setState] = useState("day".toLocaleLowerCase());
  const [showmodel, setshowmodel] = useState(false);

  // Use ref to track the dropdown element
  const dropdownRef = useRef(null);

  // Handle filtering
  const hadlingfilter = (item) => {
    setState(item);
    if (SetValue) {
      SetValue(item);
    }
    setshowmodel(false); // Close the modal after selection
  };

  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowmodel(false); // Close the modal if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex gap-2 items-center" ref={dropdownRef}>
      {/* Button to toggle dropdown */}
      <button
        onClick={() => setshowmodel(!showmodel)}
        className="shadow-lightmode dark:shadow-customshadow w-full p-2 rounded-md mb-2"
      >
        {state}
      </button>

      {/* Save button (optional) */}
      {savabtn && (
        <button className="shadow-lightmode dark:shadow-customshadow active:scale-95 p-2 rounded-md mb-2">
          <Save />
        </button>
      )}

      {/* Dropdown modal */}
      {showmodel && (
        <div className="absolute top-14 left-0 shadow-lightmode dark:shadow-customshadow bg-lightmode  dark:bg-darkmode w-full rounded-md p-4">
          <ul>
            {option.map((item, index) => (
              <li
                onClick={() => hadlingfilter(item)}
                key={index}
                className="font-bold text-center lowercase hover:shadow-buttonclick active:scale-90 my-1 cursor-pointer rounded-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;
