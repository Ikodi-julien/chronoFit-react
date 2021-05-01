const Field = ({
  className,
  type,
  value,
  name,
  onChange,
  placeholder
}) => {
  
  const handleChange = (evt) => {
    
    onChange({
    name,
    value: evt.target.value
    }
  )}
  
  return (
    <input
    className={className}
    type={type}
    value={value}
    name={name}
    onChange={handleChange}
    placeholder={placeholder}
  />
  )
}

export default Field;