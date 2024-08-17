import ProductDescription from "../ProductDescription/ProductDescription"
import ProductImage from "../ProductImage/ProductImage"
import "../Product/Product.css"

function Product (){
    return (
        <div className="Product">
            <ProductImage></ProductImage>
            <ProductDescription></ProductDescription>
        </div>
    )
}
export default Product