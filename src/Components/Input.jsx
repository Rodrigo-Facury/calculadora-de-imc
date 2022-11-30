export default function Input({ children, id, name, handleChange, defaultValue, dataTestid }) {
  return (
    <label htmlFor={id}>
      { children }
      <input
        className='form-input'
        name={name}
        id={id}
        type='number'
        data-testid={dataTestid}
        onKeyUp={handleChange}
        defaultValue={ defaultValue !== 0 && defaultValue }
      />
    </label>
  )
}