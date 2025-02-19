'use client';


import ActivityCard from '@/components/ActivityCard';
// Hooks
import { useBasicSearch } from '@/hooks/basic-search';

export default function SearchContainer(
    {
        searchData
    } : {
        searchData : any[]
    }
) {

    const { searchResults, searchQuery, setSearchQuery } = useBasicSearch({
        searchData: searchData,
        searchDataIndexTarget: 'name'
    });

    function renderSearchResults() {
        if (searchResults.length > 0) {
            return (
                <ul>
                    {searchResults.map((item, index) => (
                        <li key={index}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )
        } else {
            return (
                <p>
                    No results found
                </p>
            )
        }
    }

    return (
        <>
            <input
                type="search"
                value={ searchQuery }
                onChange={(e) => setSearchQuery(e.target.value)}
                className='search-page-main__search-input'
            />
            <section
                className='search-page-main__search-results'
            >
                {
                    searchResults?.length > 0 ? (
                        <>
                            {searchResults.map((item, index) => (
                                <ActivityCard
                                    key={index}
                                    activity={item}
                                />
                            ))}
                        </>
                    ) : (
                        <p>
                            No results found
                        </p>
                    )
                }
            </section>
        </>
    )
}