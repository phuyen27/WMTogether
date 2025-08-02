import React, { useEffect } from "react";

const ToastMessage = ({ message, duration = 4000, onClose }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      className="fixed top-6 right-6 bg-red-600 text-white px-5 py-3 rounded-lg shadow-lg z-[9999]
        animate-slide-in transition-all duration-500 ease-in-out"
    >
      {message}
    </div>
  );
};

export default ToastMessage;
