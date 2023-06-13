import Link from "next/link"
import Image from "next/image"
const Howitworks = () => {
  return (
    <div className="app__howitworks w-full h-screen">
        <div className="app_howitworks-container w-[80%] h-screen m-auto p-8">
          <div className="app__howitworks-imagesection-1">
            <div className="image-1">
              <Image
              src="/assets/t1.png"
              width={500}
              height={500}
              alt="Picture of the author"/>
            </div>
          </div>
            <ul >
              <li>1. Login in your account. <span className="font-px ">if don't have account then <Link className="underline" href={'./Signup'}>signup here.</Link></span></li>
              <li>2. Generate Tunnel Code to use it.</li>
              <li>3. Once tunnel code generated use the code to any other screen to connect.</li>
            </ul>
        </div>
    </div>
  )
}

export default Howitworks