import React, { useState, useEffect } from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';
import { FlexRow } from 'components/FlexRow/FlexRow';
import { AiFillStar } from 'react-icons/ai';

const Clients = (props) => {
    
    const [ active, setActive ] = useState(0);

    useEffect(() => {

        const setCount = setInterval(() => {
            
            if(active === 2){
                setActive(active => active*0);
            } else{
                setActive(active => active+1);
            }

        }, 2000);

        return () => {
            clearInterval(setCount);
        }

    }, [active]);

    const data = [
        { id: 0, title: 'Greta Quispe', text: 'Loved it!!!!!!!', src: Images.clients[0] },
        { id: 1, title: 'anthony', text: 'Loved it!!!!!!!', src: Images.clients[1] },
        { id: 2, title: 'Amazon', text: 'Great read, very captivating', src: Images.clients[2] }
    ];

    return(

        <SectionContainer className="bg-lightPrimary text-black">
        
            <span className="mb-1 d-block text-center text-uppercase font-12px">
                LOVE FORM CLIENTS
            </span>

            <span className="mb-5 d-block text-center text-capitalize font-25px text-blueShade">
                Don't trust our words only. Take words from readers worldwide
            </span>

            <Row className="p-0 m-0">

                {
                    data?.map((item, i) => (
                        <Col key={i} xs={12} sm={12} md={6} lg={4} xl={4} className="margin-clients-bottom">
                            
                            <div className="w-100 app-flex-column p-3" 
                            style={{ border: i === active ? '2px solid var(--blueShade)' : '2px solid var(--whiteSmoke)' }}>
                                
                                <FlexRow className="w-100 align-items-center justify-content-start d-inline-flex position-relative">
                                    
                                    <img alt="" className="rounded-circle mr-3" src={item?.src} />

                                    <div className="app-flex-column">
                                        <span className="font-16px text-capitalize">{item?.title}</span>
                                        <span className="font-12px">{item?.text}</span>
                                    </div>

                                    <div className="ml-auto">
                                        <span>4.</span>
                                        <AiFillStar className="font-16px ml-3" style={{ color: 'orange' }} />
                                    </div>

                                </FlexRow>

                                <span className='font-16px mt-2'>
                                    I have never finished a book in one sitting. I barely finish an episode of a favorite show on tv. However, Moving On, kept my attention! The characters are fully formed.
                                </span>

                            </div>

                        </Col>
                    ))
                }

            </Row>

            <Row className="p-0 mx-0 mt-4">
                <Col xs={12}>
                    <FlexRow className="w-100 align-items-center justify-content-center app-flex-row">
                        { 
                            data?.map((item, i) => (
                                <div className={`rounded-circle mr-2 cursor-pointer-sort border-0
                                ${ i === active ? 'bg-blueShade' : 'bg-whiteSmoke' }`}
                                style={{ width: '15px', height: '15px' }}
                                onClick={() => setActive(i)}
                            >
                                </div>
                            ))
                        }
                    </FlexRow>
                </Col>
            </Row>
           
        </SectionContainer>

    );

}
 
export default Clients;