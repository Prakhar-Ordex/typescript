import React, { useState } from 'react'


const Form: React.FC = () => {
    const [value,setValue]  = useState<string | null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }
  return (
      <div>
          <div>{ value}</div>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="Enter your name" />
            <input type="submit" value="Submit" />
          </form>
  
    </div>
  )
}

export default Form