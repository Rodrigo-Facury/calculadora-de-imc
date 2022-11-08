export default function Input({ children, id, name, handleChange }) {
  return (
    <label htmlFor={id}>
      { children }
      <input
        className='form-input'
        name={name}
        id={id}
        type='number'
        onKeyUp={handleChange}
      />
    </label>
  )
}