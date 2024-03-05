const params =new URLSearchParams(document.location.search)
const id =params.get("id")

const UrlApi ='http://localhost:3000/api/products'

fetch(UrlApi)
.then(response => {
    if(!response.ok){
        throw new Error('response not work');
    }
    return response.json();
})
.then(products =>{
    const product = products.find(product=> product._id === id);
    if(product){
        console.log(product);

        const itemimg = document.querySelector('.item__img')
        const productimg = document.createElement('img')
        productimg.setAttribute('alt', product.name + ' ' + 'image')
        productimg.setAttribute('src', product.imageUrl)
        itemimg.appendChild(productimg)

        const title = document.getElementById('title')
        title.innerHTML= product.name


        const price = document.getElementById('price')
        price.innerHTML= product.price

        const description = document.getElementById('description')
        description.innerHTML= product.description

        const colors = document.getElementById('colors')
        product.colors.forEach(color => {
            const Mycolor =document.createElement('option')
            Mycolor.innerHTML = color

            colors.appendChild(Mycolor)

            
        })


    }else{
        console.log("id not defined.");
    }


})
.catch(error =>{
    console.error("Error", error);
});


//ajouter au panier

function addTocart(product){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
}