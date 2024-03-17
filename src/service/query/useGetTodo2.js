import { useQuery } from "@tanstack/react-query"
import { request } from "../../config/request"

const UseGetTodo2 = (page=1) => {
  return (
    useQuery({
        queryKey:["todo2",page],
        queryFn : ()=> {
           return  request.get("/todos",{params:{_limit:10,_page:page}}).then((res)=> {
            return {
                data : res.data,
                limit : res.config.params._limit,
                dataSize : res.headers.get("X-Total-Count")
            }
           })
        }
    })
  )
}

export default UseGetTodo2
