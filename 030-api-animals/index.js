// Первое задание
// Необходимо отобразить коллаж с фотографиями животных:
// 1. Получить изображения с помощью стороннего API https://dog.ceo/dog-api/
// 2. Добавлять в коллаж новые изображения каждые 3 секунды
// 3. Заменять старые изображения, если они не помеёщаются в контейнер или достигнут лимит изображений
// 4. Открывать изображения в режиме просмотра
// 5. Обновление коллажа приостанавливается, если изображение открыто в режиме просмотра
// 6*. Добавить возможность скачивать изображения в режиме просмотра

const images = JSON.parse(localStorage.getItem("animals")) || [];
const collage = document.getElementById("collage");
const getAnimalImgBtn = document.getElementById("getAnimalImgBtn");
let intervalId = null;

function save() {
  localStorage.setItem("animals", JSON.stringify(images));
}

function fetchAnimalImages() {
  const url = "https://dog.ceo/api/breeds/image/random";
  return fetch(url).then((res) => {
    return res.json();
  });
}

function renderImages() {
  collage.innerHTML = "";
  images.forEach((image, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<img class="my-2" src=${image} height="150">`;
    collage.appendChild(li);
  });
  const items = document.querySelectorAll("img");
  items.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(3)";
      item.addEventListener("click", () => {
        const a = document.createElement("a");
        a.href = images[index];
        a.download = "";
        a.click();
      });
      toggleInterval(false);
    });
    item.addEventListener("mouseout", () => {
      item.style.transform = "none";
      toggleInterval(true);
    });
  });
}

function displayAnimalImage(data) {
  let { message } = data;
  images.unshift(message);
  if (images.length >= 5) {
    images.length = 5;
  } else {
    images.length = images.length + 1;
  }

  renderImages();
}

getAnimalImgBtn.addEventListener("click", () => {
  fetchAnimalImages()
    .then((data) => {
      displayAnimalImage(data);
    })
    .catch((error) => {
      console.error("error:", error);
      alert("Не удалось загрузить изображение. Попробуйте снова");
    });
  toggleInterval(true);
});

function toggleInterval(bool) {
  if (bool) {
    if (!intervalId) {
      intervalId = setInterval(() => {
        getAnimalImgBtn.click();
      }, 2000);
    }
  } else {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  save();
}
