import { getGifs } from "../api/getGifs";
import Item from "./Item";

interface Props {
  category: string;
}

const Grid = async ({ category }:Props) => {

  const gifs = await getGifs(category);

  return (
    <>
      <div className='container mx-auto px-8 sm:px-12 mt-10'>
        <div
        className={`grid grid-cols-4 gap-x-[10px] gap-y-3
        xs:gap-x-0
        sm:grid-cols-6
        md:grid-cols-7
        lg:grid-cols-9
        xl:grid-cols-12 lg:gap-y-2 lg:gap-x-0`}       
        >       
          {gifs.map((gif) => (
            <Item {...gif} key={gif.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
