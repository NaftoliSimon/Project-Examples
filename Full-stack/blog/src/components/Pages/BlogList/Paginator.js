// import React from 'react'
// import Pagination from 'react-bootstrap/Pagination';
// import center from '../../../data/Bootstrap/center';
// import myFetch from '../../../functions/myFetch';
// import baseUrl from '../../../data/URLpaths';

// export default function Paginator({ page, setPage, setBlogsArr, blogPages, direction = false }) { //pass in 'left' or 'right' for a paginator with only a left or right button. leave out the direction for a regular full paginator
//     //IMPORTANT NOTE - Paginator was removed from the front end (3 column) display to be consistent with the 2 and 1 column layouts which could not have the paginator do to layout constraints. It has been replaced with a Load More button at the bottom of the blogList 
//     const maxPages = blogPages;

//     const next = () => {
//         const nextPage = page < maxPages ? page + 1 : 1; //the next page is the current page + 1, unless we are on the last page then we reset the next page to the first page 
//         setPage(nextPage);
//         fetchBlogs(nextPage);
//     }

//     const prev = () => {
//         const prevPage = page > 1 ? page - 1 : maxPages;
//         setPage(prevPage);
//         fetchBlogs(prevPage);
//     }

//     const blogsLink = `${baseUrl}/blogs`;

//     const fetchBlogs = (newPage) => {
//         myFetch(`${blogsLink}?page=${newPage}`, setBlogsArr);
//     }

//     function capitalize(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     return (<>
//         {/* {!direction && */}
//             <Pagination className={`${center} m-1 p-1 paginator${direction && capitalize(direction)}`}>
//                {(direction === 'right' || !direction) && <Pagination.Prev onClick={prev} /> }
//                 {!direction && <Pagination.Item active className='border-start border-end'>{page}</Pagination.Item>}
//                 {(direction === 'left' || !direction) && <Pagination.Next onClick={next} />}
//             </Pagination>
//         {/* } */}
//     </>)
// }
