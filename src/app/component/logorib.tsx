import versace from "@/app/public/versace.png";
import zara from "../public/zara.png";
import gucci from "@/app/public/gucci.png";
import prada from "@/app/public/prada.png"
import calvinklien from "@/app/public/calvinklien.png"
import Image from "next/image";
export default function Logorib() {

    return(
        <div className="Logorib"> 
        <Image src={versace.src} alt="Versace" className="logo" />
        <Image src={zara} alt={"zara"} className="logo" />
        <Image src={gucci.src} alt="Gucci" className="logo" />
        <Image src={prada.src} alt="Prada" className="logo" />
        <Image src={calvinklien.src} alt="Calvin Klein" className="logo" />
        </div>

    )
}