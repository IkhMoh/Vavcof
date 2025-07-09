import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loading = () => {
  return (
    <div>
      <div className="  rounded-md shadow-xs  transition-all duration-300  w-[400px] ">
        <div className="   h-[400px] w-[500px]">
          {/* <div className="flex "> */}

          <Skeleton className="max-w-[280px] h-[340px]" />

          <div className="   justify-between  items-start">
            <Skeleton className="max-h-12 max-w-28" />

            <Skeleton className="max-h-12 max-w-20" />

            <Skeleton className="max-h-12 max-w-24" />

            <Skeleton className="max-h-12 max-w-12" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default loading;
