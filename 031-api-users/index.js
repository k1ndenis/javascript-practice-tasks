// Второе задание
// Нужно отобразить таблицу с пользователями:
// 1. Получить данные о пользователях с помощью стороннего API https://dummyjson.com/docs/users
// 2. Вывести полученные данные в таблицу
// 3. Реализовать постраничное отображение данных
// 4. Сортировка записей для каждой колонки
// 5*. Отображение боковой панели с постами выбранного пользователя

const getUserInfo = document.getElementById("getUserInfo");
const usersTable = document.getElementById("usersTable");

const lastNameSort = document.getElementById("lastNameSort");
const firstNameTh = document.getElementById("firstNameTh");
const lastNameTh = document.getElementById("lastNameTh");

function fetchUsers() {
  return fetch("https://dummyjson.com/users").then((res) => {
    return res.json();
  });
}

function fetchPostsUsers(index) {
  const url = `https://dummyjson.com/users/${index + 1}/posts`;
  return fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      console.log(resp.posts);
      return resp.posts;
    });
}

function displayUsers(users) {
  usersTable.innerHTML = "";
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
      <th>Посты</th>
      <th>ID<button id="idSort">Сортировать</button></th>
      <th>Имя<button id="firstNameSort">Сортировать</button></th>
      <th>Фамилия<button id="lastNameSort">Сортировать</button></th>
    `;
  usersTable.appendChild(headerRow);
  const idSort = headerRow.querySelector("#idSort");
  idSort.addEventListener("click", () => {
    idSortFn();
  });
  const firstNameSort = headerRow.querySelector("#firstNameSort");
  firstNameSort.addEventListener("click", () => {
    firstNameSortFn();
  });
  const lastNameSort = headerRow.querySelector("#lastNameSort");
  lastNameSort.addEventListener("click", () => {
    lastNameSortFn();
  });
  users.forEach((user, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML += `
    <th><button>Посты</button></th>
    <th>${user.id}</th>
    <th>${user.firstName}</th>
    <th>${user.lastName}</th>`;

    const button = tr.querySelector("button");
    button.addEventListener("click", () => {
      fetchPostsUsers(index).then((posts) => {
        let numberOfPost = 1;
        let postsList = posts.map(
          (post) => " " + numberOfPost++ + ": " + post.title,
        );
        if (postsList.length === 0) {
          postsList = "Посты отсутствуют";
        } else postsList = ["Посты: "] + postsList;
        console.log(postsList);
        tr.innerHTML = `
        <th>${postsList}</th>
        <th>${user.id}</th>
        <th>${user.firstName}</th>
        <th>${user.lastName}</th>`;
      });
    });
    usersTable.appendChild(tr);
  });
}

let idAsc;
function idSortFn() {
  if (!idAsc) {
    fetchUsers()
      .then((res) => res.users)
      .then((res) => res.sort((a, b) => a.id - b.id))
      .then((res) => displayUsers(res));
    idAsc = true;
  } else {
    fetchUsers()
      .then((res) => res.users)
      .then((res) => res.sort((a, b) => b.id - a.id))
      .then((res) => displayUsers(res));
    idAsc = false;
  }
}

let firstNameAsc;
function firstNameSortFn() {
  if (!firstNameAsc) {
    fetchUsers()
      .then((res) => res.users)
      .then((res) => res.sort((a, b) => a.firstName.localeCompare(b.firstName)))
      .then((res) => displayUsers(res));
    firstNameAsc = true;
  } else {
    fetchUsers()
      .then((res) => res.users)
      .then((res) => res.sort((a, b) => b.firstName.localeCompare(a.firstName)))
      .then((res) => displayUsers(res));
    firstNameAsc = false;
  }
}

let lastNameAsc;
function lastNameSortFn() {
  if (!lastNameAsc) {
    fetchUsers()
      .then((res) => res.users)
      .then((res) => res.sort((a, b) => a.lastName.localeCompare(b.lastName)))
      .then((res) => displayUsers(res));
    lastNameAsc = true;
  } else {
    fetchUsers()
      .then((res) => res.users)
      .then((res) => res.sort((a, b) => b.lastName.localeCompare(a.lastName)))
      .then((res) => displayUsers(res));
    lastNameAsc = false;
  }
}

getUserInfo.addEventListener("click", () => {
  fetchUsers()
    .then((res) => res.users)
    .then((res) => displayUsers(res))
    .catch((error) => {
      console.error("Error: ", error);
    });
});
