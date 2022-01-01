import React from 'react'
import Pagination from './Pagination'

function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full px-[5%] md:pl[14%] lg:pl-52">
            <p className="text-gray-500 text-md mb-5 ">
                About {results?.searchInformation?.formattedTotalResults} results ({
                    results?.searchInformation?.formattedSearchTime} seconds)
            </p>

            {results?.items?.map((item, index) => (
                <div
                    key={item.link}
                    className="max-w-xl mb-8"

                >
                    <div className="group">
                        <a href={item.link} className="text-blue-500 hover:text-blue-700 text-sm" >
                            {item.formattedUrl}
                        </a>
                        <a href={item.link} className="text-blue-500 hover:text-blue-700 text-sm" >
                            <h2 className="text-xl text-blue-800 font-medium truncate  group-hover:underline">
                                {item.title}
                            </h2>
                        </a>
                        <p className="line-clamp-2">{item.snippet}</p>
                    </div>
                    
                    
                </div>
            ))}
            <Pagination />

        </div>
    )
}

export default SearchResults
