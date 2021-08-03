import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';

const ChooseBook = (props) => {
    
    const data = [
        { id: 1, icon: Images.chooseBookIcons[0], title: 'Easily Transferable', text: 'NFTs are purchased and sold on unique markets' },
        { id: 2, icon: Images.chooseBookIcons[1], title: 'Trustworthy', text: 'Non-fungible tokens are used in blockchain technologies' },
        { id: 3, icon: Images.chooseBookIcons[2], title: 'Maintain Ownership Rights', text: 'This refers to a network of shared platforms the size of an NFT, where no buyer can change the data later' }
    ];

    return(

        <SectionContainer className="bg-lightPrimary text-black">
            
            <span className="font-14px mb-1 d-block text-center">
                Why Choose The Book
            </span>

            <span className="font-25px mb-3 d-block text-center">
                What's Inside The Book. Chapters Covered.
            </span>

            <span className="font-16px d-block text-center">
                With the help of his friends and family members, he initially begins to successfully climb the rungs of the ladder to this new life of achievement and prosperity; however, his life’s trials, tribulations and extreme self-doubt intervene, sending Justin into a whirlwind of confusion, insecurity and, ultimately, a relapse into despair.
            </span>

            <hr className="my-5 bg-black rounded w-100" />

            <span className="font-25px mb-5 d-block text-center">
                Benefits Of Non-Fungible Token.
            </span>            

            <Row className="m-0 p-0">
                
                {
                    data?.map((item, i) => (
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} key={i} 
                        className={`app-flex-column ${ i < 2 ? 'margin-features-bottom' : '' } `}>
    
                            <img alt="" src={item?.icon} className="mb-3" width="40px" height="40px" />
                            <span className="d-block mb-3 font-18px">{item?.title}</span>
                            <span className="d-block font-16px">{item?.text}</span>
    
                        </Col>
                    ))
                }

            </Row>

        </SectionContainer>

    );

}
 
export default ChooseBook;