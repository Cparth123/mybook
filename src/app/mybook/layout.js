import React, { lazy } from "react";
import { ToastContainer, toast } from "react-toastify";

const Header = lazy(() => import("./compoents/Header"));
const Loader = lazy(()=>import('./compoents/loader'));

function layout({ children }) {
  return (
    <div className="min-h-[100vh]">
        <Loader />
      {true ? (
        <>
        </>
      ) : (
        <div className="bg-lightmode dark:bg-darkmode">
          <Header />
          <div className="mt-20">{children}</div>
        </div>
      )}
    </div>
  );
}

export default layout;
