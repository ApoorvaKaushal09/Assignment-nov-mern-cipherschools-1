import React from 'react';
import App from './App';
import './Card.css';
let Card= (props) =>{
    return(
<div class="C">
<div class="A" style={{backgroundColor:props.col}}>
    {props.number}
    </div>
<div class="B">
    <button class="aa" onClick={props.plus}>+</button>
    <button class="bb" onClick={props.refresh}><img src="/images/main-qimg-ae92b32bf2255fc758cf0ea8e4b76b18.webp"></img></button>
    <button class="cc" onClick={props.minus}>-</button> 
</div>
</div>

    )
}
export default Card;