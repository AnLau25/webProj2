import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Select from 'react-select';
import './Lib.css';
import GoldSep from './GoldSep';
import Foot from './Foot';
import BCard from './BCard';
import Data from './Data';

const Lib = () => {
    const [site, setSite] = useState('');
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState({ value: 'default', label: 'LANGUAGE' });
    const [selectedPeriod, setSelectedPeriod] = useState({ value: 'default', label: 'PERIOD' });

    const handleChange = (event) => {
        setSite(event.target.value);
    };

    const handleGenreChange = (selectedOptions) => {
        setSelectedGenre(selectedOptions);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLanguageChange = (selectedOption) => {
        setSelectedLanguage(selectedOption);
    };

    const handlePeriodChange = (selectedOption) => {
        setSelectedPeriod(selectedOption);
    };

    const genreOptions = [
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Allegory', label: 'Allegory' },
        { value: 'Crime', label: 'Crime' },
        { value: 'Detective', label: 'Detective' },
        { value: 'Dystopian', label: 'Dystopian' },
        { value: 'Essay', label: 'Essay' },
        { value: 'Fables', label: 'Fables' },
        { value: 'Fairy Tale', label: 'Fairy Tale' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Magic Realism', label: 'Magic Realism' },
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Poetry', label: 'Poetry' },
        { value: 'Picaresque', label: 'Picaresque' },
        { value: 'Psychological', label: 'Psychological' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Satire', label: 'Satire' }
    ];

    const languageOptions = [
        { value: 'default', label: 'LANGUAGE' },
        { value: 'En', label: 'English' },
        { value: 'Fr', label: 'French' },
        { value: 'It', label: 'Italian' },
        { value: 'Sp', label: 'Spanish' }
    ];

    const periodOptions = [
        { value: 'default', label: 'PERIOD' },
        { value: 'Renaissance', label: 'Renaissance' },
        { value: 'Neoclassicism', label: 'Neoclassicism' },
        { value: 'Romanticism', label: 'Romanticism' },
        { value: 'Realism', label: 'Realism' },
        { value: 'Modernism', label: 'Modernism' }
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.data.value === 'default' ? 'rgba(220, 212, 201, 1)' : 'rgba(63, 40, 7, 1)',
            backgroundColor: state.isFocused
                ? 'rgba(220, 212, 201, 1)'
                : state.isSelected
                    ? 'rgba(202, 181, 155, 1)'
                    : undefined
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: state.data.value === 'default' ? 'rgba(220, 212, 201, 1)' : 'rgba(63, 40, 7, 1)',
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: 'rgba(220, 212, 201, 1)',
        }),
    };

    const filteredBooks = Data.filter(book =>
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedGenre.length === 0 || selectedGenre.some(genre => genre.value === 'default' || book.genre.includes(genre.value))) &&
        (selectedLanguage.value === 'default' || book.language === selectedLanguage.value) &&
        (selectedPeriod.value === 'default' || book.period === selectedPeriod.value)
    );

    return (
        <>
            <section className="lib" id="lib">
                <GoldSep />
                <h1>Browse your next page-turner</h1>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={3}>
                            <Container className="filter">
                                <h1 className='flt'>Filter</h1>
                                <input
                                    type="text"
                                    placeholder="Search by title or author"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="form-control mb-3"
                                />
                                <Select
                                    isMulti
                                    name="genre"
                                    options={genreOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    placeholder="GENRE"
                                    value={selectedGenre}
                                    onChange={handleGenreChange}
                                    styles={customStyles}
                                />
                                <Select
                                    name="language"
                                    options={languageOptions}
                                    className="basic-single-select"
                                    classNamePrefix="select"
                                    placeholder="LANGUAGE"
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                    styles={customStyles}
                                />
                                <Select
                                    name="period"
                                    options={periodOptions}
                                    className="basic-single-select"
                                    classNamePrefix="select"
                                    placeholder="PERIOD"
                                    value={selectedPeriod}
                                    onChange={handlePeriodChange}
                                    styles={customStyles}
                                />
                            </Container>
                        </Col>
                        <Col xs={12} md={9}>
                            <Container className="book-container" fluid>
                                <Row>
                                    {filteredBooks.map((book, index) => (
                                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                                            <BCard
                                                imgprop={book.img}
                                                titleprop={book.title}
                                                langprop={book.language}
                                                authprop={book.author}
                                                genprop={book.genre}
                                                sumprop={book.summary}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Foot />
        </>
    );
};

export default Lib;
