import styled from 'styled-components';

const PostContainer = styled.div`
    width: 48vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    background-color: #FFFFFF;
`;

const PostImage = styled.img`
    width: 50%;
    align-self: center;
`;

const FullPost = (props) => {
    const {image, content, author} = props;
    // console.log(image);
    return (
        <PostContainer>
            <PostImage src={image[0].url} alt="post" />
            <h4>{ content[0].title }</h4>
            <p>{ content[0].body }</p>
        </PostContainer>
    )
}

export default FullPost;