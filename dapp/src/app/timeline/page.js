"use client";

import Head from "next/head";
import NewTweet from "@/components/NewTweet";
import Tweet from "@/components/Tweet";
import { getLastTweets } from "@/services/Web3Service";

import { useState, useEffect } from "react";

export default function Timeline() {

    async function loadTweets(page = 1) {
        try {
            const results = await getLastTweets(page);
            if (page > 1) {
                tweets.push(...results);
                setTweets(tweets.reverse());
            }
            else
                setTweets(results.reverse());
        }
        catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    useEffect(() => {
        loadTweets(page);
    }, [page])

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
            <Tweet data={} />
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
