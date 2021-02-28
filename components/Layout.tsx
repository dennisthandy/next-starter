import Head from 'next/head';
// import Footer from './Footer';
import Header from './Header';

interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    children: JSX.Element;
}

const Layout: React.FC<Props> = ({
    title = 'default title',
    description = 'default desctiption',
    keywords = 'default keyword',
    children,
}) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords}></meta>

            <title>{title}</title>

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />

            {/* IOS */}
            <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />

            {/* Android */}
            <link rel="icon" type="image/png" sizes="192x192" href="/images/icons/android-icon-192x192.png" />

            {/* Manifest.json */}
            <link rel="manifest" href="/manifest.json" />
        </Head>
        <Header />
        <main className="main">{children}</main>
        {/* <Footer /> */}
    </div>
);

export default Layout;
