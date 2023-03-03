const jsonUserEl = `[
    
    {
        "images": "./img/second-foto1.jpg",
        "alt": "photo1",
        "name": "ELLERY X M'O CAPSULE",
        "desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "images": "./img/second-foto2(1).png",
        "alt": "photo2",
        "name": "ELLERY X M'O CAPSULE",
        "desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "images": "./img/second-foto3.png",
        "alt": "photo3",
        "name": "ELLERY X M'O CAPSULE",
        "desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "images": "./img/second-foto4.png",
        "alt": "photo4",
        "name": "ELLERY X M'O CAPSULE",
        "desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "images": "./img/second-foto5.png",
        "alt": "photo5",
        "name": "ELLERY X M'O CAPSULE",
        "desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "images": "./img/second-foto6.png",
        "alt": "photo6",
        "name": "ELLERY X M'O CAPSULE",
        "desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    }
]`

const featureItemsEls= document.querySelector('.features-items');
const jsonData = JSON.parse(jsonUserEl);
console.log(jsonData);

jsonData.forEach(element => {
    
    const userProducts = document.createElement('div');
    userProducts.classList.add('user-products');
    featureItemsEls.appendChild(userProducts);

    const userProductImage = document.createElement('img');
    userProductImage.classList.add('userProduct-image');
    userProductImage.src = element.images;
    userProductImage.setAttribute('alt', element.alt);
    userProducts.appendChild(userProductImage);

    const userProductName = document.createElement('h4');
    userProductName.classList.add('userProduct-name');
    userProductName.textContent = element.name;
    userProducts.appendChild(userProductName);

    const userProductDescription = document.createElement('p');
    userProductDescription.classList.add('userProduct-description');
    userProductDescription.textContent = element.desc;
    userProducts.appendChild(userProductDescription);

    const userProductPrice = document.createElement('h3');
    userProductPrice.classList.add('userProduct-price');
    userProductPrice.textContent = `${element.price}`;
    userProducts.appendChild(userProductPrice);

});

