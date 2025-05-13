import type { SearchBar } from '../types/props';

export default function SearchBar({ filter, setFilter }: SearchBar) {
    return (
        <>
            <div className="flex justify-center">
                <input
                    className="border-2 border-black rounded-xl h-10 w-200 p-4"
                    type="text"
                    placeholder="Search..."
                    value={filter}
                    onChange={evt => setFilter(evt.target.value)}
                />
            </div>
        </>
    );
}
