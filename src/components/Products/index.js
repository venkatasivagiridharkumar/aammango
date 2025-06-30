import React,{Component} from "react"
import Navbar from "../Navbar"
import "./index.css"

class Products extends Component{

state={}

render(){
    return <><Navbar /><div className="products-container">Products</div></>
}

}
export default Products