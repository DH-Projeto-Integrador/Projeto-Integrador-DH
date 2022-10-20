import { BiCopyright } from "react-icons/bi";
import { BsInstagram, BsFacebook, BsGoogle } from "react-icons/bs";

export function Footer() {
  return (
    <div className="w-full bg-green-500">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center px-4 py-4">
          <div className="">
            <span className="text-white text-center flex items-center gap-1">
              <BiCopyright className="hidden sm:inline" />
              2022 Company, Inc. All rights reserved.
            </span>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <span className="text-white text-xl">
              <a href="#">
                <BsFacebook />
              </a>
            </span>
            <span className="text-white text-xl">
              <a href="#">
                <BsInstagram />
              </a>
            </span>
            <span className="text-white text-xl">
              <a href="#">
                <BsGoogle />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
