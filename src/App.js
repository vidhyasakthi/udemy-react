import Navbar from "./component/Navbar"
import Categories from "./component/Categories"
import Saleimage from "./component/Saleimage"
import Recommended from "./component/Recommended"
import Topics from "./component/Topics"
import Popular from "./component/Popular"
import Footer from "./component/Footer"

function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Categories></Categories>
        <Saleimage></Saleimage>
        <Recommended></Recommended>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
        </div>
    )
}
export default App