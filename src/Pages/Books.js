import AddBooks from '../Components/AddBooks';
import ShowBooks from '../Components/ShowBooks';

export default function Books() {
    return (
        <div>
            <h1>Books</h1>
            <AddBooks />
            <hr />
            <ShowBooks />
        </div>
    )
}