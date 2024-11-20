import { useState } from "react";

export default function Card_2() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };
  const handleDecline = () => {
    setIsVisible(false);
  };
  const handleReset = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex justify-center  mb-10">
      {isVisible ? (
        <div className="">
          <div className="bg-gradient-to-bl from-sky-600 to-sky-800 rounded-lg overflow-hidden  shadow-xl max-w-sm">
            <div className="p-4">
              <h2 className="text-xl text-white mb-2">Hello World!</h2>
              <p className=" text-white text-sm mb-5">
                This website uses cookies to enhance user experience and to
                analyze performance and traffic on our website.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={handleAccept}
                  className="text-white text-md  font-bold py-2 px-4 mx-1 rounded hover:bg-black/25 hover:rounded duration-500"
                >
                  Accept
                </button>
                <button
                  onClick={handleDecline}
                  className="text-white text-md font-bold py-2 px-4 mx-1 rounded hover:bg-black/25 hover:rounded duration-500"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="bg-gradient-to-br from-indigo-400 to-indigo-800 text-white font-bold px-4 py-2 rounded hover:scale-110  hover:bg-gradient-to-tl hover:from-indigo-800 hover:to-indigo-400 duration-500"
        onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}
