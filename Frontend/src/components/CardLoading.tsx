import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardLoading = () => {
  return (
    <div>
      <div className="block  rounded-md shadow-xs  transition-all duration-300  w-[400px] ">
        <div className="my-2 ">
          <Skeleton className="max-w-[280px] h-[340px]" />
        </div>
        <div className="my-2">
          <Skeleton className="max-h-12 max-w-28" />

          <div className=" my-2 ">
            <Skeleton className="max-h-12 max-w-20" />
          </div>
        </div>

        <div className="">
          <div className="">
            <div>
              <div>
                <Skeleton className="max-h-12 max-w-24" />
              </div>
            </div>
            <div className=" ">
              <Skeleton className="max-h-12 max-w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
