import Head from 'next/head';

interface Props {
    title?: string;
}

const Layout: React.FC<Props> = ({ title = 'default title', children }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <main>{children}</main>
    </div>
);

export default Layout;
