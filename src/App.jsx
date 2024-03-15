import ProductCard from './components/ProductCard/ProductCard'
import image from './assets/image-product-mobile.jpg'
import './App.css'

function App() {
  const product = {
    image: image,
    category: "PERFUME",
    title: "Gabrielle Essence Eau De Parfum",
    desc: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    oldPrice: "169.99",
    newPrice: "149.99"
  }
 

  return (
    <>
      <ProductCard product={product} />
    </>
  )
}

export default App
