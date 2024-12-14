import Newarrivals from "@/app/component/newarrivals";
import Headerup from "@/app/component/headerup";
import Header from "@/app/component/header";
import Couple from "@/app/component/couple";
import Logorib from "@/app/component/logorib"
// import Newarrivals from "./component/newarrivals";
// import Topselling from "./component/topselling";
import Topselling from "@/app/component/topselling";
import Dressstyle from "./component/dressstyle";
import Reviews from "./component/Reviews";
import Uptodate from "./component/uptodate";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div>
      
    <Headerup/>
    <Header/>
    <Couple/>
    <Logorib/>
    <Newarrivals/> 
    <Topselling/>
    <Dressstyle/>
    <Reviews/>
    <Uptodate/>
      
    <Footer/>

    

{/* <div className="coupleh1">
FIND CLOTHES THAT MATCHES YOUR   
</div> */}

    </div>  
    )
    }
