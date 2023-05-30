import React from "react";
import "./contact.css";
// import file from '../../../src/file/New Text Document.txt'
// import Button from 'react-bootstrap/Button';

export class Contact extends React.Component {
    constructor() {
        super()
        console.log("hello from constructor");
    }


    render() {
        return <>
            <div className="aboutall">
                <div className="aboutmetitle">
                    <h1>About Me</h1>
                </div>
                <div className="aboutmecontent">
                    <p >    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, saepe minus quas eligendi aperiam quia nobis. Consequatur quibusdam inventore, est nostrum, voluptate amet adipisci labore numquam animi praesentium esse error!
                    </p>
                    <div>
                    {/* <a href={file} download="MyExampleDoc" rel="noreferrer" target='_blank'> */}
                    {/* <Button variant="dark"><h2> Download</h2></Button> */}

                      {/* <button className="btndawn"><h2> Download</h2></button> */}
                  {/* </a>   */}
                    </div>
                                
                   </div>
            </div>
        </>
    }
}