import './LoadingSpinner.css'

export default function LoadingSpinner({ size = 30 }) {
  return (
    <>
      <div
        className="loading_spinner"
        style={{ '--loading-spinner-size': `${size}px` }}
      ></div>
    </>
  )
}
