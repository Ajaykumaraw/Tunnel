function HomeScreen() {
  return (
    <div className="app__home w-full h-full flex items-center font-Quicksand">
        <div className="app__home-content mx-auto text-center top-4">
            <div className="app__home_content-title flex text-justify">
                <h1 className="text-6xl font-extrabold ">Eassy Ac<span>cess</span> </h1>
            </div>
            <div className="app__home_content-desc flex text-justify">
                <h2 className="text-4xl">Seemless Data Movement <br /> accross <span>multiple screen</span></h2>
            </div>
            <div className="app__home_content-searchBar">
                <div className="app__home-content-searchdiv">
                    <h3 className="">How to use, visit the link below</h3>
                </div>
            </div>
            <div className="app__home_content-howItwork">
                  <h4>How it works</h4>
            </div>
        </div>
    </div>
  )
}

export default HomeScreen