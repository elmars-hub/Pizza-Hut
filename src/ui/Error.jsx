import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card p-8 max-w-md w-full text-center slide-in">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">😢</span>
          </div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-stone-600 mb-6">
            {error.data || error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="space-y-3">
          <LinkButton to="/" className="w-full">
            🏠 Go to Home
          </LinkButton>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary w-full"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
