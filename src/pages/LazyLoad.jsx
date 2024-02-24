import React, { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { demos } from '../data/data';
// import ColorDemo from '../components/ColorDemo';
// import ShapeDemo from '../components/ShapeDemo';
// import SizeDemo from '../components/SizeDemo';
// const ColorDemo = React.lazy(() => import('../components/ColorDemo'));
// const ShapeDemo = React.lazy(() => import('../components/ShapeDemo'));
// const SizeDemo = React.lazy(() => import('../components/SizeDemo'));

const importDemos = (file) => {
    return React.lazy(() => import(`../components/${file}`));
};

const LazyLoad = () => {
    const [selectedDemo, setSelectedDemo] = useState(null);

    const handleSelectedDemo = (file) => {
        const Demo = importDemos(file);
        setSelectedDemo(<Demo />);
    };
    return (
        <div>
            <div>
                <h1>React Lazy load explained</h1>

                <div>
                    {demos.map((demo) => (
                        <button
                            className="py-1 px-2 m-2 rounded-lg bg-green-400"
                            onClick={() => handleSelectedDemo(demo.file)}
                            key={demo.id}
                        >
                            {demo.name}
                        </button>
                    ))}
                </div>

                <div>
                    <ErrorBoundary
                        fallback={
                            <span className="text-red-600">Not found</span>
                        }
                        resetKeys={[selectedDemo]}
                    >
                        <Suspense fallback={<span>Loading...</span>}>
                            {selectedDemo}
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
};

export default LazyLoad;
