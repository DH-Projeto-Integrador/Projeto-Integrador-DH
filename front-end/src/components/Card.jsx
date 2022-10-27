import { Link } from "react-router-dom";

export function Card({ url, price, name, ...props }) {
  return (
    <Link
      {...props}
      className="block w-full max-w-sm h-max bg-white rounded-lg border border-gray-200 shadow-md"
    >
      <div>
        <img
          className="rounded-t-lg"
          // src={url}
          src="https://media.istockphoto.com/photos/strawberries-ripe-red-fresh-background-in-a-local-super-market-picture-id1209321568?b=1&k=20&m=1209321568&s=170667a&w=0&h=grgax5nRWCvVtaCIgbDKf3joueQnezHw3ATNk5jWefI="
          alt=""
        />
      </div>

      <div className="p-5">
        <span>
          {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5> */}
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Morango
          </h5>
        </span>

        {/* <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {price}
        </span> */}

        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          $ 12,00
        </span>
      </div>
    </Link>
  );
}
