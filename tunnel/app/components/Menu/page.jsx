"use Client"

import Link from 'next/link';

function Menu(){
  
    return(
        <>
            <div className="app__menu absolute top-4 right-12 bg-slate-200 rounded-2xl p-8">
                <ul>
                    <li className="cursor-pointer">
                        <Link href={"./Login"}>Login</Link>
                    </li>
                    <li  className="cursor-pointer">
                    <Link href={"./Signup"}>Signup</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;