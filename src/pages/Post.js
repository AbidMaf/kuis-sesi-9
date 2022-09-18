import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FullPost } from "../components/organism";

export default function Post () {
    // debugger;
    const [content, setContent] = useState([]);
    const [user, setUser] = useState([]);
    const [image, setImage] = useState([]);
    let params = useParams();

    const ContainerPage = styled.div`
        padding: 3vh 10vw;
        margin: 0 auto;
    `

    // console.log('ini = ', Object.values(authorData.filter(item => item.id == contentData.userId))[0].name);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((raw) => Object.values(raw).filter((o) => {
                return o.id == params.id
            }))
            .then(
                (result) => {
                    setContent(result);
                }
            )
    }, [content]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((raw) => Object.values(raw).filter(item => item.id == content[0].userId))
            .then(
                (result) => {
                    setUser(result);
                }
            )
    }, [user]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then((raw) => Object.values(raw).filter(item => item.id === content[0].id))
            .then(
                (result) => {
                    setImage(result);
                }
            )
    }, [image]);

    // console.log(image[0].url)

    return (
        <ContainerPage>
            <h1>Post</h1>
            <FullPost image={image} content={content} author={user} />
        </ContainerPage>
    )
}