import { Routes } from "../Routes/Routes";
import { BsGraphUp } from 'react-icons/bs';
import { Images } from "./Images";

export const sidebarContent = [
    { id: 0, item: 'Statics', route: Routes.dashboard, icon: <BsGraphUp className="side-icons mr-2" /> }
];

export const topBarContent = [
    { id: 1, value: 'Home', sectionId: 'home-section' },
    { id: 2, value: 'About', sectionId: 'about-section' },
    { id: 3, value: 'Contact Us', sectionId: 'features-section' },
    { id: 4, value: 'Buy Book On Amazon', sectionId: 'book-section' },
    { id: 5, value: 'Buy Book NFT', sectionId: 'book-section' },
    {id: 6, value: '', sectionId: 'dashboard-section' }
];