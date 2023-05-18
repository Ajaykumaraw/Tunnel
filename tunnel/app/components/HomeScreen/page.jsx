import Menu from "../Menu/page"

function HomeScreen() {
  return (
    <div className="app__home w-full h-5/6 flex text-center font-Quicksand relative">
        <Menu></Menu>
        <div className="app__home-content mx-auto pt-12 text-center flex flex-col justify-around items-center">
            <div className="app__home_content-title text-center">
                <h1 className="text-8xl font-extrabold text-app-color">Eassy Ac<span className="text-black">cess</span> </h1>
            </div>
            <div className="app__home_content-desc flex text-center -mt-8">
                <h2 className="text-4xl">Seemless Data Movement <br/>accross <span className="text-app-color">multiple screen</span></h2>
            </div>
            <div className="app__home_content-searchBar">
                <div className="app__home-content-searchdiv bg-slate-200 p-2 pl-8 pr-8 w-fit rounded-3xl">
                    <h3 className="">How to use, visit the link below</h3>
                </div>
            </div>
            <div className="app__home_content-howItwork">
                  <h4 className="underline underline-offset-3 text-sky-600 cursor-pointer">How it works</h4>
            </div>
        </div>
    </div>
  )
}


export default HomeScreen