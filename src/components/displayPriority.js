import React from "react"
import "../css/add.css"

function DisplayPriority (props){
    return (

        <div>
            {props.list.map((item) => (
                <div>

                    {item.priorityType === "High" ? ( 
                    <div className="transaction-item">
                        <div>
                            <h4 style={{ paddingLeft: "12px", paddingTop:"25px"}}>{item.name}</h4>
                        </div>

                        <div className="high-line"></div>

                    </div> 
                    ) :
                    
                    (
                <div className="transaction-item">
                <div>
                    <h4 style={{ paddingLeft: "12px", paddingTop:"25px"}}>{item.name}</h4>
                </div>

                <div className="medium-line"></div>
                  
            </div>
            )
                }


                </div>
            ))}
        </div>
    );
}

export default DisplayPriority;


                

