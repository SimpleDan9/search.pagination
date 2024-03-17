import Card from '../components/card'
import UseGetTodo2 from '../service/query/useGetTodo2'
import Skeleton from 'react-loading-skeleton'
import React from 'react'

const Pagination = () => {
    const [page, setPage] = React.useState(1)
    const { data, isLoading } = UseGetTodo2(page)
    const options = Math.floor(data?.dataSize / data?.limit)
    console.log(options)
    return (
        <div>
            <div className=''>
                {isLoading ? (
                    <Skeleton height={"100px"} count={6} />
                ) :
                    <div className='grid grid-cols-4 gap-[20px] my-[50px]'>
                        {
                            data.data?.map((item) =>
                                <Card
                                    key={item.id}
                                    {...item}
                                />)
                        }
                    </div>
                }
            </div>
            <div className='flex items-center justify-center gap-[10px]'>
            <i class="fa-solid fa-chevron-left"></i>
                <div className='flex justify-center gap-[10px]'>

                    {
                        Array(options ? options : 0).fill(null).map((item, i) =>
                            <button onClick={() => setPage(i + 1)}
                                className={`p-3 bg-gray-800 text-white ${page === i + 1 ? "bg-green-500" : "bg-gray-800"}`}
                                key={i}>{i + 1}</button>)
                    }
                </div>
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}

export default Pagination
