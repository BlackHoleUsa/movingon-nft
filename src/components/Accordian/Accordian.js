import React, { useState } from 'react';

import { Card, Button, Accordion} from 'react-bootstrap';
import { HiPlus, HiMinusSm } from 'react-icons/hi';


const CustomAccordian = (props) => {
    
    const { heading, text } = props;

    const [click, setClick] = useState(false);

    return (

        <Accordion className="p-3 bg-lightPink text-black rounded mx-0 mb-2 shadow-none">
            <Card className="p-0 m-0 bg-lightPink text-black border-0 shadow-none">
                
                <Card.Header className="p-0 m-0 border-0 shadow-none">
                
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0 m-0 w-100">
                        
                        <div className="w-100 app-flex-row bg-lightPink heading-font align-items-center justify-content-between font-16px text-black"
                        onClick={() => setClick(!click)}>
                            <span>{ heading }</span>
                            { click ? <HiMinusSm className="font-30px" /> : <HiPlus className="font-30px" /> }
                        </div>

                    </Accordion.Toggle>
                
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                
                    <Card.Body className="font-16px text-black text-left paragraph-font d-block">
                        { text }
                    </Card.Body>
                
                </Accordion.Collapse>

            </Card>
        </Accordion>

    );

}
 
export default CustomAccordian;