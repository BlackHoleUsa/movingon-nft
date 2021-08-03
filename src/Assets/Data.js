import { Routes } from "../Routes/Routes";
import { BsGraphUp } from 'react-icons/bs';
import { Images } from "./Images";

export const sidebarContent = [
    { id: 0, item: 'Statics', route: Routes.dashboard, icon: <BsGraphUp className="side-icons mr-2" /> }
];

export const topBarContent = [
    { id: 1, value: 'Home', sectionId: 'home-section' },
    { id: 2, value: 'About', sectionId: 'about-section' },
    { id: 3, value: 'History', sectionId: 'history-section' },
    { id: 4, value: 'Features', sectionId: 'features-section' }
];