import React from 'react'
// note how we're passing 'props' as an argument into our component
// this allows us to define component-level properties similar to HTML attributes 
const Fruit = (props) => {
    console.log('This component works')
    // props can be used anywhere in your code
    console.log(props.name,props.color,props.type)
return(
<div>
<span>This is my first fruit component.</span>
 {/* Here we are defining how we want to render our props */}
<h2>{props.name}</h2>
<h2 style={{color:props.color}}>props.color</h2>
<h2>{props.type}</h2>
</div>
)
     
}
export default Fruit