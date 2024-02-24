import { fetchData } from '../api/fetchPosts';
import use from '../hooks/use';

export default function Comments({ postId }) {
    const comments = use(
        fetchData(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        )
    );

    return (
        <div>
            <h2 className="text-xl font-semibold">Comments</h2>

            <div>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={comment.id}>
                            {index + 1}. {comment.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
