import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.png';

const MyHelmet = () => {

    return (<Helmet>
        <title>Julian</title>
        <meta
            name="description"
            content="A software engineer worth telling your friends about"
        />
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />
    </Helmet>)

}
export default MyHelmet;