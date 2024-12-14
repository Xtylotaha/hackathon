import Image from 'next/image';
import Social from "@/app/public/Social.png"

export default function Footer() {
    return (
      <div className="footer">
        <div className="footer-container">
          {/* Logo Section */}
          <div className="footer-logo">
            <h2>SHOP.CO</h2>
            <p>
              We have clothes that suit your style and which youre proud to wear. From women to men.
            </p>
            <div className="social-icons">
            {/* <Image src={Social} alt={"socials img"}/> */}
              <span><Image src={Social} alt={"socials img"}/></span>
              {/* <span>🐦</span> 
              <span>📘</span> 
              <span>📸</span> 
              <span>🔗</span>  */}
            </div>
          </div>
  
          {/* Links Sections */}
          <div className="footer-links">
            <div>
              <h3>COMPANY</h3>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
  
            <div>
              <h3>HELP</h3>
              <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
  
            <div>
              <h3>FAQ</h3>
              <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
  
            <div>
              <h3>RESOURCES</h3>
              <ul>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  