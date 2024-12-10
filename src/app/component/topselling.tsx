import Image from "next/image";
import vertical from "@/app/public/verticle.png"
import courage from "@/app/public/courage.png"
import loosfit from "@/app/public/loosfit.png"
import faded from "@/app/public/faded.png"

export default function Topselling() {
  return (
    <div className="topselling">
      <h1 className="top-selling-title"><b>Top Selling</b></h1>
      <div className="product-container">
        {/* Product 1 */}
        <div className="product-card">
        <Image src={vertical} alt={"vertical shirt img"}/>

          {/* <Image src="/verticle.png" alt="Vertical Striped Shirt" width={200} height={200} /> */}
          <h3>Vertical Striped Shirt</h3>
          <p>⭐ 5.0/5</p>
          <p className="price">
            <span className="new-price">$212</span> <span className="old-price">$232</span> <span className="discount">20% OFF</span>
          </p>
        </div>

        {/* Product 2 */}
        <div className="product-card">
        <Image src={courage} alt={"courage shirt img"}/>
          
          {/* <Image src="/courage.png" alt="Courage Graphic T-shirt" width={200} height={200} /> */}
          <h3>Courage Graphic T-shirt</h3>
          <p>⭐ 4.0/5</p>
          <p className="price">$145</p>
        </div>

        {/* Product 3 */}
        <div className="product-card">
        <Image src={loosfit} alt={"loose-fit pant img"}/>
          
          {/* <Image src="/loosfit.png" alt="Loose Fit Bermuda Shorts" width={200} height={200} /> */}
          <h3>Loose Fit Bermuda Shorts</h3>
          <p>⭐ 3.0/5</p>
          <p className="price">$80</p>
        </div>

        {/* Product 4 */}
        <div className="product-card">
        <Image src={faded} alt={"faded pant img"}/>

          {/* <Image src="/faded.png" alt="Faded Skinny Jeans" width={200} height={200} /> */}
          <h3>Faded Skinny Jeans</h3>
          <p>⭐ 4.5/5</p>
          <p className="price">$210</p>
        </div>
      </div>
      <button className="viewall"><b>View All</b></button>
    </div>
  );
}
