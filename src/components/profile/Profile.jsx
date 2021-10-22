import React from 'react';

import { ProfileSkills ,ProfileStyle ,ProfileList ,ProfileItem ,ProfileSpan ,SpanWeb,
    Skills ,SkillsDesc ,SkillsBbar ,SkillsTitle ,SkillsPerc ,SkillsParent ,SkillsSpan ,Title, TitleSpan } from './style.js';


function Profile() {
    return (
        <ProfileSkills id='profile'>
            <div className="container">
                <ProfileStyle>
                    <Title><TitleSpan>My </TitleSpan>Profile</Title>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            Achraf Ali
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Birthday</ProfileSpan>
                            23/5/2000
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Address</ProfileSpan>
                            Zagazig
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Phone</ProfileSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Email</ProfileSpan>
                            achraf@achraf.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Website</ProfileSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileStyle>
                <Skills>
                    <Title>Some <TitleSpan>skills</TitleSpan></Title>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <SkillsBbar>
                        <SkillsTitle>HTML</SkillsTitle>
                        <SkillsPerc>100%</SkillsPerc>
                        <SkillsParent>
                            <SkillsSpan style={{width: '100%'}}></SkillsSpan>
                        </SkillsParent>
                    </SkillsBbar>
                    
                    <SkillsBbar>
                        <SkillsTitle>CSS3</SkillsTitle>
                        <SkillsPerc>90%</SkillsPerc>
                        <SkillsParent>
                            <SkillsSpan style={{width: '90%'}}></SkillsSpan>
                        </SkillsParent>
                    </SkillsBbar>
                    
                    <SkillsBbar>
                        <SkillsTitle>Java Script</SkillsTitle>
                        <SkillsPerc>85%</SkillsPerc>
                        <SkillsParent>
                            <SkillsSpan style={{width: '85%'}}></SkillsSpan>
                        </SkillsParent>
                    </SkillsBbar>
                </Skills>
            </div>
        </ProfileSkills>
    )
}

export default Profile;
