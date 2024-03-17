import useGetTodos from '../service/query/useGetTodos'
import Card from '../components/card';
import React from 'react';
import useDebounce from '../hook/useDebounce';
import Skeleton from 'react-loading-skeleton';

const Search = () => {
  const [input , setInput] = React.useState("")
  const value = useDebounce(input)
  const {data, isLoading} = useGetTodos(value);
  return (
    <>
    <div className="container">
      <div className='py-3'>
         <input
         placeholder='...search'
         className='border-4 p-3 w-full'
         onChange={(e) => setInput(e.target.value)}
         value={input}
          type="text" />
      </div>
        {isLoading? (
          <Skeleton height={"100px"}  count={6}/>
        ): 
        <div className='grid grid-cols-4 gap-[20px] my-[50px]'>
          {
          data?.map((item)=> 
          <Card
          key={item.id}
          {...item}
          />)
        }
        </div>
        }
      </div>
    </>
  )
}

export default Search
