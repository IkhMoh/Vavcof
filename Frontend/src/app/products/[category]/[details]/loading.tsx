import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loading = () => {
  return (
    <div>
      <div className="  rounded-md shadow-xs  transition-all duration-300  w-[400px] ">
        <div className="  h-[400px] w-[500px]">
          <div className=" ">
            <Skeleton className="max-w-[280px] h-[340px]" />
          </div>
          <Skeleton count={3} className="max-h-12 max-w-28" />
        </div>
      </div>
    </div>
  );
};

export default loading;
