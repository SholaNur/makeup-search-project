const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const myPlaceholder = document.querySelector("#myPlaceholder");

function getValue() {
  let searchTerm = searchInput.value;
  const apiURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon&product_type=${searchTerm}`;

  console.log(apiURL);

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      let dataObj = data;
      console.log(dataObj);
      dataObj.map((product) => {
        let container = document.createElement("div");
        // this code line bellow adds a class name for the above div, which we created.
        container.classList.add("productContainer");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let image = document.createElement("img");
        let price = document.createElement("h4");

        name.textContent = product.name;
        description.textContent = product.description;
        image.src = product.image_link;
        price.textContent = `$${product.price}`;

        container.append(name, description, image, price);
        myPlaceholder.appendChild(container);
      });
    });
}
searchButton.addEventListener("click", getValue);
