import React from 'react'
import { Link } from 'react-router-dom'

const JokeForm = ({ joke, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="Bar Joke"
      value={joke.title}
      name="title"
      onChange={handleChange}
    />

    <label>Text</label>
    <input
      placeholder="Two ducks walk into a bar..."
      value={joke.text}
      name="director"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default JokeForm
