// src/components/ui/badge.jsx
export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded ${className}`}
    >
      {children}
    </span>
  );
}
