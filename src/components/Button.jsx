const Button = ({value,fn}) => {
  return (
    <>
    {value=="=" && <button onClick={(e)=>fn(value)} className="btn eval">{value}</button>}
    {value!="=" && <button onClick={(e)=>fn(value)} className="btn">{value}</button>}
    </>
  )
}

export default Button