import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Comments from '../components/Comments';
import PostSelector from '../components/PostSelector';
const SuspenseErrorBoundary = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleSelectPost = (e) => {
        setSelectedPostId(e.target.value);
    };
    return (
        <div>
            <h1>React Suspense and Error Boundaries</h1>

            <div>
                <ErrorBoundary
                    fallback={
                        <span className="text-rose-900  py-2 w-full">
                            Error on fetching post
                        </span>
                    }
                >
                    <Suspense fallback={<span>Loading posts...</span>}>
                        <PostSelector onSelectPost={handleSelectPost} />
                    </Suspense>

                    {selectedPostId && (
                        <ErrorBoundary
                            fallback={
                                <span className="text-rose-900  py-2 w-full">
                                    Error on fetching comments
                                </span>
                            }
                        >
                            <Suspense
                                fallback={<span>Loading comments...</span>}
                            >
                                <Comments postId={selectedPostId} />
                            </Suspense>
                        </ErrorBoundary>
                    )}
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default SuspenseErrorBoundary;
