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
            
            if(active === 5){
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
        { id: 0, title: 'Bedi', time: 'a day ago', text: 'Spectacular Read', src: Images.clients[0], comment: 'What an amazing author! I simply could not put this book down. Quickly becoming one of my favorite of all time.' },
        { id: 1, title: 'Nirvana0707',time: '12 hours ago', text: 'Modern Day Catcher In The Rye', src: Images.clients[1], comment: 'I waited of all my adolescent and adult life for JD Salinger to write again, a wish that was never realized; however I have found something to fill this void, and that is this book, "Moving On" by Caban. What a wonderful coming of age tale, a story of a young man who is lost and trying to find his way in the world. Simply classic. Heartfelt storyline; you will fall in love with this character and this book.' },
        { id: 2, title: 'Ant-A',time: '19 days ago', text: '1990`S NYC', src: Images.clients[2], comment: 'The author does a great job telling the story of a troubled teen growing up in New York City in the 1990`s showing many different sides of rising up from a checkered past and trying to reform relationships. You will want to keep reading to see what happens next!' },
        { id: 3, title: 'GaelicSteel',time: '12 days ago', text: 'Love This Book!!', src: Images.clients[2], comment: 'This book will sweep you away, and leave you wanting more! I can`t wait to read Caban`s next book!' },
        { id: 4, title: 'Danielle123',time: '15 days ago', text: 'Great Read From Start To Finish', src: Images.clients[2], comment: "This was truly a wonderful book by a wonderful author. It's an enjoyable read without too many complexities that allow the reader to really dig in and enjoy every page. Perfect length for a vacation read" },
        { id: 5, title: 'DBey3',time: '16 days ago', text: 'Great Read !!!', src: Images.clients[2], comment: "This book is amazing! The author conveys such a vivid storyline. You become enticed and emotionally connected to the characters. Great read, I highly recommend this book! Looking forward to more content from this author!" }
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
                        <Col key={i} xs={12} sm={12} md={6} lg={4} xl={4} className="margin-clients-bottom" style={{marginBottom: '30px'}}>
                            
                            <div className="w-100 app-flex-column p-3 h-100" 
                            style={{ border: i === active ? '2px solid var(--blueShade)' : '2px solid var(--whiteSmoke)' }}>
                                
                                <FlexRow className="w-100 align-items-center justify-content-start d-inline-flex position-relative">
                                    
                                    {/* <img alt="" className="rounded-circle mr-3" src={item?.src} /> */}

                                    <div className="app-flex-column">
                                        <span className="font-16px" style={{fontWeight: 'bold'}}>{item?.title}
                                         {/* <span className='font-12px ml-1' style={{fontWeight:'normal'}}>{item?.time}</span> */}
                                         </span>
                                        <span className="font-12px" style={{fontWeight:'bolder'}}>{item?.text}</span>
                                    </div>
                                    

                                    <div className="ml-auto">
                                        {/* <span>4.</span> */}
                                        <AiFillStar className="font-16px ml-1" style={{ color: 'orange' }} />
                                        <AiFillStar className="font-16px ml-1" style={{ color: 'orange' }} />
                                        <AiFillStar className="font-16px ml-1" style={{ color: 'orange' }} />
                                        <AiFillStar className="font-16px ml-1" style={{ color: 'orange' }} />
                                        <AiFillStar className="font-16px ml-1" style={{ color: 'orange' }} />
                                    </div>

                                </FlexRow>

                                <span className='font-16px mt-2'>
                                    {item?.comment}
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
                                onClick={() => setActive(i)} key={i}
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