import React from 'react';

import { HomeStyle, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeBtn } from './style';

function Home() {
    return (
        <HomeStyle>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Achraf Ali</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a junior Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeStyle>
    )
}

export default Home;
