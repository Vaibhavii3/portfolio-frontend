export function Button({ children, className, ...props }) {
    return <button className={`p-2 bg-blue-500 text-white ${className}`} {...props}>{children}</button>;
  }
  