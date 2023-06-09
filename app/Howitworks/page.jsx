import Link from "next/link"
const Howitworks = () => {
  return (
    <div className="app__howitworks w-full h-screen">
        <div className="app_howitworks-container w-[80%] h-screen m-auto p-8">
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