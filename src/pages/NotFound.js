import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <Link to="404">Back to Home</Link>
        </div>
    )
}