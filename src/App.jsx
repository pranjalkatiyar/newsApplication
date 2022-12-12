import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards/NewsCards";

// import wordsToNumbers from "words-to-numbers";
export default function App() {
  const alanKey =
    "3da52731addff527bbd38a70a6d64ac52e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [newsArticles, setnewsArticles] = useState([]);
  useEffect(() => {
    /*alanBtn=creates the button in automatically*/
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        console.log("number", number);
        if (command === "newHeadlines") {
          console.log(articles);
          setnewsArticles(articles);
        } else if (command === "open") {
          // const parsedNumber =
          //   number.length > 2 ? wordsToNumbers(number) : number;
          // console.log(number);
          const article = articles[number - 1];
          // if (parsedNumber > articles.length) {
          //   alanBtn().playText("Please try that again...");
          // } else if (article) {
            window.open(article.url, "_blank");
            // alanBtn().playText("Opening...");
          // } else {
          //   alanBtn().playText("Please try that again...");
          // }
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}
