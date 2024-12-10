import Image from "next/image";
import star from "../public/star.png"

export default function Reviews() {
  return (
    <div className="reviews-section">
      <h1 className="reviews-heading">OUR HAPPY CUSTOMERS</h1>
      <div className="reviews-container">
        {/* Review 1 */}
        <div className="review-card">
        <Image src={star} alt={"couple img"} width={100}
            height={20}/>
          {/* <Image
            src="star"// Replace with your star icon path
            alt="Star Ratings"
            width={100}
            height={20}
          /> */}
          <p><b>Sarah M.</b></p>
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shopco. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations."
          </p>
        </div>

        {/* Review 2 */}
        <div className="review-card">
        <Image src={star} alt={"couple img"} width={100}
            height={20}/>
          <p><b>Alex K.</b></p>
          <p>
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shopco. The range of options they
            offer is truly remarkable."
          </p>
        </div>

        {/* Review 3 */}
        <div className="review-card">
        <Image src={star} alt={"couple img"} width={100}
            height={20}/>
          <p><b>James L.</b></p>
          <p>
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shopco."
          </p>
        </div>
      </div>
    </div>
  );
}
