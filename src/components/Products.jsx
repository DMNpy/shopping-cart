import ProductsItem from './ProductsItem'
import productData from '../productData'

const Products = (props) => {
  return (
    <div className="grid grid-cols-3 gap-10 m-8">
        {productData.map((product)=> (
            <ProductsItem key={product.id} product={product} cart={props.cart} setCart={props.setCart} />
        ))}
    </div>
  )
}

export default Products