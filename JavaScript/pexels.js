const getImages = function () {
  const imagesUrl = "https://api.pexels.com/v1/search?query=mountains";
  fetch(imagesUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "X7At0l5INFIQWKUBpQf4o57vfCgjeffD7KHo9hhBePsD4xivylf6futo",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La risposta non è valida");
      }
    })
    .then((data) => {
      console.log("DATA:", data);
      const images = document.querySelectorAll(".loadImg");
      const photos = data.photos;

      images.forEach((img, index) => {
        if (photos[index]) {
          img.src = photos[index].src.medium;
          img.alt = photos[index].alt;
          const card = img.closest(".card");

          const smallText = card.querySelector("small.text-muted");

          smallText.textContent = photos[index].id;
        }
      });
    })
    .catch((err) => {
      console.log("Errore:", err);
    });
};

document.getElementById("loadImages").addEventListener("click", function (e) {
  e.preventDefault();
  getImages();
});

const getImages1 = function () {
  const imagesUrl = "https://api.pexels.com/v1/search?query=kittens";
  fetch(imagesUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "X7At0l5INFIQWKUBpQf4o57vfCgjeffD7KHo9hhBePsD4xivylf6futo",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La risposta non è valida");
      }
    })
    .then((data) => {
      console.log("DATA:", data);
      const images = document.querySelectorAll(".loadImg");
      const photos = data.photos;

      images.forEach((img, index) => {
        if (photos[index]) {
          img.src = photos[index].src.medium;
          img.alt = photos[index].alt;
          const card = img.closest(".card");

          const smallText = card.querySelector("small.text-muted");

          smallText.textContent = photos[index].id;
        }
      });
    })
    .catch((err) => {
      console.log("Errore:", err);
    });
};

document.getElementById("loadImages2").addEventListener("click", function (e) {
  e.preventDefault();
  getImages1();
});

const hideButtons = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const btnGroup = card.querySelector(".btn-group");
    const editBtn = btnGroup.querySelector("button:nth-child(2)");

    editBtn.textContent = "Hide";

    editBtn.addEventListener("click", () => {
      card.remove();
    });
  });
};

hideButtons();
