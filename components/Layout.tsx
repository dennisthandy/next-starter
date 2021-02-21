import Head from 'next/head';
import Header from './Header';

interface Props {
    title?: string;
}

const Layout: React.FC<Props> = ({ title = 'default title', children }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Header />
        <main>{children}</main>
    </div>
);

export default Layout;
