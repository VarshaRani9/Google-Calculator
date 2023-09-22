const Input = ({ip}) => {
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <input value={ip} className="input-box" type="text" placeholder="0"></input>
        </form>
    </div>
  )
}

export default Input

// inputText = eval(inputField.value);