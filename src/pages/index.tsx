import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Navbar from "bwareact/dist/components/Navbar";
import Button from "bwareact/dist/components/Button";


const Home: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Laracamp</title>
        <meta name="description" content="Generated landing page by replica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        className={{
          active: 'text-purple',
          idle: 'text-navy'
        }}
        cta={
          <>
            <Button className="relative px-8" state="secondary">
              <Link href="/sign-in">
                <a>Sign In</a>
              </Link>
            </Button>
            <Button className="relative px-8" state="primary">
              <Link href="/sign-up">
                <a>Sign Up</a>
              </Link>
            </Button>
          </>}
        pathname={pathname}
      >
        <Link href="/">
          <a>
            Program
          </a>
        </Link>
        <Link href="/mentor">
          <a>
            Mentor
          </a>
        </Link>
        <Link href="/pricing">
          <a>
            Pricing
          </a>
        </Link>
        <Link href="/business">
          <a>
            Business
          </a>
        </Link>
      </Navbar>
    </>
  );
};

export default Home;