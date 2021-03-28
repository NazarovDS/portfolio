import {Navbar} from "../components/navbar/Navbar";
import React from "react";
import {Container} from "../components/container/Container";
import Head from "next/head";

export default function Home() {
    const [page, setPage] = React.useState('home')
    const handleSetPage = (page:string) => {
        setPage(page)
    }
  return (
   <>
       <Head>
           <title>Portfolio | Nazarov Dmitriy</title>
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           <meta name="keywords" content="Nazarov Dmitriy, Назаров Дмитрий, портфолио, portfolio" />
           <meta charSet="utf-8"/>
       </Head>
       <Navbar handleSetPage={handleSetPage}/>
       <Container page={page}/>
     </>
  )
}
