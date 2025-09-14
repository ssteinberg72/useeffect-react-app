 import React, { memo, useRef } from 'react'

const Count = ( {name})  => {

  let refval = useRef(0)
  return (

  //  I only want to show this component only once or whenver we want 
     <>
     <div>I want to render it only once {name} </div>
     <div>Unused Component : {refval.current++} </div>
     </>
  )
}


// I wrap this component inside memo so it will prevent from unnecarry rerenders


export default memo(Count)