"use client";

import Head from "next/head";
import NewTweet from "@/components/NewTweet";
import Tweet from "@/components/Tweet";
import { getLastTweets } from "@/services/Web3Service";

import { useState, useEffect } from "react";

export default function Timeline() {
  const [tweets, setTweets] = useState([]);

  async function loadTweets(page = 1) {
    try {
      const results = await getLastTweets(page);
      setTweets(results);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  useEffect(() => {
    loadTweets(1);
  }, []);

  return (
    <>
      <Head>
        <title>CrypTwitter | Timeline</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="layout">
            <NewTweet />

            {tweets && tweets.length ? (
              tweets.map((t) => <Tweet key={Number(t.timestamp)} data={t} />)
            ) : (
              <p>Nada para ver aqui. Faça o primeiro tweet. </p>
            )}
            <div className="center">
              <input
                type="button"
                className="btn btn-primary"
                value="Mais Tweets"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
