export function Input({ type, placeholder, className, ...props }) {
    return <input type={type} placeholder={placeholder} className={`p-2 border ${className}`} {...props} />;
  }
  