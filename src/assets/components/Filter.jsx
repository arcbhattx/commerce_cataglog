import { useState } from "react";

function Filter({ onFilterChange }) {

  const [open, setOpen] = useState(false);

  // List of filter options
  const options = ["All Categories", "Apparel", "Electronics", "Accessories"];

  return (
    <div className="w-full flex justify-end pt-6 pr-6">
      <div className="relative inline-block text-left">

        {/* Filter Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-md font-mono font-bold text-black border-2 p-2 border-black bg-white hover:bg-gray-100 transition"
        >
          Filter ▼
        </button>

        {/* Open Dropdown if modal is set to open  */}
        {open && (
          <div className="absolute top-12 right-0 w-40 bg-white border border-black shadow-lg z-10">

            {options.map((option) => (
              
              <button

                key={option}
                onClick={() => {
                  onFilterChange(option); // tell parent which was selected
                  setOpen(false); // close dropdown
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 font-mono"

              >

                {option}

              </button>
            ))}


          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
