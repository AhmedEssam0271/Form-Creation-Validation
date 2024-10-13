async function fetchUserData(params) {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((userName) => {
      const li = document.createElement("li");
      const node = document.createTextNode(userName);
      li.appendChild(node);
      userList.appendChild(li);
    });
    dataContainer.appendChild(userList);
  } catch {
    dataContainer.innerHTML = "";
    dataContainer.innerHTML = "Failed to load user data.";
  }
}
