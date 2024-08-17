import "../ProductImage/ProductImage.css"
import image1 from "../../assets/images/image-product-1.jpg"
import image2 from "../../assets/images/image-product-2.jpg"
import image3 from "../../assets/images/image-product-3.jpg"
import image4 from "../../assets/images/image-product-4.jpg"
import imageThum1 from "../../assets/images/image-product-1-thumbnail.jpg"
import imageThum2 from "../../assets/images/image-product-2-thumbnail.jpg"
import imageThum3 from "../../assets/images/image-product-3-thumbnail.jpg"
import imageThum4 from "../../assets/images/image-product-4-thumbnail.jpg"
import { useState } from "react"

function ProductImage(){
    const ProductImages = [
        image1,
        image2,
        image3,
        image4,
    ];

    const ProductImagesThum = [
        imageThum1,
        imageThum2,
        imageThum3,
        imageThum4,
    ];

    const [ImageActive, setImageActive] = useState(0)
    return (
        <div className="">
            <img className="image" src={ProductImages[ImageActive]} />
            <ul className="parentImageSwitch">
                {ProductImagesThum.map((img, index) => (
                    <img className={`imageSwitch ${index === ImageActive ? 'active' : ''}`} 
                    src={img}
                    key={index}
                    onClick={()=>setImageActive(index)} />
                ))}
            </ul>
        </div>
    );
}
export default ProductImage