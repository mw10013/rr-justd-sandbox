import type { Route } from "./+types/home";
import { Button } from "~/lib/components/ui";

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
      <Button>JustD Button</Button>
    </div>
  );
}
