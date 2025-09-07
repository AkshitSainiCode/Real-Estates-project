// components/LoadingSpinner.js
export default function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-blue-200 border-t-blue-600`}>
      </div>
      {size !== 'sm' && (
        <span className="ml-3 text-gray-600">Loading projects...</span>
      )}
    </div>
  )
}
