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
import { useTranslation } from 'react-i18next';

const Lib = () => {
    const [t, i18n] = useTranslation('global');
    const [site, setSite] = useState('');
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState({ value: 'default', label: 'LANGUAGE' });
    const [selectedPeriod, setSelectedPeriod] = useState({ value: 'default', label: 'PERIOD' });
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
            toast.success(`${book.title} ${t('lib.toast.success')}`);
        } else {
            toast.error(`${t('lib.toast.error')}`);
        }
    };

    const genreOptions = [
        { value: 'Adventure', label: t('lib.gen.lbl1') },
        { value: 'Allegory', label: t('lib.gen.lbl2') },
        { value: 'Crime', label: t('lib.gen.lbl3') },
        { value: 'Detective', label: t('lib.gen.lbl4') },
        { value: 'Dystopian', label: t('lib.gen.lbl5') },
        { value: 'Essay', label: t('lib.gen.lbl6') },
        { value: 'Fables', label: t('lib.gen.lbl7') },
        { value: 'Fairy Tale', label: t('lib.gen.lbl8') },
        { value: 'Fantasy', label: t('lib.gen.lbl9') },
        { value: 'Magic Realism', label: t('lib.gen.lbl10') },
        { value: 'Mystery', label: t('lib.gen.lbl11') },
        { value: 'Poetry', label: t('lib.gen.lbl12') },
        { value: 'Picaresque', label: t('lib.gen.lbl13') },
        { value: 'Psychological', label: t('lib.gen.lbl14') },
        { value: 'Romance', label: t('lib.gen.lbl15') },
        { value: 'Satire', label: t('lib.gen.lbl16') }
    ];

    const languageOptions = [
        { value: 'En', label: t('lib.lang.lbl1') },
        { value: 'Fr', label: t('lib.lang.lbl2') },
        { value: 'It', label: t('lib.lang.lbl3') },
        { value: 'Sp', label: t('lib.lang.lbl4') }
    ];

    const periodOptions = [
        { value: 'Renaissance', label: t('lib.priod.lbl1') },
        { value: 'Neoclassicism', label: t('lib.priod.lbl2') },
        { value: 'Romanticism', label: t('lib.priod.lbl3') },
        { value: 'Realism', label: t('lib.priod.lbl4') },
        { value: 'Modernism', label: t('lib.priod.lbl5') }
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
            <section className="lib" id="lib">
                <GoldSep />
                <h1>{t('lib.secTitle')}</h1>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={3}>
                            <Container className="filter">
                                <h1 className='flt'>{t('lib.filter.title')}</h1>
                                <input
                                    type="text"
                                    placeholder={t('lib.filter.search')}
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
                                    placeholder={t('lib.filter.gen')}
                                    value={selectedGenre}
                                    onChange={handleGenreChange}
                                    styles={customStyles}
                                />
                                <Select
                                    name="language"
                                    options={languageOptions}
                                    className="basic-single-select"
                                    classNamePrefix="select"
                                    placeholder={t('lib.filter.lang')}
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                    styles={customStyles}
                                />
                                <Select
                                    name="period"
                                    options={periodOptions}
                                    className="basic-single-select"
                                    classNamePrefix="select"
                                    placeholder={t('lib.filter.priod')}
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
                        <h5>{t('lib.tab.title')}</h5>
                        <GoldSep />
                        <p>{t('lib.tab.content')}</p>
                    </div>
                </div>
            </section>
            <Foot />
            <ToastContainer />
        </>
    );
};

export default Lib;
