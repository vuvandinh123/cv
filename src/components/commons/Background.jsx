import React from "react";

const Background = () => {
  return (
    <div className="background">
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake text-white">❅</div>
        <div className="snowflake text-white">❅</div>
        <div className="snowflake text-white">❄</div>
        <div className="snowflake text-white">🍁</div>
        <div className="snowflake text-white">❅</div>
        <div className="snowflake text-white">✿</div>
        <div className="snowflake text-white">🍁</div>
        <div className="snowflake text-white">🍁</div>
        <div className="snowflake text-white">❄</div>
        <div className="snowflake text-white">❄</div>
        <div className="snowflake text-white">❄</div>
        <div className="snowflake text-white">🍃</div>
        <div className="snowflake text-white">❆</div>
        <div className="snowflake text-white">❅</div>
        <div className="snowflake text-white">❅</div>
        <div className="snowflake text-white">🍁</div>
      </div>
      <div className="air dark:!hidden air1"></div>
      <div className="air dark:!hidden air2"></div>
      <div className="air dark:!hidden air3"></div>
      <div className="air dark:!hidden air4"></div>
    </div>
  );
};

export default Background;
