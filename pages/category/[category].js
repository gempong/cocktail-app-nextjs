import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Link from 'next/link';
import { Input, Card, Col, Row, Typography, Empty, Skeleton } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from 'next/router'

const { Meta } = Card;
const { Title } = Typography;

function Loading() {
    return (
        <Col span={6}>
            <Skeleton.Avatar className="w-full" active size="large" shape="square" />
            <Skeleton active style={{ marginBottom: '50px' }} />
        </Col>
    )
}

function Category() {
    const router = useRouter()
    const { category } = router.query

    const [state, setState] = useState({ post: [], notFound: false, loading: false });

    function search(event) {
        setState({ loading: true });
        const inputValue = event.target.value;
        try {
            fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
            )
                .then((response) => response.json())
                .then((result) => {
                    if (inputValue !== "") {
                        setState({ notFound: false });
                        setState({ post: result.drinks });

                        if (result.drinks === null) {
                            setState({ notFound: true });
                        }
                    } else {
                        setState({ notFound: false });
                        getAllDrinks();
                    }
                });
        } catch (error) {
            console.log(error.response);
        }
    }

    function getAllDrinks() {
        setState({ loading: true });
        try {
            fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
            )
                .then((response) => response.json())
                .then((result) => {
                    setState({ loading: false });
                    setState({ post: result.drinks });
                });
        } catch (error) {
            setState({ loading: false });
            console.log(error.response);
        }
    }

    React.useEffect(() => {
        getAllDrinks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const dummyCard = [];

    for (let i = 1; i <= 9; i++) {
        dummyCard.push(Loading());
    }

    return (
        <>
            <Head>
                <title>{category}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container mx-auto">
                <Row
                    gutter={20}
                    style={{
                        marginBottom: "30px",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Col>
                        <Title style={{ marginBottom: "0" }}>
                            {category}
                        </Title>
                    </Col>
                    <Col>
                        <Input
                            onChange={search}
                            size="large"
                            placeholder="Search Drinks"
                            prefix={<SearchOutlined />}
                        />
                    </Col>
                </Row>
                <Row gutter={20}>
                    {state.notFound === true && (
                        <Col span={24}>
                            <Empty />
                        </Col>
                    )}
                    {!!state.post && !state.post.length > 0 || state.loading && dummyCard}
                    {!!state.post &&
                        state.post.map((i) => (
                            <Col span={6} key={i.idDrink}>
                                <Link href={"/drink/" + i.idDrink}>
                                    <Card
                                        hoverable
                                        style={{ marginBottom: "20px" }}
                                        cover={<img alt="example" src={i.strDrinkThumb} />}
                                    >
                                        <Meta title={i.strDrink} description={i.strCategory} />
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                </Row>
            </div>
        </>
    )
}

export default Category
