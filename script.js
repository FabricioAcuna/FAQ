// A function that adds and remove the class "active" on the section you click on.
// function toggle(e) {
//   const element = e.target;
//   element.classList.toggle("active");

//   console.log("toggle");
//   console.log(element);
//   console.log(element.firstChild);
//   // element.firstChild.classList("fa-minus");
// }

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const sectionElements = document.querySelectorAll(
  "#section1, #section2, #section3"
);

sectionElements.forEach(function (sectionElement) {
  sectionElement.addEventListener("click", toggle);
});

function toggle(e) {
  const el = e.currentTarget;
  el.classList.toggle("active");

  console.log(el.childNodes[0], el.childNodes[1]);

  if (el.childNodes[0].className == "fa fa-minus") {
    el.childNodes[0].className = "fa fa-plus";
  } else {
    el.childNodes[0].className = "fa fa-minus";
  }
  // el.firstChild.toggle("fa-minus");
}

//p2.2

const postElement = document.getElementsByClassName("accordion");
const postElCont = postElement[0];

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const div = document.createElement("div");
    const postEl = document.createElement("div");
    postEl.setAttribute("class", "title");
    postEl.innerHTML = `<i class="fa fa-plus"></i> ${post.title}`;
    postEl.addEventListener("click", toggle);

    const postEl2 = document.createElement("div");
    postEl2.textContent = post.body;
    postEl2.setAttribute("class", "description");

    div.appendChild(postEl);
    div.appendChild(postEl2);

    postElCont.appendChild(div);

    // const div = document.createElement("div");

    // div.setAttribute("class", "title");
    // div.addEventListener("click", toggle);

    // div.innerHTML = `
    //   <i class="fa fa-plus"></i> ${post.title}</div>
    // `;

    // postElement[0].appendChild(div);

    // if (post.id % 2 === 0) {
    //   postEl.style.backgroundColor = "lightblue";
    // }
  });
}
getPosts();
