import { Link } from "react-router-dom";

export function Profile() {
  return (
    <div className="flex justify-center flex-col gap-4 items-center h-screen">
      <h1 className="text-4xl">Hello Profile!</h1>

      <button className="bg-red-500 rounded">
        <Link
          to="/"
          className="block text-white font-medium uppercase px-4 py-2"
        >
          home
        </Link>
      </button>
    </div>
  );
}
