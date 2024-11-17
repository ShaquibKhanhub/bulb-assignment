import React, { useState } from "react";

const SwitchAndBulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => setIsOn((on) => !on);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="mb-8">
          <div
            className={`w-24 h-24 rounded-full transition-all duration-300 ${
              isOn ? "bg-yellow-400 shadow-lg shadow-yellow-300" : "bg-gray-400"
            }`}
          ></div>
        </div>

        <button
          onClick={toggleBulb}
          className={`px-6 py-2 text-lg font-semibold text-white rounded ${
            isOn
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          } transition-colors duration-200`}
        >
          {isOn ? "Turn Off" : "Turn On"}
        </button>
      </div>
    </>
  );
};

export default SwitchAndBulb;
