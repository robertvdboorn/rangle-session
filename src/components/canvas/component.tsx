import { registerUniformComponent } from "@uniformdev/canvas-react";

const Component = ({
  colour,
  title,
}: {
  colour?:
    | "bg-blue-500"
    | "bg-green-500"
    | "bg-orange-500"
    | "bg-red-500"
    | "bg-purple-500";
  title: string;
}) => {
  return (
    <div
      className={`w-full max-w-md ${
        colour || "bg-black"
      } text-white p-6 my-6 shadow-lg text-center`}
    >
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
    </div>
  );
};

registerUniformComponent({
  type: "component",
  component: Component,
});

export default Component;
