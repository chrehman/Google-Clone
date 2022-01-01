import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Header from './components/Header';
import Response from '../Response';
import SearchResults from './components/SearchResults';
function Search({ results }) {
    console.log(results)
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />
            <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {

    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
        .then((res) => res.json())
    // AFTER SSR PASS result to client
    return {
        props: {
            results: data
        }
    }
}