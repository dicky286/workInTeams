fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  body: JSON.stringify({ title: "foo2", body: "bar", userId: 1 }),
})
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("#idOfUser").innerText = data.id;
  });
