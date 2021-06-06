fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".name").innerText = data[1].name;
  });
