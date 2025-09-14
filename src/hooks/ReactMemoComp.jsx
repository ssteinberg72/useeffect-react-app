import React, { useState } from 'react'
import UnusedComponent from './Count'

// Logic
// React memo => it will prevent from unnecerray rerenders and it will only rerender component when it see// changes in the props  p

const ReactMemoComp = () => {
  const [count, setCount] = useState(0);

  const incrementIfEven = () => {
    setCount(prevCount => {
      if (prevCount % 2 === 0) {
        return prevCount + 1;
      }
      return prevCount; // If not even, return the current count without updating
    });
  }; 

return (
    <>
    <div className='m-5'> Even  Count: {count}
    </div>
    <button onClick={()=> setCount(prev => prev+1)} type="button" className="m-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increase</button>
    <button onClick={incrementIfEven} type="button" className="m-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increase if Even</button>
    
    {/* We are not saying this component to render again again because we are not changing any thing but still it will rerender */}<UnusedComponent />

    </>)
}

export default ReactMemoComp