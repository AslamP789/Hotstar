import '../styles/footer.css'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer_logo">
                <img src="images/logo.svg" alt="" />
            </div>
            <div className="nav_links">
                {/* same as navbar link style */}
                <li><a href="">Terms and Conditions</a></li>
                <li><a href="">Send as FeedBack</a></li>
                <li><a href="">Help</a></li>
            </div>
            <div className="desc">
                <p>@ 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
}
export default Footer;