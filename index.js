import getAPI from './javascript/get_api.js'
import view from './javascript/view.js'

function main () {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))    
    const { searchProduct } = data 
    const products = getAPI(searchProduct)
    products.then(data => {
      view(data)
    })
  })
  view()
}

main()
