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
	return (
		<UniformComposition data={data}>
			<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
				<UniformSlot name="content" />
				<div className="mt-8 text-center">
					<p className="text-gray-600 mb-2">
						Personalization Demo
					</p>
					<Button
						onClick={() => {
							context.update({
								quirks: {
									preference: "green",
								},
							});
						}}
						variant="default"
					>
						Set Preference Quirk to Green
					</Button>
				</div>
			</div>
		</UniformComposition>
	);
}
