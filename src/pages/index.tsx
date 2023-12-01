import * as React from "react";
import { Background } from "../components/background";
import { Content } from "../components/content";

const IndexPage = () => {
  return (
    <div className="relative">
      <Background />
      <Content />
    </div>
  );
};

export default IndexPage;
