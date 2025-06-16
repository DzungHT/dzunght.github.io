import React, { useEffect, useState } from "react";

const Loader: React.FC = () => {
  const [
    isLoading,
     setIsLoading
  ] = useState(true);

  useEffect(() => {
    // Simulate window.onload
    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Portfolio filtering logic using Isotope or similar (optional plugin)
      // This part should be implemented using refs or libraries like react-isotope if needed.
    }, 1000); // simulate delay
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-base02">
      <div className="relative w-[200px] h-[200px]">
        <div className="absolute border-[4px] border-pink-500 rounded-full animate-loader box-content"></div>
        <div className="absolute border-[4px] border-teal-500 rounded-full animate-loader animation-delay-[-0.5s] box-content"></div>
      </div>
    </div>
  );
};

export default Loader;
