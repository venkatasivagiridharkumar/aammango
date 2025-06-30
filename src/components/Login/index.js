import "./index.css"

const Login =()=><div className="main-login-container">
    <div className="login-container">
        <div className="login-left-container"><h1 className="brand-name">Aam Bazar</h1><img className="login-mango-image" src="https://img1.exportersindia.com/product_images/bc-full/2019/1/6079581/natural-mango-1547805711-4656322.png" alt="login mango"/></div>
        <form className="login-right-container">
            <span className="welcome-text">Welcome, </span>
            <label for="username" className="label-element">USERNAME</label>
            <input id="username" type="text" className="input-element"/>
            <label for="password" className="label-element">PASSWORD</label>
            <input type="password" id="password" className="input-element"/>
            <div className="login-button-container"><button className="login-button">Login</button></div>
        </form>
    </div>
</div>

export default Login