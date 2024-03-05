const UrlApi ='http://localhost:3000/api/products'
const Items = document.getElementById('items')

fetch(UrlApi)
.then((response) => {
    if(!response.ok){
        throw new Error('response not work')
    }
    return response.json();
})
.then(data=>{
    
data.forEach(element => {
    let Template =  `<a href="./product.html?id=${element._id}">
    <article>
      <img src="${element.imageUrl}" alt="">
      <h3 class="productName">${element.name}</h3>
      <p class="productDescription">${element.description}</p>
    </article>
  </a>`
  Items.innerHTML +=(Template)
    
});
})
 .catch(error =>{
    console.log(error);
    let htmlError = document.createElement('h2')
    htmlError.innerHTML ='Network response Not Work'
    Items.appendChild(htmlError)
 })