import { useState } from "react";

export default function BulbControl() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-40 h-40 rounded-full flex items-center justify-center shadow-lg"
           style={{ backgroundColor: isOn ? "yellow" : "gray" }}>
        💡
      </div>
      <div className="mt-4 flex space-x-4">
        <button 
          onClick={() => setIsOn(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
          Turn On
        </button>
        <button 
          onClick={() => setIsOn(false)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
          Turn Off
        </button>
      </div>
    </div>
  );
}
