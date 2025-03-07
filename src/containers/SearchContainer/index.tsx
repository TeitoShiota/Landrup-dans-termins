'use client';

//components
import ActivityCard from '@/components/ActivityCard';
import { LuSearch, LuSearchX  } from "react-icons/lu";


// Hooks
import { useBasicSearch } from '@/hooks/useBasicSearch';

// Styles
import './search-container-style.scss';


export default function SearchContainer(
    {
        searchData
    } : {
        searchData : LandrupDansApiActivityObject[]
    }
) {

    const { searchResults, searchQuery, setSearchQuery } = useBasicSearch({
        searchData: searchData,
    });


    return (
        <>
            <div className='search-page-main__search-field'>
                <input
                    type="search"
                    value={ searchQuery }
                    placeholder='Søg efter aktiviteter'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='search-page-main__search-field__input'
                    
                />
                {
                    searchQuery?.length > 0 ? (
                        <LuSearchX
                            className='search-page-main__search-field__icon'
                            onClick={() => setSearchQuery('')}
                        />
                    ) : 
                    <LuSearch className='search-page-main__search-field__icon' />
                }
            </div>
            <section
                className='search-page-main__search-results'
            >
                {
                    searchResults?.length > 0 ? (
                        <>
                            {searchResults.map((item, index) => (
                                <ActivityCard
                                    key={index}
                                    activity={ item }
                                />
                            ))}
                        </>
                    ) : (
                        <p>
                            Der blev ikke fundet nogle aktiviteter. Prøv at 
                            søge efter noget andet.
                        </p>
                    )
                }
            </section>
        </>
    )
}