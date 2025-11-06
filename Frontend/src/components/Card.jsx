export default function Card({ 
  title,
  className = '',
  children,
  ...props 
}) {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}
      {...props}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-4 dark:text-white">{title}</h2>
      )}
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  )
}