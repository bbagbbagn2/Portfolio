import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Head(){
    <Header>
        <HeaderMessage to = '/home'>Home</HeaderMessage>
        <div/>
        <HeaderMessage to ='#'>About</HeaderMessage>
        <HeaderMessage to='#'>History</HeaderMessage>
        <HeaderMessage to='#'>Activity</HeaderMessage>
    </Header>
}

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 30px;
    
    display: grid;
    grid-template-columns: 10% 1fr 10% 10% 10%;
    place-items: center;
    place-content: center;

    background: black;
    color: white;
    font-size: 16px;

    z-index: 999;
`

const HeaderMessage = styled(Link)`
    color: white;
    transition-duration: 0.5s;
    &:hover{
        color: silver;
    }
`;