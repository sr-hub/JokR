let apiUrl
const apiUrls = {
  production: 'https://obscure-peak-32326.herokuapp.com/jokes',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
