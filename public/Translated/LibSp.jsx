import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Select from 'react-select';
import './Lib.css';
import GoldSep from './GoldSep';
import Foot from './Foot';
import BCard from './BCard';
import Data from './Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import arrowIcon from './AvroArrow.svg'; 

const LibSp = () => {
    const [site, setSite] = useState('');
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState({ value: 'default', label: 'IDIOMA' });
    const [selectedPeriod, setSelectedPeriod] = useState({ value: 'default', label: 'PERÍODO' });
    const [books, setBooks] = useState(Data);
    const [isTabOpen, setIsTabOpen] = useState(true);
    const [currentlyBorrowedIndex, setCurrentlyBorrowedIndex] = useState(null);

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

    const updateBorrowStatus = (index) => {
        const book = books[index];
        if (!book.borrowed) {
            const updatedBooks = books.map((b, i) => {
                if (i === index) {
                    return { ...b, borrowed: true };
                }
                if (i === currentlyBorrowedIndex) {
                    return { ...b, borrowed: false };
                }
                return b;
            });
            setBooks(updatedBooks);
            setCurrentlyBorrowedIndex(index);
            toast.success(`${book.title} fue prestado!`);
        } else {
            toast.error('Este libro ya está prestado.');
        }
    };

    const genreOptions = [
        { value: 'Adventure', label: 'Aventura' },
        { value: 'Allegory', label: 'Alegoría' },
        { value: 'Crime', label: 'Crimen' },
        { value: 'Detective', label: 'Detective' },
        { value: 'Dystopian', label: 'Distopía' },
        { value: 'Essay', label: 'Ensayo' },
        { value: 'Fables', label: 'Fábulas' },
        { value: 'Fairy Tale', label: 'Cuento de hadas' },
        { value: 'Fantasy', label: 'Fantasía' },
        { value: 'Magic Realism', label: 'Realismo mágico' },
        { value: 'Mystery', label: 'Misterio' },
        { value: 'Poetry', label: 'Poesía' },
        { value: 'Picaresque', label: 'Picaresca' },
        { value: 'Psychological', label: 'Psicológico' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Satire', label: 'Sátira' }
    ];

    const languageOptions = [
        { value: 'default', label: 'IDIOMA' },
        { value: 'En', label: 'Inglés' },
        { value: 'Fr', label: 'Francés' },
        { value: 'It', label: 'Italiano' },
        { value: 'Sp', label: 'Español' }
    ];

    const periodOptions = [
        { value: 'default', label: 'PERÍODO' },
        { value: 'Renaissance', label: 'Renacimiento' },
        { value: 'Neoclassicism', label: 'Neoclasicismo' },
        { value: 'Romanticism', label: 'Romanticismo' },
        { value: 'Realism', label: 'Realismo' },
        { value: 'Modernism', label: 'Modernismo' }
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

    const filteredBooks = books.filter(book =>
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedGenre.length === 0 || selectedGenre.some(genre => genre.value === 'default' || book.genre.includes(genre.value))) &&
        (selectedLanguage.value === 'default' || book.language === selectedLanguage.value) &&
        (selectedPeriod.value === 'default' || book.period === selectedPeriod.value)
    );

    return (
        <>
            <section className="lib" id="libsp">
                <GoldSep />
                <h1>Explora tu próxima lectura emocionante</h1>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={3}>
                            <Container className="filter">
                                <h1 className='flt'>Filtrar</h1>
                                <input
                                    type="text"
                                    placeholder="Buscar por título o autor"
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
                                    placeholder="GÉNERO"
                                    value={selectedGenre}
                                    onChange={handleGenreChange}
                                    styles={customStyles}
                                />
                                <Select
                                    name="language"
                                    options={languageOptions}
                                    className="basic-single-select"
                                    classNamePrefix="select"
                                    placeholder="IDIOMA"
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                    styles={customStyles}
                                />
                                <Select
                                    name="period"
                                    options={periodOptions}
                                    className="basic-single-select"
                                    classNamePrefix="select"
                                    placeholder="PERÍODO"
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
                                                index={index}
                                                updateBorrowStatus={updateBorrowStatus}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <div className={`lateral-tab ${isTabOpen ? 'open' : ''}`}>
                    <button className="toggle-btn" onClick={() => setIsTabOpen(!isTabOpen)}>
                        <img src={arrowIcon} alt="Toggle" className="toggle-icon" />
                    </button>
                    <div className="tab-content">
                        <h5>Nuestra Colección</h5>
                        <GoldSep />
                        <p>
                            ¿Quieres pedir prestado un libro? Solo haz clic en "prestar". Actualmente permitimos un libro por persona, así que si deseas seleccionar un libro diferente al que tienes, haz clic en ese.
                            Ten en cuenta que todas las reservas se consideran para "el día de" y trabajamos con un sistema de "primero en llegar, primero en ser atendido".
                        </p>
                    </div>
                </div>
            </section>
            <Foot />
            <ToastContainer />
        </>
    );
};

export default LibSp;
