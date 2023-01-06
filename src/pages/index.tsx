import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PayTrends</title>
        <meta name="description" content="Paytrends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Pay<span className="text-[hsl(280,100%,70%)]">Trends</span>
          </h1>

          <div className="gap-4-cols-1  grid w-3/5 grid-cols-1 md:gap-8">
            <Link
              className="flexmin-w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/"
            >
              <h2 className="text-2xl font-bold">About →</h2>
              <div className="min-w-full text-lg">
                PayTrends is a salary tracking and analysis tool that provides
                users with up-to-date pay data for various job categories in
                different countries. With a user-friendly interface, PayTrends
                allows users to search, compare, and track salary trends,
                enabling them to make informed career decisions.
              </div>
            </Link>
          </div>
          <Link href="/globe">
            <button className="rounded-full bg-orange-500 py-2 px-4 font-bold text-white hover:bg-orange-600">
              App
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
