const Field = ({
  index,
  className,
  type,
  value,
  name,
  onChange,
  placeholder,
  min
}) => {
  
  const handleChange = (evt) => {
    
    onChange({
    name,
    value: evt.target.value
    }, index)
    // console.log('inputchange', {
    //   name,
    //   value: evt.target.value
    //   } )
  }
  
  return (
    <input
    className={className}
    type={type}
    value={value}
    name={name}
    min={min}
    onChange={handleChange}
    placeholder={placeholder}
  />
  )
}

export default Field;