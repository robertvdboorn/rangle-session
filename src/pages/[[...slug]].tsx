"use client";

import { RootComponentInstance } from "@uniformdev/canvas";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/route";
import { Button } from "@/components/ui/button";
import { CANVAS_DRAFT_STATE, CANVAS_PUBLISHED_STATE } from "@uniformdev/canvas";
import "../components/canvas/component";
import { useUniformContext } from "@uniformdev/context-react";

export const getServerSideProps = withUniformGetServerSideProps({
  // fetching draft composition in dev mode for convenience
  requestOptions: {
    state:
      process.env.NODE_ENV === "development"
        ? CANVAS_DRAFT_STATE
        : CANVAS_PUBLISHED_STATE,
  },
  handleComposition: async ({ compositionApiResponse }) => {
    const { composition } = compositionApiResponse || {};
    return {
      props: {
        data: composition,
      },
    };
  },
});

export default function Home({ data }: { data: RootComponentInstance }) {
  const { context } = useUniformContext();

  const setPreference = (color: string) => {
    context.update({
      quirks: {
        preference: color,
      },
    });
  };

  return (
    <UniformComposition data={data}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <UniformSlot name="content" />
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Personalization Demo</p>
          <div className="space-x-4">
            <Button onClick={() => setPreference("red")} variant="destructive">
              Set Preference to Red
            </Button>
            <Button
              onClick={() => setPreference("green")}
              variant="default"
              className="bg-green-500 hover:bg-green-600"
            >
              Set Preference to Green
            </Button>
            <Button
              onClick={() => setPreference("blue")}
              variant="default"
              className="bg-blue-500 hover:bg-blue-600"
            >
              Set Preference to Blue
            </Button>
          </div>
        </div>
      </div>
    </UniformComposition>
  );
}
