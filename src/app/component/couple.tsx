import couple from "../public/couple.png"
import Image from "next/image";


export default function Couple() {
    return (
      <div className="couple1">
        <div className="couple2">
        <h1 className="page-h1">
          <b>
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </b>

        

        </h1>
            <p className="page-para">Browse throught our diverse range of meticulosly crafted garments,<br />
            designed to bring out your individually and cater to your sence of style.</p>
        
      
      
      <button className="but">
      Shot Now
      </button>

      </div>
           
      
      <div className="couple4">
      <Image src={couple} alt={"couple img"}/>
      </div>
      
    
      </div>
      
    );
  }
  
