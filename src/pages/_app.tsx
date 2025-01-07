import "@/styles/globals.css";
import { UniformContext } from "@uniformdev/context-react";
import { UniformAppProps } from "@uniformdev/context-next";
import createUniformContext from "../lib/uniform/uniformContext";

const clientContext = createUniformContext();

export default function MyApp({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext
      context={serverUniformContext ?? clientContext}
      outputType={"standard"}
      // enable for edge-side rendering (will need a special context-edge npm package)
      //outputType={"edge"}
    >
      <Component {...pageProps} />
    </UniformContext>
  );
}