import React from "react";
import './Layout.css';

class MainLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sidebar: false
        }
    }

    render() {
        
        const { isLogin, children } = this.props;
    
        if (isLogin || localStorage.getItem('isLogin')) {
            return (
                <div className="w-100 app-flex-column">
                    { children }
                </div>
            )
        }
        else return children;    
    }

}

export default MainLayout;