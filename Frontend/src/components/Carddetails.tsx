import React from "react";
import Image from "next/image";
type Props = {
  image: any;
  title: string;
  description: string;
  price: number;
  rating: number;
};
const Carddetails = ({ details }: { details: Props }) => {
  const { image, title, description, price, rating } = details;
  console.log(details);
  return (
    <div className="w-full h-full">
      <div className="flex h-full p-2">
        <div className=" h-full ">
          <div className="relative w-[340px] h-[370px] rounded-xl ">
            <Image
              alt=""
              src={
                image
                  ? image[0].url
                  : "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              fill
              className="object-cover"
            />
          </div>
          {/* colors */}
          <div className="h-1/7">
            <div className=" flex gap-1 h-full w-full">
              <form className="w-full h-full">
                <div className="flex flex-wrap justify-start  w-full gap-1 [&:hover_label]:opacity-75 h-full">
                  <div className="flex items-start gap-2 h-full m-1 ">
                    {image.map((img: any) => {
                      console.log(img);
                      return (
                        <div
                          key={img.id}
                          className="relative w-[49px] h-[49px] overflow-hidden"
                        >
                          <Image
                            alt=""
                            src={img.url}
                            fill
                            className="object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-4/6  flex flex-col justify-between items-start p-3">
          <h1 className="text-lg font-bold">{title}</h1>

          <h4 className="text-md ">{description}</h4>
          <div className="flex gap-2 items-center">
            <h1 className="text-md font-bold">Rating:</h1>
            <h1 className="text-lg font-bold">{rating}⭐</h1>
          </div>

          <h1 className="text-3xl font-bold">${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Carddetails;
