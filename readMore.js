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
