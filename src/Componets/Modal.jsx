import React from "react";

const Modal = ({ isModalOpened, closeModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isModalOpened ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-blue-600 h-96 p-5 text-center rounded shadow-lg md:w-[500px]">
          <h2 className="text-gray-200 text-xl font-bold uppercase  py-6">
            Please Login !!
          </h2>
          <form className="px-4">
            <div>
              <input
                type="email"
                placeholder="asw@gmail.com"
                className="rounded px-8 border-gray-600
                        border-2 mb-3 w-full focus:border-blue-500 outline-none py-2"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter Password"
                className="rounded px-8 border-gray-600
                        border-2 focus:border-blue-500 w-full focus:outline-none mb-4 py-2"
              />
            </div>
            <button className="bg-blue-500 hover:bg-orange-500 font-semibold border-gray-700 mb-4 text-gray-200 px-5 py-2 rounded">
              Login
            </button>
          </form>
          <button
            onClick={closeModal}
            className="bg-gray-300 hover:bg-gray-500 font-semibold text-gray-800  border-gray-700 outline-none px-5 py-2 rounded mt-2"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
