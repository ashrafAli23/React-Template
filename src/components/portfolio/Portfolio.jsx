import React, { useEffect , useState } from 'react';
import axios from 'axios';

import { PortfolioStyle ,PortfolioTitle ,Span ,PortfolioList ,PortfolioItem
    ,BoxImg ,BoxOverlay ,BoxSpan ,BoxDiv } from './style.js';

function Portfolio() {

    const [state , setState] = useState([]);

    useEffect(() => {
        axios.get('data.json').then(res => setState( res.data.portfolio ) )
            .catch(err => console.log('error in' + err))
    }, [])

    const PortoItem = state.map(item => {
        return(
            <BoxDiv key={item.id} >
                <BoxImg src={item.image} alt="" />
                <BoxOverlay>
                    <BoxSpan>
                        Show Image
                    </BoxSpan>
                </BoxOverlay>
            </BoxDiv>
        )
    })

    return (
        <PortfolioStyle>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>CSS</PortfolioItem>
                <PortfolioItem>Reactjs</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div>
                {PortoItem}
            </div>
        </PortfolioStyle>
    )
}

export default Portfolio;
