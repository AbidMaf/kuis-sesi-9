import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #1a1a1a;
    box-shadow: 0 1px 2px rgba(121, 119, 119, 0.2);
    margin: .4vh 0;
    background-color: #FFFFFF;
    width: 30vw;
    padding: 1.3vw;
    gap: 1vw;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-height: 10%;
    gap: 12px;
`;

const UserAvatar = styled.img`
    width: 24px;
    aspect-ratio: 1/1;
    border-radius: 100vw;
    background-image: url('https://xsgames.co/randomusers/avatar.php?g=pixel');
    background-size: cover;
`;

const UserName = styled.span`
    font-size: 10pt;
    color: #696868;
    font-weight: 400;
`;

const Content = styled.div`
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ContentTitle = styled(Link)`
    font-size: 14pt;
    font-weight: 600;
    text-decoration: none;
    color: #1a1a1a;
`;

const ContentParagraph = styled.p`

`;

const CardPost = (props) => {
    const {contentData, authorData, imageData} = props;
    
    const ContentImage = styled.img`
        width: 100%;
        aspect-ratio: 16 / 9;
        background-image: url(${imageData.url});
        background-size: cover;
    `;

    // console.log('ini = ', Object.values(authorData.filter(item => item.id == contentData.userId))[0].name);
    // console.log(imageData);
    return (
        <CardContainer>
            <Content>
                <ContentImage src={imageData.url}></ContentImage>
                <ContentTitle to={'/Post/'+contentData.id}>{contentData.title}</ContentTitle>
                <ContentParagraph>{contentData.body}</ContentParagraph>
            </Content>
            <UserInfo>
                <UserAvatar />
                <UserName>{Object.values(authorData.filter(item => item.id == contentData.userId))[0].name}</UserName>
            </UserInfo>
        </CardContainer>
    );
}

export default CardPost