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
