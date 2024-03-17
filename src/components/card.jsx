
1

const Card = ({title, id}) => {
  return (
    <div className="py-[25px]  px-[10px] flex items-center flex-col  text-center w-[300px] shadow-lg bg-gray-800 rounded">
      <h2 className="text-white">{title}</h2>
      <p className="text-white">{id}</p>
      <button className="border text-white bg-gray-800 rounded mt-[10px] py-[7px] px-[15px]">more</button>
    </div>
  )
}

export default Card
