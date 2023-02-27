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
                        <span>${product.title}</span>
                    </div>
                    <div>${product.price}</div>
                    <div>${product.rating}</div>
                    <div>${product.stock}</div>
                </div>
            </div>
            `;
        })

        myDiv.innerHTML = newHtml.join("");
    })
