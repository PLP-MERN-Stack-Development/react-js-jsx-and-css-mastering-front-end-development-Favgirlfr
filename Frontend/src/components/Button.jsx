const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
}

export default function Button({ 
  variant = 'primary',
  type = 'button',
  className = '',
  children,
  ...props 
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}