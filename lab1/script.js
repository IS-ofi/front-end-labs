const element8 = document.getElementById("target-element-8");
const element9 = document.querySelector(".target-element-9");

function toggleColors(element, bgColor, textColor) {
  if (element.style.backgroundColor === bgColor) {
    element.style.backgroundColor = "";
    element.style.color = "";
  } else {
    element.style.backgroundColor = bgColor;
    element.style.color = textColor;
  }
}

if (element8) {
  element8.addEventListener("click", function () {
    toggleColors(this, "rgb(2, 183, 254)", "white");
  });
}

if (element9) {
  element9.addEventListener("click", function () {
    toggleColors(this, "rgb(252, 230, 115)", "white");
  });
}

const imgContainer = document.getElementById("image-container");
const addBtn = document.getElementById("add-btn");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const deleteBtn = document.getElementById("delete-btn");

function getLastImage() {
  if (!imgContainer || !imgContainer.lastElementChild) return null;
  return imgContainer.lastElementChild.querySelector("img");
}

if (addBtn) {
  addBtn.addEventListener("click", () => {
    const newLink = document.createElement("a");
    newLink.href =
      "https://minerva-suites.com/uk/complete-guide-how-to-visit-mdina-malta/";
    newLink.className = "image-link";

    const newImg = document.createElement("img");
    newImg.className = "city-image";
    newImg.src = "mdina.png";
    newImg.alt = "Мдіна";
    newImg.style.width = "900px";
    newImg.style.height = "auto";

    newLink.appendChild(newImg);
    imgContainer.appendChild(newLink);
  });
}

if (increaseBtn) {
  increaseBtn.addEventListener("click", () => {
    const lastImg = getLastImage();
    if (lastImg) {
      const currentWidth = lastImg.clientWidth;
      lastImg.style.width = currentWidth * 1.2 + "px";
      lastImg.style.height = "auto";
    }
  });
}

if (decreaseBtn) {
  decreaseBtn.addEventListener("click", () => {
    const lastImg = getLastImage();
    if (lastImg) {
      const currentWidth = lastImg.clientWidth;
      lastImg.style.width = currentWidth * 0.8 + "px";
      lastImg.style.height = "auto";
    }
  });
}

if (deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    if (imgContainer && imgContainer.lastElementChild) {
      imgContainer.lastElementChild.remove();
    }
  });
}
