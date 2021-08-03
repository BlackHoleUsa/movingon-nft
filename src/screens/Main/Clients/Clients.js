import React from 'react';
import { SectionContainer } from 'components/SectionContainer/SectionContainer';
import { Row, Col } from 'react-bootstrap';
import { Images } from 'Assets/Images';

const Clients = (props) => {
    
    const data = [
        { id: 1, icon: Images.chooseBookIcons[0], title: 'Easily Transferable', text: 'NFTs are purchased and sold on unique markets' },
        { id: 2, icon: Images.chooseBookIcons[1], title: 'Trustworthy', text: 'Non-fungible tokens are used in blockchain technologies' },
        { id: 3, icon: Images.chooseBookIcons[2], title: 'Maintain Ownership Rights', text: 'This refers to a network of shared platforms the size of an NFT, where no buyer can change the data later' }
    ];

    return(

        <SectionContainer className="bg-lightPrimary text-black">
        
            
           
        </SectionContainer>

    );

}
 
export default Clients;