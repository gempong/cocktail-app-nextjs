import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { Card, Typography, Image, Col, Row } from "antd";
import { useRouter } from 'next/router'

const { Title } = Typography;

const Drink = () => {
    const router = useRouter()
    const { id } = router.query
    const [state, setState] = useState({ post: {} });

    useEffect(() => {
        try {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((response) => response.json())
                .then((result) => {
                    setState({ post: result.drinks[0] });
                });
        } catch (error) {
            console.log(error.response);
        }
    }, [id]);

    return (
        <>
            <Head>
                <title>{!!state.post && state.post.strDrink}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='container mx-auto'>
                <Row gutter={30}>
                    <Col span={8}>
                        <Image
                            width={"100%"}
                            src={!!state.post && state.post.strDrinkThumb}
                        />
                    </Col>
                    <Col span={16}>
                        <Card style={{ width: "100%", height: "100%" }}>
                            <Title style={{ marginBottom: "30px" }}>
                                {!!state.post && state.post.strDrink}
                            </Title>
                            <Title level={4}>Ingredients</Title>
                            <ul style={{ marginBottom: "30px" }}>
                                {!!state.post.strIngredient1 && (
                                    <li>{state.post.strIngredient1}</li>
                                )}
                                {!!state.post.strIngredient2 && (
                                    <li>{state.post.strIngredient2}</li>
                                )}
                                {!!state.post.strIngredient3 && (
                                    <li>{state.post.strIngredient3}</li>
                                )}
                                {!!state.post.strIngredient4 && (
                                    <li>{state.post.strIngredient4}</li>
                                )}
                                {!!state.post.strIngredient5 && (
                                    <li>{state.post.strIngredient5}</li>
                                )}
                                {!!state.post.strIngredient6 && (
                                    <li>{state.post.strIngredient6}</li>
                                )}
                                {!!state.post.strIngredient7 && (
                                    <li>{state.post.strIngredient7}</li>
                                )}
                                {!!state.post.strIngredient8 && (
                                    <li>{state.post.strIngredient8}</li>
                                )}
                                {!!state.post.strIngredient9 && (
                                    <li>{state.post.strIngredient9}</li>
                                )}
                                {!!state.post.strIngredient10 && (
                                    <li>{state.post.strIngredient10}</li>
                                )}
                                {!!state.post.strIngredient11 && (
                                    <li>{state.post.strIngredient11}</li>
                                )}
                                {!!state.post.strIngredient12 && (
                                    <li>{state.post.strIngredient12}</li>
                                )}
                                {!!state.post.strIngredient13 && (
                                    <li>{state.post.strIngredient13}</li>
                                )}
                                {!!state.post.strIngredient14 && (
                                    <li>{state.post.strIngredient14}</li>
                                )}
                                {!!state.post.strIngredient15 && (
                                    <li>{state.post.strIngredient15}</li>
                                )}
                            </ul>
                            <Title level={4}>Glass</Title>
                            <p style={{ marginBottom: "30px" }}>{state.post.strGlass}</p>
                            <Title level={4}>Instructions</Title>
                            <p style={{ marginBottom: "30px" }}>{state.post.strInstructions}</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Drink