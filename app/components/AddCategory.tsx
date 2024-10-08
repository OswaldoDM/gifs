import Grid from "./Grid";

interface Props {
  searchParams: { category?: string };
}

const AddCategory = ({ searchParams }: Props) => {

  const category = searchParams.category || 'The Simpsons'; 

  return (
    <>
      <div className="container mx-auto px-8 lg:px-12 mt-14 ">
        <h1 className="relative font-black text-7xl text-center sm:text-left mb-5 sm:mb-7">
          Mighty Gifs
          <div className='absolute inset-0 opacity-20 left-24 sm:left-16 w-16 h-20 bg-[#ff5b5b] rounded-full'></div>
          <div className='absolute inset-0 opacity-20 left-14 top-10 sm:left-5 sm:top-8 w-16 h-16 bg-[#8f2aff] rounded-full'></div>
          <div className='absolute inset-0 opacity-20 left-10 -top-4 sm:left-5 sm:-top-5 w-20 h-20 bg-[#00c6ff] rounded-full'></div>
          <div className='absolute inset-0 opacity-20 left-5 top-12 sm:top-14 sm:left-0 w-12 h-10 bg-[#fff151] rounded-full'></div>          
          <div className='absolute inset-0 opacity-20 left-8 top-4 sm:-left-2 sm:top-0  w-12 h-12 bg-[#00ff8f] rounded-full'></div>
        </h1>
        
        <form className="relative" method="GET"> 
          <div className="relative w-full"> 
            <div className="absolute px-4 py-3 text-gray-300">
              <svg
                className='w-8 h-8 md:w-12 md:h-12'
                fill='none'
                height='24'
                shapeRendering='geometricPrecision'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                width='24'
              >
                <path d='M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z'></path>
                <path d='M16 16l4.5 4.5'></path>
              </svg>
            </div>
            <input
              type="text"
              name="category" // Este input enviará el valor de la categoría como query param
              placeholder="Search for a Gif"
              defaultValue={searchParams.category} // Si existe una categoría, muestra su valor
              className={`z-10 block w-full 
              p-4 md:p-6 pl-14 md:pl-20 
              text-base md:text-xl font-bold 
                bg-white border border-gray-300 rounded-3xl 
              outline-none appearance-none 
              hover:shadow-lg 
              focus:shadow-blue-100 focus:border-blue-300`}                
            />
          </div>
        </form>
        <h5 className="text-[11px] pl-5 mt-1">*Example: The Simpsons</h5>
      </div>      
      <Grid category={category} />
    </>
  );
};

export default AddCategory;

