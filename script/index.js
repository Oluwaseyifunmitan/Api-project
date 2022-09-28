const main = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();

  for (let val in data.results) {
    const boxEl = document.querySelector(`.box${val}`);
    const divEl = document.createElement("div");
    divEl.innerHTML = `
    <button class="boxed-out" id="new-box${val}" onclick="selectBtn(${val})">
    <h2>${data.results[val].name}</h2>
    </button>

    <div class="hide-details" id="new-details${val}" onclick="selectBtn(${val})">
      <p>Name: ${data.results[val].name}</p>
      <p>Height: ${data.results[val].height}</p>
      <p>Gender: ${data.results[val].gender}</p>
       </div>
      `;
    boxEl.appendChild(divEl);
  }
  return true;
};
main();

const selectBtn = (id) => {
  const btnEl = document.querySelector(`#new-box${id}`);
  const detailsEl = document.querySelector(`#new-details${id}`);

  if (btnEl.style.visibility === "visible") {
    btnEl.style.visibility = "hidden";
    detailsEl.style.visibility = "visible";
  } else {
    btnEl.style.visibility = "visible";
    detailsEl.style.visibility = "hidden";
  }
};
