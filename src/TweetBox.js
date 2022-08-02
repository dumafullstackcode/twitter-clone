import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import { db } from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "DumaaDev",
      username: "Dumoney23",
      verified: true,
      text: tweetMessage,
      Avatar:
        "https://i.pinimg.com/564x/88/d9/fa/88d9faa3959bedd1f0eca6fca1de7c67.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/564x/88/d9/fa/88d9faa3959bedd1f0eca6fca1de7c67.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whats happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          className="terrtBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
