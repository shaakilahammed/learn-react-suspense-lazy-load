import { fetchPosts } from '../api/fetchPosts';

const resource = fetchPosts(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
);
export default function PostSelector({ onSelectPost }) {
    const posts = resource.read();
    // throw new Promise((res) => console.log(res));
    return (
        <div className="py-1 my-2">
            <select onChange={onSelectPost} className="p-2">
                <option value="">Select Post</option>
                {posts.map((post) => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
