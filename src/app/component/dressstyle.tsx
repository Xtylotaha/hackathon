import Image from "next/image";
import casual from "@/app/public/casual.png"
import formal from "@/app/public/formal.png"
import party from "@/app/public/party.png"
import gym from "@/app/public/gym.png"
import { preloadStyle } from "next/dist/server/app-render/entry-base";


export default function Dressstyle() {
  return (
    <div className="dressstyle">
      <div className="row">
      <Image src={casual} alt={"casual img"}/>
      <Image src={formal} alt={"formal img"}/>
      </div>
      <div className="row">
      <Image src={party} alt={"party img"}/>
      <Image src={gym} alt={"gym img"}/>
      </div>
    </div>
  );
}
