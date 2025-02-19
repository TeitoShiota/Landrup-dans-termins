import { useState, useEffect } from 'react';



/**
 * Custom hook to perform a basic search on a given dataset.
 *
 * @param {Object} params - The parameters for the search.
 * @param {any[]} params.searchData - The dataset to search through.
 * @param {string} [params.searchDataIndexTarget] - The key in the dataset items to search against. Defaults to 'name'.
 *
 * @returns {Object} An object containing the search results, the search query, and a function to set the search query.
 * @returns {any[]} return.searchResults - The results of the search.
 * @returns {string} return.searchQuery - The current search query.
 * @returns {Function} return.setSearchQuery - Function to update the search query.
 */
export function useBasicSearch(
    {
        searchData,
        searchDataIndexTarget
    } : {
        searchData : any[],
        searchDataIndexTarget?: string
    }
) {
    'use client';

    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery.length > 1) {
            const results = searchData.filter(item => {
                return item[ searchDataIndexTarget ? searchDataIndexTarget : 'name'].toLowerCase().includes(searchQuery.toLowerCase());
            });
            setSearchResults( results );
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return {
        searchResults,
        searchQuery,
        setSearchQuery
    };
}

