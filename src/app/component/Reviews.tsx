import Image from "next/image";
import star from "../public/star.png";  // Make sure the image exists in the public folder

export default function Reviews() {
  return (
    <div className="reviews-section">
      <h1 className="reviews-heading">OUR HAPPY CUSTOMERS</h1>
      <div className="reviews-container">
        {/* Review 1 */}
        <div className="review-card">
          <Image src={star} alt="Star Rating" width={100} height={20} />
          <p><b>Sarah M.</b></p>
          <p>
            &quot;I&apos;m blown away by the quality and style of the clothes I received
            from Shopco. From casual wear to elegant dresses, every piece I&apos;ve
            bought has exceeded my expectations.&quot;
          </p>
        </div>

        {/* Review 2 */}
        <div className="review-card">
          <Image src={star} alt="Star Rating" width={100} height={20} />
          <p><b>Alex K.</b></p>
          <p>
            &quot;Finding clothes that align with my personal style used to be a
            challenge until I discovered Shopco. The range of options they
            offer is truly remarkable.&quot;
          </p>
        </div>

        {/* Review 3 */}
        <div className="review-card">
          <Image src={star} alt="Star Rating" width={100} height={20} />
          <p><b>James L.</b></p>
          <p>
            &quot;As someone who&apos;s always on the lookout for unique fashion pieces,
            I&apos;m thrilled to have stumbled upon Shopco.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
