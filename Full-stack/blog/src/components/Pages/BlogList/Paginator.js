import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import center from '../../../data/Bootstrap/center';
import myFetch from '../../../functions/myFetch';
import baseUrl from '../../../data/URLpaths';

export default function Paginator({ page, setPage, setBlogsArr, blogPages }) {
    const maxPages = blogPages;
    // console.log('blogPages:', blogPages);
    
    const next = () => {
        const nextPage = page < maxPages ? page + 1 : 1;
        setPage(nextPage);
        fetchBlogs(nextPage);
    }
    
    const prev = () => {
        const prevPage = page > 1 ? page - 1 : maxPages;
        setPage(prevPage);
        fetchBlogs(prevPage);
    }
    
    const blogsLink = `${baseUrl}/blogs`;
    
    const fetchBlogs = (newPage) => {
        myFetch(`${blogsLink}?page=${newPage}`, setBlogsArr);
    }
    
    return (
        <Pagination className={`${center} m-1 p-1`}>
            <Pagination.Prev onClick={prev} />
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next onClick={next} />
        </Pagination>
    )
}
