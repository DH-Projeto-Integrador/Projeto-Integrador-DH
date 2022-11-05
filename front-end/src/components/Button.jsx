export function Button({ children, ...props }) {
  return (
    <button
      className="rounded-full py-2 px-4 bg-red-500 text-center hover:bg-red-700 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
