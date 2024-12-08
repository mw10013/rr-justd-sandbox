import { ResizableTable } from "~/lib/components/resizable-table";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-6 text-purple-600 font-semibold text-lg flex flex-col space-y-4">
      JustD
      <ResizableTable />
    </div>
  );
}
