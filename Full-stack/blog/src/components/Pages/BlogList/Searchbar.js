import React, { useEffect, useState } from 'react';
import { Form, FormControl, InputGroup, Button, Container, Card, Tooltip, OverlayTrigger } from 'react-bootstrap';
import center from '../../../data/Bootstrap/center';
import { BsSearch } from 'react-icons/bs';
import ButtonWithTooltip from '../../reuseable/ButtonWithTooltip';
import './Searchbar.scss';

const Searchbar = ({ handleSearch, searchQuery, setSearchQuery, blogsPerRow, setShowLoadMore }) => {
    const [useSelectSearch, setUseSelectSearch] = useState(false);
    useEffect(() => {
        handleSearch(searchQuery) //fetches the default search on website load/reload
    }, [])

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery.trim());
    };
    const handleSelectSubmit = (e) => {
        const v = e.target.value
        setSearchQuery(v);
        handleSearch(v)
        // if (v !== '' && v.toLowerCase() !== 'all') {
        //     setShowLoadMore(false);
        //   } 
        //   else {
        //     setShowLoadMore(true);
        //   }
    }

    const handleClear = () => {
        setSearchQuery('');
        handleSearch('');
    };

    const tooltip = <Tooltip id="tooltip">
        <strong>To change the search type </strong> Click this button.
    </Tooltip>

    const btn =
        <Button id='searchBtnType' className='' style={{ width: '4.5em' }} onClick={() => setUseSelectSearch(!useSelectSearch)}>
            {useSelectSearch ? 'Text' : 'Select'}
        </Button>

    const width = blogsPerRow === 3 ? '30em' : (blogsPerRow === 2 ? '20em' : '9.25em');
    const searchbarWidth = { width: width } //30em
    const categories = ['Business', 'Food', 'Games']; //TODO: get catagories from database (+ allow users to add catagories)
    const selectSearch = <Form.Select
        aria-label="Default select example"
        style={searchbarWidth}
        onChange={handleSelectSubmit}
        className='pointer blogSearchbar'
    >
        {/* <option default disabled><h3>SEARCH BY CATEGORY</h3></option> */}
        {/* <option disabled>SELECT A CATEGORY</option> */}
        <option value={'all'}>Search All (Default)</option>
        {categories.map(category =>
            <option key={category} selected={searchQuery.toLowerCase() === category.toLowerCase()} value={category}>{category}</option>
        )}
    </Form.Select>;


    const textSearch = <FormControl
        style={searchbarWidth}
        type="search"
        placeholder="Search by Category (Food, Business, Games, etc)"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleSubmit(e);
            }
        }}
        className='blogSearchbar'
    />

    return (
        <Container className={`${center}`}>
            <Form onSubmit={handleSubmit}>
                <InputGroup className='m-1'>
                    <InputGroup.Text id="inputGroupPrepend"><BsSearch /></InputGroup.Text>
                    {/* <OverlayTrigger placement="top" overlay={tooltip}>{btn}</OverlayTrigger> */}
                    <ButtonWithTooltip button={btn} tooltip={tooltip} />
                    {useSelectSearch ? textSearch : selectSearch}
                    <Button type='submit' id='searchBtn' variant="btn btn-primary rounded m-0">Search</Button>
                </InputGroup>
            </Form>
        </Container>
    );
};

export default Searchbar;
