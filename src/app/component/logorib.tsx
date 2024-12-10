import versace from "@/app/public/versace.png";
import zara from "@/app/public/zara.png";
import gucci from "@/app/public/gucci.png";
import prada from "@/app/public/prada.png"
import calvinklien from "@/app/public/calvinklien.png"
export default function Logorib() {

    return(
        <div className="Logorib">  <img src={versace.src} alt="Versace" className="logo" />
        <img src={zara.src} alt="Zara" className="logo" />
        <img src={gucci.src} alt="Gucci" className="logo" />
        <img src={prada.src} alt="Prada" className="logo" />
        <img src={calvinklien.src} alt="Calvin Klein" className="logo" />
        
        </div>

    )
}