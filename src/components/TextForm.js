import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("convert to uppercase!","success");
    }

    const handleLowClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("convert to lowercase!","success");
    }

    const handleClearClick = ()=>{
       
        let newtext = "";

        setText(newtext);
        props.showAlert("Clear!","success");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!","success");
     
    }

    const handleExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed extra space!","success")
    }


     
    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
        
    }
   
    const [text, setText]= useState('');
  
  return (
    <>
<div className='container' style={{color: props.mode === 'dark'?'white':'#101e55'}}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'#101e55'}} id="myBox"  rows="8" ></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Space</button>
</div>

<div className="container my-3" style={{color: props.mode === 'dark'?'white':'#101e55'}}>
    <h1>Your Text summary</h1>
    <p>{text.length>0?text.split(" ").length:"0"} words and  {text.length} char</p>
    <p>{0.008 * text.split(" ").length} minutes to take read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter sometext to preview it here"}</p> 
</div>
</>

  )
}
