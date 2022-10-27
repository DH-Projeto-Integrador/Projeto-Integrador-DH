export function Button({ children, ...props }) {
  return (
    <button
      className="w-max rounded-full py-2 px-4 bg-red-500 text-center"
      {...props}
    >
      {children}
    </button>
  );
}
