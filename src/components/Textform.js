import React ,{useState}from 'react'

export default function Textform(props) {
  const handleUPcase=()=>{
    // let newText=text.toUpperCase()
    // setText(newText)
    setText(text.toUpperCase())
  }
  const handleLPcase=()=>{
    setText(text.toLowerCase())
  }

  const handleCapcase=()=>{
    setText(
      text.toLowerCase()
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
      .join(" "))
  }

  const handleTogcase=()=>{
    setText(
      text.toUpperCase()
      .split(" ")
      .map((e) => e.charAt(0).toLowerCase() + e.substring(1))
      .join(" "))
  }

  const handleClear=()=>{
    setText("")
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

  const[text,setText]=useState('')
  return (
    <>
    <div className="contaniner" style={{color:props.mode==='dark'?'white':'black'}}>
      <h4>{props.heading}</h4>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#3c434e96':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="box" rows="11"></textarea>
        </div>
        <button className="btn btn-outline-info" onClick={handleUPcase}>UPPER CASE</button>
        <button className="btn btn-outline-info mx-3" onClick={handleLPcase}>lower case</button>
        <button className="btn btn-outline-info" onClick={handleCapcase}>Capitalize Case</button>
        <button className="btn btn-outline-info mx-3" onClick={handleTogcase}>tOOGLE cASE</button>
        <button className="btn btn-outline-info" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-outline-info mx-3" onClick={handleClear}>Clear</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008*text.split(" ").length}</b> minutes</p>
    </div>
    </>
  )
}
