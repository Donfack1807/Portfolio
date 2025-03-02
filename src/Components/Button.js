export function Button({ children, asChild, ...props }) {
    return (
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" {...props}>
        {asChild ? children : <span>{children}</span>}
      </button>
    );
  }
  