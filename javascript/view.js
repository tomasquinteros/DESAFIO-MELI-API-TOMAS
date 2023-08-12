

export default function view (data) {
  console.log(data)
  
  const bodyProducts = document.getElementById('body-products')
  
  const resultQuantity = document.getElementById('resultQuantity')
  resultQuantity.innerHTML = `Resultados: ${data.paging.total}` 

  data.results.forEach(product => {
    
    const {title, price, thumbnail, sold_quantity, thumbnail_id, condition, permalink} = product
    
    const article = document.createElement('article')
    article.className = 'body-product'
    
    const articleContent = `
    <a href=${permalink}>
      <section class="info-product">
        <img src=${thumbnail} alt=${thumbnail_id}>
        <div>
          <div class="info-1">
            <h2>${title}</h2>
            <span>${condition}</span>
          </div>
          <p>Vendidos: ${sold_quantity}</p>
        </div>
      </section>
      <section class="price-info">
        $${price}
      </section>
    </a>`

    article.innerHTML = articleContent
    bodyProducts.appendChild(article)
  })
}