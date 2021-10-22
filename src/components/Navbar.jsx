import React, { useState } from 'react';
import { Navbars, LogoTitle, Ulist, Anchor, LinkItems, Icon, Cont,Lstyle } from './style';


function Navbar() {
    let [state , setState] = useState({ hidden: false});

    let Check = () => {
        if( state.hidden === true ){
            return Lstyle();
        }else{
            return null;
        }
    }

    let heightCheck = () => {
        if( state.hidden === true ){
            return {
                height: '250px',
            }
        }else{
            return null;
        }
    }

    return (
        <Navbars style={ heightCheck() }>
            <Cont>
                <div>
                    <LogoTitle>Ultra Profile</LogoTitle>
                </div>
                
                <Ulist style={ Check() }>
                    <li><LinkItems to='/React-Template'>home</LinkItems></li>
                    <li><Anchor>Work</Anchor></li>
                    <li><Anchor>Portfolio</Anchor></li>
                    <li><Anchor>Resume</Anchor></li>
                    <li><Anchor>About</Anchor></li>
                    <li><LinkItems to='/contact'>contact</LinkItems></li>
                </Ulist>
                <Icon>
                    <i className="fa fa-bars" onClick={() => setState( {hidden: !state.hidden})}></i>
                </Icon>
                
            </Cont>
            
        </Navbars>
    )
}

export default Navbar;
