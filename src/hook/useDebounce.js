import React from "react";

export default function useDebounce(value, delay = 500){
    const [debounceValue, setDebounceValue] = React.useState(value)

    React.useEffect(()=> {
        const handler = setTimeout(()=> {
            setDebounceValue(value)
        },delay)

        return ()=> {
            clearTimeout(handler);
        }
    },[delay,value])

    return debounceValue;
}