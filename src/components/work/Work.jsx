import React, { useEffect , useState } from 'react';
import axios from 'axios';

import { Workstyle ,WorkTitle ,Span ,Part ,Icon ,PartTitle ,Line, PartDesc } from './style';

function Work() {

    const [state , setState] = useState([]);

    useEffect(() => {
        axios.get('data.json').then(res => setState( res.data.works ));
    } , []);

    const DataList = state.map(item => {
        return (
            <Part first={item.id} key={item.id}>
                <Icon className={item.icon_name}></Icon>
                <PartTitle>{item.title}</PartTitle>
                <Line/>
                <PartDesc>
                    {item.body}
                </PartDesc>
            </Part>
        )
    })

    return (
        <Workstyle id='work'>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {DataList}
            </div>
        </Workstyle>
    )
}

export default Work;
