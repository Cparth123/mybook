import Image from "next/image";

const Loader = () => {
  return (
    <>
      <div className="bg-black h-[100vh] flex items-center justify-center">
        <Image
          width={100}
          height={100}
          className="h-[200px] lg:h-auto w-auto "
          src="assets/images/h-man2.png"
          alt="emty"
        />
        <div className="loader-avtar h-[200px] lg:h-auto w-auto "></div>
      </div>
    </>
  );
};
export default Loader;
