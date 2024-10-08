import Image from "next/image";
import loader from "@/app/public/loader.svg"

function loading() {
  return (
    <>
      <div className='min-h-screen flex justify-center items-center relative bottom-20'>
        <div>
        <Image
          className='loading'
          src={loader}
          alt='loading'
          width={300}
          height={300}
        />
        <h3 className='text-2xl text-center'>Loading...</h3>
        </div>
      </div>
    </>
  );
}
export default loading;
