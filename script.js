let myDiv = document.getElementById("flex-container");
fetch("https://dummyjson.com/products")
    .then((respone) => respone.json())
    .then((data) => {
        const newHtml = data.products.map((product) => {
            return `
            <div id="container">
                <div id="image">
                <img src="${product.thumbnail}" alt="images" width="100%" height="100%">
                
                </div>
                <div id="info">
                    <div id="des">
                        <span>Title: ${product.title}</span>
                    </div>
                    <div id="price">
                        <span>Price: ${product.price}</span>
                        <span>${product.discountPercentage}% Off</span>
                    </div>
                    <div>Rating: ${product.rating}</div>
                    <div>Stock: ${product.stock}</div>
                </div>
            </div>
            `;
        })

        myDiv.innerHTML = newHtml.join("");
    })
