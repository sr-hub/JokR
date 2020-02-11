# Blog Client: Blog Application

This blog application allows users to read others' blog posts, author their own, and leave comments to further the discussion on their favorite posts.

![JokR Splash Page](images/splash.png)
![Joke](images/joke.png)

## Important Links

- [API Repo](https://obscure-peak-32326.herokuapp.com/)
- [Deployed API](https://github.com/sr-hub/JokR-api/)
- [Deployed Client](https://sr-hub.github.io/JokR-front-end/#/)

## Planning Documents
- [Wireframes and User Stories (and ERDs)] (https://imgur.com/a/0QtmppG)

## Planning Process

After determining my resource structure for the back end (as documented in the very simple ERD) and initial goals (by using the user stories and wireframes), I aimed to complete the user authentication and single-resource quickly. In this case, the authentication process for the user was included in the template used, which took care of that set of initials goals. After, I worked on a page to display all jokes, since that would act as an easily-visible way to check whether or not the GET (show, all users) requests, POST (create, authenticated user function) requests, DELETE (destroy, authenticated user function) requests, and PATCH (edit, authenticated user function) requests all worked. I used axios to send these requests to the back end.

After the successful implementation of the first resource (jokes, created by the user), I created a new view that allowed users to make an axios request to a public "dad-joke" api (icanhazdadjoke.com). The view then displays the joke after the call is made.

The intended next steps are to create a favorites resource, so that a user can add both the user-generated, and later the api-provided, jokes to their favorites list.

The long-term goal is to integrate another service so that, from the individual joke-view, an authenticated use can share (button) that joke with a friend (prompted for e-mail or sms).

### Technologies Used

- React
- HTML/CSS
- Bootstrap
- Javascript


### Unsolved Problems

- Styling
- Favorites
- More joke APIs; aggregating
- Share
