import React, { useState, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';
import RenderIfVisible from 'react-render-if-visible'
// import { CardPost } from '../components/organism';

const CardPostComponent = React.lazy(() => import('../components/organism/CardPost'));

const HomeSection = styled.section`
    display: flex;
    gap: 3vh;
    flex-wrap: wrap;
    justify-content: center;
`;

const PostSection = styled.section`
    width: 100vw;
    display: flex;
    gap: 3vh;
    flex-wrap: wrap;
    justify-content: center;
`;

const Home = () => {
    const [content, setContent] = useState([]);
    const [user, setUser] = useState([]);
    const [image, setImage] = useState([]);
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            // .then((raw) => raw.filter((o) => {
            //     return o.userId == 10
            // }))
            .then(
                (result) => {
                    setContent(result);
                }
            )
    }, [content]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            // .then((raw) => {
            //     raw.filter((o) => Object.values(o).every((k) => k == 10))
            // })
            .then(
                (result) => {
                    setUser(result);
                }
            )
    }, [user]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(
                (result) => {
                    setImage(result);
                }
            )
    }, [image]);

    // console.log(content.concat(user));

    return(
        <HomeSection>
            <h1>Home</h1>
            <PostSection>
            {
                content.map((item, index) => {
                    return(
                        <>
                            <RenderIfVisible>
                                <CardPostComponent authorData={user} contentData={item} imageData={image} />
                            </RenderIfVisible>
                        </>
                    )
                })
            }
            </PostSection>
        </HomeSection>
    )
}

export default Home;