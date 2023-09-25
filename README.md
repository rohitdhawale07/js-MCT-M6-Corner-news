# js-MCT-M6-Corner-news
## Hosted Link:- https://rohitdhawale07.github.io/js-MCT-M6-Corner-news/index.html
This is the code of creating a "News Corner" website using html, css and JS.
In this website you can get many types of news like Breaking News Regular News, International News, Sports, Entertainment, Culture, Arts and All News.
simply you can click on any respctive section and explaore the news.
firstly we created html page for home and added news sections dyanamically.
## HTML Code:-
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>News Corner</title>
  </head>
  <body>
    <header>
      <nav class="navbar">
        <div class="navbarBox container">
          <div class="navLeft">
            <a class="navbar-brand">
              <span class="span1">News</span>
              <span class="span2">Corner</span>
            </a>
          </div>

          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Blog</a>
              </li>

              <img
                id="profile-picture"
                src="https://news-corner.netlify.app/images/profile.png"
                alt=""
              />
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <hr />
      </div>
    </header>

    <main>
      <section class="container">
        <div id="categories"></div>
        <div id="spinner" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </section>

      <div>
        <p
          id="error-message"
          class="container text-danger"
          style="display: none"
        >
          Something went wrong, please try again later
        </p>
      </div>

      <section class="container">
        <div id="category-item-count"></div>
        <div id="news-details-container">
          <div id="news-details"></div>
        </div>
      </section>
    </main>

    <script src="./index.js"></script>
  </body>
