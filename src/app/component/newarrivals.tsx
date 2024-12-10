import Image from "next/image";
import shirt from "../public/shirt.png"
import jpant from "../public/jpant.png"
import checkshirt from "../public/checkshirt.png"
import shirtcomb from "../public/shirtcomb.png"

export default function Newarrivals() {
  return (
    <div className="arrivals">
      <h1 className="new-arrivals"><b>New Arrivals</b></h1>
      <div className="product-container">
        {/* Product 1 */}
        <div className="product-card">
        <Image src={shirt} alt={"shirt img"}/>
          {/* <Image src="/shirt.png" alt="T-shirt with Tape Details" width={200} height={200} /> */}
          <h3>T-shirt with Tape Details</h3>
          <p>⭐ 4.5/5</p>
          <p className="price">$120</p>
        </div>

        {/* Product 2 */}
        <div className="product-card">
        <Image src={jpant} alt={"jeanspant img"}/>
          {/* <Image src="/2pant.png" alt="Skinny Fit Jeans" width={200} height={200} /> */}
          <h3>Skinny Fit Jeans</h3>
          <p>⭐ 3.5/5</p>
          <p className="price">
            <span className="old-price">$260</span> <span className="new-price">$240</span> <span className="discount">20% OFF</span>
          </p>
        </div>

        {/* Product 3 */}
        <div className="product-card">
        <Image src={checkshirt} alt={"checkshirt img"}/>
          {/* <Image src="/3shirt.png" alt="Checkered Shirt" width={200} height={200} /> */}
          <h3>Checkered Shirt</h3>
          <p>⭐ 4.5/5</p>
          <p className="price">$180</p>
        </div>

        {/* Product 4 */}
        <div className="product-card">
        <Image src={shirtcomb} alt={"shirt comb img"}/>
          {/* <Image src="/4shirt.png" alt="Sleeve Striped T-shirt" width={200} height={200} /> */}
          <h3>Sleeve Striped T-shirt</h3>
          <p>⭐ 4.5/5</p>
          <p className="price">
            <span className="old-price">$160</span> <span className="new-price">$130</span> <span className="discount">30% OFF</span>
          </p>
          
        </div>
        
      </div>
      <button className="viewall"><b>View All</b></button>
    </div>
  );
}
