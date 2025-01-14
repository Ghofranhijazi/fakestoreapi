
fetch('https://6785c70ef80b78923aa46721.mockapi.io/product')
  .then(response => response.json())
  .then(data => {
    let productList = document.getElementById("product-list");

    // استخدم البيانات المسترجعة من الـ API
    let productCards = data.map(product => {
      return `
        <div class="card mb-3 m-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${product.Image}" class="img-fluid rounded-start" alt="${product.Title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${product.Title}</h5>
                <p class="card-text">${product.Description}</p>
                <p class="card-text"><small class="text-primary">${product.Price}</small></p>
                <a href="#" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    // إضافة الكروت في الصفحة
    productList.innerHTML = productCards.join("");  // دمج الكروت في HTML
  })
  .catch(error => console.error("Error fetching data:", error));