</html>
```
## CSS Style:-
```
* {
  /* background-color: #f5f5f5; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
}

.navbar {
  background-color: #fff;
  padding: 10px 0;
  background-color: #f5f5f5;
  margin-top: 1rem;
}
.navbarBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  background-color: #f5f5f5;
}
.navbar-brand span {
  border-radius: 6px;
}
.navLeft a {
  background-color: white;
  border-radius: 6px;
  padding: 5px;
}

.navbar-brand .span1 {
  background-color: lightblue;
}
.navbar-brand .span2 {
  background-color: white;
  border-radius: 6px;
}
.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-nav li {
  margin-right: 1rem;
  list-style: none;
  font-size: 1.2rem;
}

.nav-link {
  color: #333;
  transition: color 0.3s ease;
  cursor: pointer;
  color: #7a7a7a;
}

.nav-link:hover {
  color: #007bff;
  border-bottom: 3px solid royalblue;
}

#profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
#categories {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#categories p {
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 600;
  color: #444444;
  transition: color 0.3s ease;
  margin: 5px 0;
  padding: 5px;
}

#categories p:hover {
  color: white;
  background-color: rgb(82, 117, 219);
  border-radius: 6px;
}

#spinner {
  display: none;
  margin: 20px auto;
}

#error-message {
  display: none;
}

#news-details-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 20px;
}

#news-details-container div {
  background-color: white;
  display: flex;
  border-radius: 10px;
}

.itemDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 60%;
  margin: 0 auto;
}
.itemDiv h3 {
  margin-top: 1rem;
  animation: colorChange 3s infinite alternate, scale 1.2s infinite;
}
@keyframes scale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}

@keyframes colorChange {
  0% {
    color: red;
  }
  25% {
    color: blue;
  }
  50% {
    color: green;
  }
  75% {
    color: orange;
  }
  100% {
    color: purple;
  }
}

.dateViewBtnDiv{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.dateViewBtnDiv p{
    margin-right: 3rem;
}

.news-item {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  transition: box-shadow 0.3s ease;
}
.btn{
    border: none;
    color: royalblue;
    background-color: white;
    font-size: 1.1rem;

}
.btn-info {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-info:hover {
  background-color: #0056b3;
}

.modal-content {
  padding: 20px;
  text-align: center;
}

.modal-content img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.modal-content h6 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.modal-content p {
  font-size: 16px;
  margin: 10px 0;
}
```
document.addEventListener("DOMContentLoaded", function () { ... });: This code waits for the HTML document to be fully loaded before executing the JavaScript code inside the event listener. 
This ensures that the JavaScript code doesn't run until the HTML structure is ready.

fetchNewsCategories(): This function is called to initiate the loading of news categories when the page loads.

fetchNewsCategories: This asynchronous function fetches news categories from an API using the fetch function. 
It first checks if there was an error in fetching the data using await res.json(). If successful, 
it calls the displayNewsCategories function to display the categories. If there's an error, it calls the handleFetchError function to handle and display the error.

handleFetchError(error): This function handles fetch errors by displaying an error message and triggering an alert with the error message.

displayNewsCategories(newsCategories): This function takes an array of news categories, creates HTML elements for 
each category, and appends them to the "categories" container in the HTML document.

fetchCategoryDetails(categoryId, categoryName): This function fetches and displays news articles for a specific category. 
It takes the category ID and name as parameters and updates the content accordingly.

toggleSpinner(displayStatus): This function toggles the visibility of a spinner (loading animation) based on the displayStatus parameter.

showItemCount(data, categoryName): This function displays the item count for a category. 
It checks if there are news items for the category and generates a message accordingly.

displayNews(allNews): This function displays news articles for a category. 
It sorts the articles by view count, creates HTML elements for each article, and appends them to the "news-details-container" in the HTML document.

truncateDescription(text): This function shortens long descriptions to 400 characters with an ellipsis (...) to make them more readable.

getInfo(value, valueTypeName): This utility function returns the value if it exists or a message indicating that the value was not found.

displayNewsModal(newsId): This function fetches and displays a single news article in a modal when a user clicks the "Read more" button.

displaySingleNewsModal(newsItem): This function displays the details of a single news article in the "news-details" container. 
It includes information like the title, description, author, date, ratings, and view count.

Initial load of categories: At the end of the code, it triggers the fetchNewsCategories function to load the news categories when the page initially loads.

Overall, this JavaScript code is responsible for fetching, displaying, and handling news categories and articles on the "News Corner" webpage, 
as well as providing error handling for failed API requests.

## JAVASCRIPT Code:-
```
document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch news categories
  let fetchNewsCategories = async () => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`
    );
    const data = await res.json();
    console.log(data);
    // displayNewsCategories(data.data.news_category);
    document.getElementById('error-message').style.display = 'none';
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(response => response.json())
        .then(data => displayNewsCategories(data.data.news_category))
        .catch(error => handleFetchError(error));
  };

//   Function to handle fetch errors
    let handleFetchError = (error) => {
      document.getElementById("error-message").style.display = "block";
      alert(error);
    };

//   Function to display news categories
  function displayNewsCategories(newsCategories) {
    let categoriesContainer = document.getElementById("categories");
    newsCategories.forEach((category) => {
      let categoryDiv = document.createElement("div");
      let categoryLink = document.createElement("p");
      categoryLink.textContent = category.category_name;
      categoryLink.addEventListener("click", () => {
        fetchCategoryDetails(category.category_id, category.category_name);
      });
      categoryDiv.appendChild(categoryLink);
      categoriesContainer.appendChild(categoryDiv);
    });
  }

  // Function to fetch and display news for a specific category
  function fetchCategoryDetails(categoryId, categoryName) {
    toggleSpinner("block");
    document.getElementById("error-message").style.display = "none";
    let categoryIdString = categoryId.toString().padStart(2, "0");
    fetch(
      `https://openapi.programming-hero.com/api/news/category/${categoryIdString}`
    )
      .then((response) => response.json())
      .then((data) => displayCategoryDetails(data.data, categoryName))
      .catch((error) => handleFetchError(error));
  }

  // Function to toggle spinner visibility
  let toggleSpinner = (displayStatus) => {
    document.getElementById("spinner").style.display = displayStatus;
  };

  // Function to display news details for a category
  function displayCategoryDetails(categoryData, categoryName) {
    console.log(categoryData);
    let itemCountContainer = document.getElementById("category-item-count");
    itemCountContainer.innerHTML = "";
    toggleSpinner("none");
    itemCountContainer.innerHTML = showItemCount(categoryData, categoryName);
    displayNews(categoryData);
  }

  let showItemCount = (data, categoryName) => {
    if (data.length < 1) {
      return `No news found for the category of ${categoryName}`;
    } else {
      return `<p class="text-black">${data.length} news found for the category of ${categoryName}</p>`;
    }
  };

  let displayNews = (allNews) => {
    let newsContainer = document.getElementById("news-details-container");
    allNews.sort(function (a, b) {
      return b.total_view - a.total_view;
    });

    newsContainer.innerHTML = "";

    allNews.forEach((singleNews) => {
        console.log(singleNews);
      let newsItem = document.createElement("div");
      let date = singleNews.author.published_date?.split(" ")[0];
      let description = truncateDescription(singleNews.details);

      const imgDiv = document.createElement("div");
      let newsImage = document.createElement("img");
      newsImage.src = singleNews.thumbnail_url;
      newsImage.alt = "related picture of a news";
      imgDiv.appendChild(newsImage);

      const itemDiv = document.createElement("div");
      itemDiv.classList.add("itemDiv");
      let newsTitle = document.createElement("h3");
      newsTitle.className = "text-primary";
      newsTitle.textContent = singleNews.title || "No Title Found";

      let newsDescription = document.createElement("p");
      newsDescription.className = "text-secondary";
      newsDescription.textContent = `${description}`;
      const ID = document.createElement("p")
      ID.innerText = singleNews._id;

      console.log(ID);

      const dateViewBtnDiv = document.createElement("div");
      dateViewBtnDiv.classList.add("dateViewBtnDiv");
    //   console.log(dateViewBtnDiv);
      let authorpic = document.createElement("img");
      authorpic.src = "";
      let authorName = document.createElement("p");
      authorName.textContent = `Author Name: ${
        singleNews.author.name || "No Author Name Found"
      }`;

      let newsDate = document.createElement("p");
      newsDate.textContent = `Date: ${date || "No Date Found"}`;

      let rating = document.createElement("p");
      rating.className = "text-warning";
      rating.textContent = `Rating: ${
        singleNews.rating.number || "No Rating Found"
      }`;

      let ratingQuality = document.createElement("p");
      ratingQuality.className = "text-warning";
      ratingQuality.textContent = `Rating Quality: ${
        singleNews.rating.badge || "No Badge Found"
      }`;

      let totalView = document.createElement("p");
      totalView.textContent = `Total View: ${
        singleNews.total_view || "No Total View Found"
      }`;

      let readMoreButton = document.createElement("a");
      readMoreButton.href=(`./readMore.html?id=${singleNews._id}`)
      readMoreButton.type = "button";
      readMoreButton.className = "btn";
      readMoreButton.textContent = "Read more..";
      readMoreButton.addEventListener("click", () => {
        displayNewsModal(singleNews._id);
      });

      // Append the created elements to the news item container
      itemDiv.appendChild(newsTitle);
      itemDiv.appendChild(newsDescription);
      dateViewBtnDiv.appendChild(authorName);
      dateViewBtnDiv.appendChild(newsDate);
      //   itemDiv.appendChild(rating);
      //   itemDiv.appendChild(ratingQuality);
      dateViewBtnDiv.appendChild(totalView);
      dateViewBtnDiv.appendChild(readMoreButton);
      itemDiv.appendChild(dateViewBtnDiv);

      newsItem.appendChild(imgDiv);
      newsItem.appendChild(itemDiv);

      newsContainer.appendChild(newsItem);
    });
  };

  let truncateDescription = (text) =>
    text.length > 400 ? text.slice(0, 400) + " ..." : text;

  let getInfo = (value, valueTypeName) => value || valueTypeName + " not found";
  

  let displayNewsModal = (newsId) => {
    fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
      .then((response) => response.json())
      .then((data) => displaySingleNewsModal(data.data[0]));
  };

  let displaySingleNewsModal = (newsItem) => {
    console.log(newsItem);
    const newsDetails = document.getElementById("news-details");
    let date = newsItem.author.published_date?.split(" ")[0];

    // Clear previous content inside the newsDetails element
    while (newsDetails.firstChild) {
      newsDetails.removeChild(newsDetails.firstChild);
    }

    // Create elements for each piece of news information
    let profilePicture = document.createElement("img");
    profilePicture.id = "profile-picture";
    profilePicture.src = newsItem.thumbnail_url;
    profilePicture.alt = "profile-picture";

    let newsTitle = document.createElement("h6");
    newsTitle.className = "text-primary";
    newsTitle.textContent = newsItem.title || "No Title Found";

    let newsDescription = document.createElement("p");
    newsDescription.className = "text-secondary";
    newsDescription.textContent = `Description: ${truncateDescription(
      newsItem.details
    )}`;

    let authorName = document.createElement("p");
    authorName.textContent = `Author Name: ${
      newsItem.author.name || "No Author Name Found"
    }`;

    let newsDate = document.createElement("p");
    newsDate.textContent = `Date: ${date || "No Date Found"}`;

    let rating = document.createElement("p");
    rating.className = "text-warning";
    rating.textContent = `Rating: ${
      newsItem.rating.number || "No Rating Found"
    }`;

    let ratingQuality = document.createElement("p");
    ratingQuality.className = "text-warning";
    ratingQuality.textContent = `Rating Quality: ${
      newsItem.rating.badge || "No Badge Found"
    }`;

    let totalView = document.createElement("p");
    totalView.textContent = `Total View: ${
      newsItem.total_view || "No Total View Found"
    }`;

    // Append the created elements to the newsDetails element
    newsDetails.appendChild(profilePicture);
    newsDetails.appendChild(newsTitle);
    newsDetails.appendChild(newsDescription);
    newsDetails.appendChild(authorName);
    newsDetails.appendChild(newsDate);
    newsDetails.appendChild(rating);
    newsDetails.appendChild(ratingQuality);
    newsDetails.appendChild(totalView);
    // console.log(newsDetails);
  };

//   Initial load of categories
  fetchNewsCategories();
});
```

While creating DOM for read more button we created seperate html and js file for perticular read more button.
## HTML Code (read More button):-
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>News Modal</title>
    <link rel="stylesheet" href="./readMore.css" />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header>
      <nav class="navbar">
        <div class="navbarBox container">
          <div class="navLeft">
            <a class="navbar-brand">
              <span class="span1">News</span>
              <span class="span2">Corner</span>
            </a>
          </div>

          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Blog</a>
              </li>

              <img
                id="profile-picture"
                src="https://news-corner.netlify.app/images/profile.png"
                alt=""
              />
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <hr />
      </div>
    </header>

    <div class="modal-container container" id="news-modal">
      <div class="modal-content">
        
        <div id="modal-content"></div>
        <button><a href="./index.html">Go Back</a></button>
      </div>
    </div>

    <script src="./readMore.js"></script>
  </body>
</html>
```
Element Selection:

const modal, const closeModal, and const modalContent are variables used to select elements in the HTML document. 
They represent the modal itself, a close button for the modal, and the content container within the modal, respectively.
loadDetails Function:

This asynchronous function is responsible for loading and displaying the details of a specific news article.
It first retrieves the current URL using window.location.href and creates a URL object (urlObj) to parse the URL.
It checks for the presence of a "id" parameter in the URL using URLSearchParams. If there's no "id" parameter, it redirects the user to the index page ("./index.html").
It then fetches detailed information about the news article using the "id" parameter from the URL and the OpenAPI endpoint.
The fetched data is converted to JSON (await data.json()), and the displayNewsModal function is called to display the article details.
displayNewsModal Function:

This function takes the data of a news article as its parameter and creates HTML elements to display the article details.
It creates a div element to hold the content.
It creates an img element for the news article's thumbnail image.
It creates an h2 element for the news article's title.
It creates a p element for the news article's description.
It creates a div element (divDetails) to hold additional details about the article.
Inside divDetails, it creates p elements for the author's name, publication date, an h4 element for the article's rating, an h4 element
for the rating quality, and a p element for the total view count.
All the created elements are appended to the appropriate parent elements to structure the modal content.
Modal Display:

The modal content is constructed within the modalContent element in the HTML document.
Overall, this code retrieves news article details based on the "id" parameter from the URL and displays them in a modal when the page loads. 
It provides a user-friendly way to view detailed information about a specific news article.

## JAVASCRIPT Code (read more button):-
```
const modal = document.getElementById("news-modal");
const closeModal = document.getElementById("close-modal");
const modalContent = document.getElementById("modal-content");

const loadDetails = async () => {
  // console.log("details loaded");
  const currentPath = window.location.href;
  const urlObj = new URL(currentPath);

  console.log(urlObj);
  const params = new URLSearchParams(urlObj.search);
  if (!params.has("id")) {
    window.location.href = "./index.html";
  }
  const data = await fetch(
    `https://openapi.programming-hero.com/api/news/${params.get(
      "id"
    )}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  const res = await data.json();
  //   console.log(res);
  displayNewsModal(res.data[0]);
};
loadDetails();

async function displayNewsModal(data) {
  // console.log(data);
  const div = document.createElement("div");
  // div.classList.add("");
  const image = document.createElement("img");
  image.src = data.thumbnail_url;

  const title = document.createElement("h2");
  title.innerText = "News Title : " + data.title;

  const disc = document.createElement("p");
  disc.classList.add("discP");
  disc.innerText = "Discription : " + data.details;

  const divDeatils = document.createElement("div");
  divDeatils.classList.add("divDeatils");
  const authorName = document.createElement("p");
  authorName.innerText = "Author Name : " + data.author.name;

  const date = document.createElement("p");
  date.innerText = "Date : " + data.author.published_date.slice(0, 10);

  const ratingNo = document.createElement("h4");
  ratingNo.innerText = "Rating : " + data.rating.number;

  const ratingQua = document.createElement("h4");
  ratingQua.innerText = "Rating Quality : " + data.rating.badge;

  const totalView = document.createElement("p");
  totalView.innerText = "Total View : " + data.total_view;

  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(disc);
  divDeatils.appendChild(authorName);
  divDeatils.appendChild(date);
  divDeatils.appendChild(ratingNo);
  divDeatils.appendChild(ratingQua);
  divDeatils.appendChild(totalView);
  div.appendChild(divDeatils);

  modalContent.appendChild(div);

  // console.log(totalView);
}
```





