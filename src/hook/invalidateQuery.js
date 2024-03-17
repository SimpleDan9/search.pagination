import { client } from "../main"

const invalidateQuery = () => {
    const invalidate = (key)=>{
        client.invalidateQueries({queryKey:[...key]})
    }
  return {invalidate}
}

export default invalidateQuery
