import React, { useEffect, useState } from 'react';
import center from '../../../data/Bootstrap/center';
import AddBlog from './AddBlog';
import BlogItemLayout from './BlogItemLayout';
import Welcome from '../welcome/Welcome';
import { Alert, Button, Container } from 'react-bootstrap';
import { scrollToBlogsId } from '../../../data/scrollToHeight'; //id for scrolling to (see hooks/navigate.js)
import DismissibleAlert from '../../reuseable/Alert';
import isMobile from '../../../data/isMobile';
// import Paginator from './Paginator';
import myFetch from '../../../functions/myFetch';
import baseUrl from '../../../data/URLpaths';
import usePopOut from '../../../hooks/popOut';
import AlertIcon from '../../reuseable/AlertIcon';
import Searchbar from './Searchbar';
import myPostFetch from '../../../functions/myPostFetch';
import useLocalStorage from 'use-local-storage';
import { useSessionStorage } from 'usehooks-ts'
import './BlogList.scss';

export default function BlogList({ blogsArr, loggedIn, setShowLogin, page, setPage, setBlogsArr, theme }) {
  //IMPORTANT NOTE - Paginator was removed from the front end (3 column) display to be consistent with the 2 and 1 column layouts which could not have the paginator do to layout constraints. It has been replaced with a Load More button at the bottom of the blogList 

  const [showAlert, setShowAlert] = useState(false);
  const [blogsPerRow, setBlogsPerRow] = useState(calculateBlogsPerRow()); // Initialize with the initial value
  const [filteredBlogs, setFilteredBlogs] = useState(blogsArr);
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchQuery, setSearchQuery] = useSessionStorage('blogsSearch', '');
  const [totalPages, setTotalPages] = useState(1);//the total number of blog pages displayed
  const [showLoadMore, setShowLoadMore] = useState(true);
  const { getPopClass, handlePopOut } = usePopOut();
  const { getPopClass: getPopClass2, handlePopOut: handlePopOut2 } = usePopOut();

  const mxSize = isMobile ? '3' : '5'; //TODO: switch to change mxSize based on screen size, not mobile
  // const blogRows = blogsArr.length / blogsPerRow;
  const emptyBlog = { id: 'id', name: 'Person', website: 'website.com', companyName: 'Company', userId: 'noBlogsFound', shortSummary: 'This is a placeholder. No Data Found. This is a placeholder. No Data Found. This is a placeholder. No Data Found. ' }
  const createEmptyBlogs = (numBlogs) => Array.from({ length: numBlogs }, (_, index) => ({
    ...emptyBlog,
    id: index.toString(), // Use the index as the blog ID (this removes reacts warning about duplicate IDs)
  }));
  const numberOfBlogs = 6; //Number of blogs that are fetched from the server at one time. Keep consistent with the number in the server.
  const blogsFromJSON = JSON.parse(sessionStorage.getItem('blogsFromJSON'));

  const resetSearch = () => {
    setFilteredBlogs(blogsArr);
    setSearchQuery('');
  }

  const setTotalPagesFiltered = () => {
    if (searchQuery === '' || searchQuery.toLowerCase() === 'all') {
      myFetch(`${baseUrl}/blogsTotal`, setTotalPages); //Sets the total number of pages to fetch based on all rows in the db (unfiltered)
    } else {
      myFetch(`${baseUrl}/blogsTotal/${searchQuery}`, setTotalPages); //Sets the total number of filtered pages based on the category
    }
  }

  useEffect(() => {
    setTotalPagesFiltered()

    const handleResize = () => {
      setBlogsPerRow(calculateBlogsPerRow());
      // setShowSidePaginator(calculateShowSidePag())
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log('totalPagesFiltered:', totalPages);
  const handleSearch = (searchQuery) => {
    setTotalPagesFiltered();

    if (filteredBlogs.length === 0) {
      // if the previous search of filtered blogs was empty (ie alert is already showing)
      handlePopOut2();
    }

    if (searchQuery.trim() === '' || searchQuery.trim().toLowerCase() === 'all') {
      setFilteredBlogs(blogsArr); // Reset to original blogs
    } else {
      // Use the functional form of setFilteredBlogs to ensure the latest state is used
      const defaultPage = 1;
      myFetch(`${baseUrl}/blogs/${searchQuery}/${defaultPage}`, (newFilteredBlogs) => {
        setFilteredBlogs((prevFilteredBlogs) => {
          // Use the current state to avoid race conditions
          return [...newFilteredBlogs];
        });
      });
    }
  };


  function calculateBlogsPerRow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1067) {
      return 3;
    } else if (screenWidth >= 716) {
      return 2;
    } else {
      return 1;
    }
  }

  const loadMore = (category) => {
    const nextPage = page < totalPages ? page + 1 : null;
    if (category === '' || category.toLowerCase() === 'all') { //default search (load the next page)
      if (nextPage) {
        myFetch(`${baseUrl}/blogs?page=${nextPage}`, (newBlogs) => {
          setBlogsArr((prevBlogs) => [...prevBlogs, ...newBlogs]);
          setPage(nextPage);
        });
      }
    }
    if (nextPage) {
      myFetch(`${baseUrl}/blogs/${category}/${nextPage}`, (newBlogs) => {
        console.log('Server Response:', newBlogs); // Log the server response
        console.log('totalPages:', totalPages);
        setFilteredBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
        setPage(nextPage);
      });
    }
    if (page + 1 === totalPages) {
      setShowLoadMore(false);
    }
    // console.log('category:', category);
    // if (category !== '') {
    //   setShowLoadMore(false);
    // }

  };


  const popOut = () => {
    if (showAlert) {
      handlePopOut();
    }
  }

  if (!blogsArr.length) { //Blog list placeholder display when server is running and no blogs are found in the database (ie server is running, but no sql password). (If server isn't running it will fetch from local json file, (see myFetch.js))
    blogsArr = createEmptyBlogs(numberOfBlogs);
    return (<>
      <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={blogsArr} />

      <div className={`mx-${mxSize} mt-4`} id='noBlogsAlert'> {/* TODO: switch id to ref */}
        <DismissibleAlert heading={'No Connection to the server'} text={'The blog you clicked on is just a placeholder'}
          show={showAlert} setShow={setShowAlert} getPopClass={getPopClass} />
      </div>
      <h4 className={`text-center text-border dark`} id={scrollToBlogsId} >Please Select A Blog To Read</h4>
      <ul className={`list-group d-flex flex-row flex-wrap color-secondary-reverse ${center} pb-4`}>
        {blogsArr.map(blog => <BlogItemLayout blog={blog} key={blog.id} setShowAlert={setShowAlert} popOut={popOut} />)}
      </ul>
    </>)
  };

  const noBlogsVariant = blogsFromJSON ? 'warning' : 'info';
  const alertText = blogsFromJSON ? 'No connection to the database. To see a list of blogs from a local file ' : 'Try searching something else. Here are some examples of categories to search for: Food, Business, Games. To return to the default search leave the searchbar empty or ';
  const noBlogsAlert = <Container className={`${center} ${getPopClass2()}`}>
    <Alert variant={noBlogsVariant}>
      <h3><AlertIcon variant={noBlogsVariant} />No Blogs Found</h3> {/* NO BLOGS FOUND */}
      <p>
        {alertText}
        <Alert.Link href="#" onClick={() => resetSearch()}>click here</Alert.Link>.
      </p>
      {!blogsFromJSON && <><hr />
        <p className="mb-0">
          Spelling must be exact, but is not case sensitive. ("food" will work, while "Foods" will not)
        </p></>}
    </Alert>
  </Container>

  return (<>
    <Welcome loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={filteredBlogs} />

    <div className='pb-4'>
      <AddBlog loggedIn={loggedIn} setShowLogin={setShowLogin} blogsArr={filteredBlogs} />
      <h4 className={`text-center text-border dark mb-2`} id={scrollToBlogsId}>Please Select A Blog To Read</h4>
      {!blogsFromJSON && <Searchbar handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} blogsPerRow={blogsPerRow} setShowLoadMore={setShowLoadMore} />}
      <ul className={`list-group d-flex flex-row flex-wrap ${center} pb-2 pt-0`}>
        {filteredBlogs.map(blog => <BlogItemLayout blog={blog} key={blog.id} theme={theme} />)}
      </ul>
      {filteredBlogs.length === 0 && noBlogsAlert}

      {/* {blogRows <= 1 && blogsPerRow === 3 && <div style={{ visibility: 'hidden', marginBottom: '20px' }}><BlogItemLayout blog={emptyBlog} /></div>} This line adds empty space if only one row or blogs are on display, so that the pagination is always in the same place. We add an empty blog below the current bloglist row. Then add a bottom padding to fix the offset */}
      {!blogsFromJSON && (showLoadMore &&
        <div className={`${center}`}><Button onClick={() => loadMore(searchQuery)}>Load More</Button></div>)} {/*TODO: switch button to auto load when user scrolls (similar to twitter/x) */}


      {/* {!blogsFromJSON && (showLoadMore ?
      <div className={`${center}`}><Button onClick={loadMore}>Load More</Button></div> :
        <div className={center}>{alert}</div>
        )} */}
    </div>
  </>)
}