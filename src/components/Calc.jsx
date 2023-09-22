import { useState } from "react"
import ButtonList from "./ButtonList"
import Input from "./Input"

const Calc = () => {
    const [input, setInput] = useState(0);
  const toInput = (value) =>{
    try{
    if(value==="AC")setInput(0)
    else if(value==="=")setInput(eval(input))
    else if(input=='0' || input=='Error')setInput(value)
    else setInput(input+value)
    // console.log(value);
    }
    catch(e){
      setInput("Error")
    }
  }
  return (
    <div className="calc">
        <Input ip={input}/>
        <ButtonList fn={toInput}/>
    </div>
  )
}

export default Calc