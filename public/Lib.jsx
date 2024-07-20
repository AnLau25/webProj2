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
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('');

    console.log(Data); // Log Data to check if it is being imported correctly

    const handleChange = (event) => {
        setSite(event.target.value);
    };

    const handleGenreChange = (selectedOptions) => {
        setSelectedGenre(selectedOptions);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handlePeriodChange = (event) => {
        setSelectedPeriod(event.target.value);
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

    // Filtered books based on search term, genre, language, and period
    const filteredBooks = Data.filter(book =>
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedGenre.length === 0 || selectedGenre.every(genre => book.genre.includes(genre.value))) &&
        (!selectedLanguage || book.language === selectedLanguage) &&
        (!selectedPeriod || book.period === selectedPeriod)
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
                                <h1>Filter</h1>
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
                                />
                                <select
                                    className="form-control custom-select mb-3"
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                >
                                    <option value="">LANGUAGE</option>
                                    <option value="En">English</option>
                                    <option value="Fr">French</option>
                                    <option value="It">Italian</option>
                                    <option value="Sp">Spanish</option>
                                </select>
                                <select
                                    className="form-control custom-select"
                                    value={selectedPeriod}
                                    onChange={handlePeriodChange}
                                >
                                    <option value="">PERIOD</option>
                                    <option value="Renaissance">Renaissance</option>
                                    <option value="Neoclassicism">Neoclassicism</option>
                                    <option value="Romanticism">Romanticism</option>
                                    <option value="Realism">Realism</option>
                                    <option value="Modernism">Modernism</option>
                                </select>
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
