const cardList = [
  {
    title: "Beef Stew",
    image: "images/beef_stew.jpg",
    link: "About Beef Stew",
    description:
      "A hearty beef stew made with tender beef, potatoes, carrots, and a rich flavorful sauce.",
  },
  {
    title: "Chicken Adobo",
    image: "images/chicken_adobo.jpg",
    link: "About Chicken Adobo",
    description:
      "A classic Filipino dish made with chicken, soy sauce, vinegar, garlic, and spices.",
  },
  {
    title: "Pancakes",
    image: "images/pancakes.png",
    link: "About Pancakes",
    description:
      "Soft and fluffy pancakes served with syrup or your favorite toppings.",
  },
];

fetch("/api/recipes")
  .then(res => res.json())
  .then(data => {
    document.getElementById("recipes").innerHTML =
      data.map(recipe => `<p>${recipe}</p>`).join("");
  });

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();

  console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });

  //   $("#clickMeButton").click(() => {
  //     clickMe();
  //   });
  addCards(cardList);
  $('.modal').modal();
});
