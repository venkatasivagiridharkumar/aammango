import "./index.css"
import Navbar from "../Navbar"

const Cart=()=>{

    const handleHelpClick = () => {
        window.open("https://wa.me/919492116537", "_blank", "noopener,noreferrer");
     };
  
    return  <>
            <Navbar /><div className="cart-container">Cart</div><div className="help-button-container"><button className="help-button" onClick={handleHelpClick}>help me</button></div>
            </>
            
    }
export default Cart