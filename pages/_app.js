import 'antd/dist/antd.min.css';
import '../styles/globals.css'

import { Layout } from "antd";
import Navbar from '../components/Navbar';

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <Content style={{ padding: "40px 50px" }}><Component {...pageProps} /></Content>
            <Footer style={{ textAlign: 'center', background: '#ffffff' }}>The Cocktail ©2022 Created by Bagus Pramajaya</Footer>
        </>
    )
}

export default MyApp
