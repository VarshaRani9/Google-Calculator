import Button from "./Button"

const ButtonList = ({fn}) => {
    const buttons = ["(",")","%","AC","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]
  return (
    <div className="btn-grid">
        {buttons.map((bt, index)=><Button fn={fn} key={index} value={bt}/>)}
    </div>
  )
}

export default ButtonList