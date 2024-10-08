
interface Props {
  id: string;
  title: string;
  url: string;
}

function Item({ id, title, url }:Props) {
  return (
    <>
      <a href={url} target='_blank'>      
        <img
        src={url}
        alt={title}
        loading='lazy'
        className={`border border-black transition duration-200 hover:transform hover:scale-[1.05] 
        rounded-[20px] cursor-pointer w-[85px] h-[80px] 2xl:w-[100px]`}
        />
      </a>
    </>
  );
}

export default Item;
