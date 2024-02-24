import { useState } from 'react';
import LazyLoad from './pages/LazyLoad';
import SuspenseErrorBoundary from './pages/SuspenseErrorBoundary';

function App() {
    const [isLazyLoad, setIsLazyLoad] = useState(false);

    return (
        <>
            <div className="w-full py-2 mb-2 flex justify-evenly">
                <button
                    className={`border border-orange-400 hover:bg-orange-400 rounded-lg px-3 py-1 justify-center text-center ${
                        !isLazyLoad && 'bg-orange-400'
                    }`}
                    onClick={() => setIsLazyLoad(false)}
                >
                    Suspense Example
                </button>
                <button
                    className={`border border-yellow-400 hover:bg-yellow-400 rounded-lg px-3 py-1 justify-center text-center ${
                        isLazyLoad && 'bg-yellow-400'
                    }`}
                    onClick={() => setIsLazyLoad(true)}
                >
                    Lazy Load Example
                </button>
            </div>
            <div className="px-20">
                {isLazyLoad ? <LazyLoad /> : <SuspenseErrorBoundary />}
            </div>
        </>
    );
}

export default App;
