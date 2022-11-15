import { BiCopyright } from "react-icons/bi";
import { BsInstagram, BsFacebook, BsGoogle } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="w-full bg-green-500">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 justify-between items-center p-4">
          <div className="flex flex-col sm:flex-row gap-2 justify-between  w-full">
            <div className="order-1">
              <div className="flex flex-col text-center sm:text-start gap-2">
                <span className="text-white font-normal underline cursor-pointer">
                  Trabalhe conosco
                </span>

                <span className="text-white font-normal underline cursor-pointer">
                  <a href="sobre">Sobre nós</a>
                </span>
              </div>
            </div>

            <div className="sm:order-2 flex gap-3 items-center justify-center">
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

          <hr className="w-full bg-white" />

          <div>
            <h6 className="text-white text-center flex items-center gap-1">
              <BiCopyright className="hidden sm:inline" />
              2022 Company, Inc. All rights reserved.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
