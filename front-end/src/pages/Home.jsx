import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex justify-center flex-col gap-4 items-center h-screen">
      <h1 className="text-4xl">Hello World!</h1>

      <button className="bg-red-500 px-4 py-2 rounded">
        <Link to="/profile" className="text-white font-medium uppercase">
          profile
        </Link>
      </button>
    </div>
  );
}
