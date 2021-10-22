import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbars = styled.div`
    padding: 10px 0;
    background: #fff;
    border-bottom: 1px solid #000;
`
export const LogoTitle = styled.h2 `
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
`
export const Ulist = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    column-gap: 20px;
`
export const Anchor = styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 0;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #eb5424;
    }
`
export const LinkItems = styled(Link) `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 0;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #eb5424;
    }
`

export const Cont = styled.div `
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 20% 80%;

    @media (max-width: 600px) {
        grid-template-columns: 90% 10%;
        align-items: center;
        position: relative;
        justify-content: center;
        ul {
            display: none;
            width: 100%;
            position: absolute;
            top: 40px; right: 0;
            flex-direction: column;align-items: center;row-gap: 10px;
            z-index: 100;
        }
        ul li a {
            padding: 0 0;
        }
        div {
            display: inline-block;
        }
        div > i,
        div > h2 {
            font-size: 20px;
        }
    }
`

export const Icon = styled.div `
    display: none;
    text-align: end;
    cursor: pointer;
`

export const Lstyle = () => {
    return{
        display: 'flex',
    }
}

