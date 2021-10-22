import styled from "styled-components";

export const ProfileSkills = styled.div `
    padding: 50px 0;
    overflow: hidden;
    @media (max-width:768px) {
        div div {
            width: 100%;
            float: none
        }
        div div div {
            margin-bottom: 20px;
        }
    }
`

export const ProfileStyle = styled.div `
    width: 50%;
    float: left;
`

export const ProfileList = styled.ul `
    list-style: none;
`

export const ProfileItem = styled.li `
    margin-bottom: 8px
`

export const ProfileSpan = styled.span `
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const SpanWeb = styled.span `
    font-weight: normal;
    color: #eb5424
`

export const Skills = styled.div `
    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const SkillsBbar = styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const SkillsTitle = styled.span `
    float: left;
`

export const SkillsPerc = styled.span `
    float: right;
    margin-right: 100px
`

export const SkillsParent = styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const SkillsSpan = styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
`

export const Title = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`

export const TitleSpan = styled.span `
    font-weight: normal;
`