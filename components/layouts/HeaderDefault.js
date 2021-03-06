import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default ({ title = 'This is the default title' }) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
            <nav>
                <Link href='/'>
                    <a>Home</a>
                </Link>{' '}
                |
                 <Link href='/about'>
                    <a>About</a>
                </Link>{' '}
                |
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </nav>
        </header>
    </React.Fragment>
)