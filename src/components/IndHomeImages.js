import React from 'react'
import {AiOutlinePicture} from "react-icons/ai";
import {FaRegImage} from "react-icons/fa"
import IndHomeText from './IndHomeText';
const IndHome = () => {
return (
    <div>
        <div className="IndHome_Images_Cont">
        <div className="IndHome_SmallImage" style={{gridArea:'b'}}>
                    </div>
                    <div className="IndHome_SmallImage" style={{gridArea:'c'}}>
                    </div>
                    <div className="IndHome_SmallImage" style={{gridArea:'d'}}>
                        <div className="IndHome_SmallImage_Dark">
                         <p className="IndHome_SmallImage_Dark_Icon">
                            <FaRegImage /> 14     
                        </p>   
                        </div>
                    </div>
        <div className="IndHome_LargeImage" style={{gridArea:'a'}}>

        </div>

        </div>
        <IndHomeText />
    </div>
)
}

export default IndHome