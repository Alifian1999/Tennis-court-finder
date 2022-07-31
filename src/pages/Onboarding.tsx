import React from "react";
import '../styling/pageStyle/onboarding.css'


const Onboarding = () =>{    
    return(
        <div className="container-onboarding">
            <div className="img-tenisBall">
            <img  src={require('../assets/images/tenisBall.png')} alt="" />
            </div>
            <div className="img-tenisIcon">
            <img  src={require('../assets/images/tenisIcon.png')} alt="" />
            </div>
            <div className="img-loading">
            <img  src={require('../assets/vektor/Loading.png')} alt="" />
            </div>
        </div>
    )
}

export default Onboarding