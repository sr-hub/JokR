Diagram of different views:

![views whiteboard diagram](https://media.git.generalassemb.ly/user/16320/files/92d49b80-41af-11e9-873b-76cf1edcbba4)

---

Code Along for `async` and `await`:

```js
// src/components/routes/Movies.js
// old promise version:
componentDidMount () {
  axios(`${apiUrl}/movies`)
    .then(res => this.setState({ movies: res.data.movies }))
    .catch(console.error)
}
// new async/await version:
async componentDidMount() {
  try {
    const response = await axios(`${apiUrl}/movies`)
    this.setState({movies: response.data.movies})
  } catch (err) {
    console.error(err)
  }
}
```
