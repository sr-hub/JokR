let apiUrl
const apiUrls = {
  production: 'https://jokr-app.herokuapp.com/',
  development: 'https://jokr-app.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
