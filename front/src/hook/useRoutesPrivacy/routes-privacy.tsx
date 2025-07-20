'use client'
import React from "react";
import useRoutesPrivacy from "./useRoutesPrivacy";
import Loader from "@/components/ui/loader/loader";

const RoutesPrivacy = ({ children }: { children: React.ReactNode }) => {
const {loading} = useRoutesPrivacy();

if (loading) {
  return (
    <div className="w-screen h-screen justify-center flex items-center">
      <Loader />
    </div>
  );
}

return <>{children}</>;
};

export default RoutesPrivacy;
