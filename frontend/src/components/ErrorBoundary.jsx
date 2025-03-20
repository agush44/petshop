import PropTypes from "prop-types";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-container">
      <h2>Algo salió mal</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Intentar de nuevo</button>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
