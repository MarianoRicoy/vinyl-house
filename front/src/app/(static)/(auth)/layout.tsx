import { FC } from "react";
import { TbVinyl } from "react-icons/tb";

interface LayoutMainAuthProps {
  children: React.ReactNode;
}

const LayoutMainAuth: FC<LayoutMainAuthProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Izquierda: fondo blanco con card */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-slate-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse gap-1">
            <TbVinyl className=" h-10 text-primary-500" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              The Vinyl House
            </span>
          </div>
          {children}
        </div>
      </div>

      {/* Derecha: imagen de fondo */}
      <div className="hidden md:block w-1/2 h-screen">
        <img
          src="/fondoViniloII.jpg"
          alt="Auth"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LayoutMainAuth;
