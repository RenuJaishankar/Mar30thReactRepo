import React from 'react'
const Emp = (props) => {
console.log(props.id,props.name,props.age)
return(
  <div>
  <span>This is my first component about Employees.</span>
<h1>{props.id}</h1>
<h2>{props.name}</h2>
<h2>{props.age}</h2>

 </div>
  
    )

}
export default Emp