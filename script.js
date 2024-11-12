// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const sectionElements = document.querySelectorAll(
  "#section1, #section2, #section3"
);

sectionElements.forEach(function (sectionElement) {
  sectionElement.addEventListener("click", toggle);
});

function toggle(e) {
  const plusEl = e.currentTarget;
  plusEl.classList.toggle("active");
}

//p2.2

const postElement = document.getElementsByClassName("accordion");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.setAttribute("class", "title");
    postEl.innerHTML = `<i class="fa fa-plus"></i> ${post.title}`;
    postEl.addEventListener("click", toggle);

    const postEl2 = document.createElement("div");
    postEl2.textContent = post.body;
    postEl2.setAttribute("class", "description");

    postElement[0].appendChild(postEl);
    postElement[0].appendChild(postEl2);

    // if (post.id % 2 === 0) {
    //   postEl.style.backgroundColor = "lightblue";
    // }
  });
}
getPosts();
