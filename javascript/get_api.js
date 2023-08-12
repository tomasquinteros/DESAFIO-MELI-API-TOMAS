export default function getAPI (searchProduct) {
  const dataSearch = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchProduct}`)
  .then(res => res.json()).then(data => {
    return data
  })
  return dataSearch
}
