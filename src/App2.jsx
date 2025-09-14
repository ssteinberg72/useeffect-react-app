import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import './App.css'

/* import all the icons in Free Solid, Free Regular, and Brands styles */import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// usecallback// usememo , useref , usereducer
// context api and state managment tools like rtk
// react router dom
// project 1

library.add(fas, far, fab)
import React, { useEffect, useState } from 'react'
import ReactMemoComp from './hooks/ReactMemoComp'
// import applelogo from './assets/apple.svg'

const App = () => {
  const [count, setCount] = useState(0)  // count = 0
  const [api , setApi ] = useState('empty ')
  
  function updateCount (){

    //count = 0// 0    =>  0+1   count = 1
    setCount(prev => prev+1)
    console.log('count value modified =>', count)
}

  function updateApi(){
    setApi(prev => prev+'data Updated')
    console.log('Api Updated')}

   /* useEffect(   () => {

    console.log("Mount")
    console.log(" Some kind of Update")//     // On Mount


    return () => {//       // unmount

    console.log("Unmount ")//     }


     },
     // dependencies
   )  // reder every single time (default)// []  => render only once on mount  i.e api calling
    // [count, value] =>nit will render when the depencies changes i.e count+1
*/

   // interval = 1000ms
  // 10s
  clearInterval
  // // Id() { work }
  useEffect(() =>{ console.log('UseEffect Called ')// inteval = 10 sec

return () =>
{    

   // clearInverval ()// clearID()
setCount(0)
console.log('clean up done ')
}
}
, [count,api]) // handlind side effects

const names = ['steven','bill','george','peter','sam'];

  const [name, setName] = useState('Edward');

  const colors = ['red', 'green', 'blue','yellow','purple'];
  const items = colors.map(color => `<li>` + color + `</li>`);
  console.log(items);

  const incrementCount = () => {
  setCount(count + 1); // Increases count by 1
};

const decrementCount = () => {
  // Optional: Add a condition to prevent negative counts
  if (count > 0) {
    setCount(count - 1); // Decreases count by 1
  }
};

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
  // ...
}

  return (


    <>

<ReactMemoComp/>
 <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrease</button>
    </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}<br></br>
          Styling the card ReactJS styling
        </button>
      </div>
    <div>
  <ul>
    {names.map((name,index) => (
    <li className="text-3xl bg-red-500 font-bold underline" key={index}>{name}</li>
  ))}
   </ul>*/
    </div>
 <div className="btn flex items-center justify-center w-[100vw] h-[100vh] gap-10">
<button className='bg-slate-300 px-10 py-5 rounded-xl ' onClick={updateCount}> count update</button><button className='bg-slate-300 px-10 py-5 rounded-xl ' onClick={updateApi}> Update api</button>
</div>
{/* <button title='Update the count '/> */}
</>
)
}

export default App