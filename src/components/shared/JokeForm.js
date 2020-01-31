import React from 'react'
import { Link } from 'react-router-dom'

const JokeForm = ({ joke, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Title</label>
      <input
        className="form-control"
        placeholder="Bar Joke"
        value={joke.title}
        name="title"
        aria-describedby="inputGroup-sizing-sm"
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label>Text</label>
      <input
        className="form-control"
        placeholder="Two ducks walk into a bar..."
        value={joke.text}
        name="text"
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        onChange={handleChange}
      />
    </div>
    <button type="submit" className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" autoComplete="off">Submit</button>
    <Link to={cancelPath}>
      <button className="btn btn-outline-secondary" data-toggle="button" aria-pressed="false" autoComplete="off">Cancel</button>
    </Link>
  </form>
)

export default JokeForm
