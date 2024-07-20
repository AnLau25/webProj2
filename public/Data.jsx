const Data = [
    {
        img: './Tigri_1900.jpg',
        title: 'Sandokan',
        language: 'It',
        author: 'Emilio Salgari',
        genre: ['Adventure', 'Romance'],
        period: 'Romanticism',
        summary: 'Il pirata Sandokan viene ferito durante una battaglia contro gli inglesi. Aiutato da Lord Guillonk, che lo cura in casa sua, conosce la sua bellissima nipote Marianna. Tra i due nasce un amore che sembra impossibile. Ma niente è impossibile per Sandokan!'
    },

    {
        img: './La_Edad_de_Oro.jpg',
        title: 'La Edad de Oro',
        language: 'Es',
        author: 'José Martí',
        genre: ['Poetry', 'Essay', 'Fables'],
        period: 'Realism',
        summary: 'La Edad de Oro es una revista escrita por José Martí destinada a los niños de América Latina, llena de historias, poemas y ensayos que enseñan valores como la libertad, la justicia y la humanidad. A través de cuentos fascinantes y lecciones morales, Martí busca inspirar a las jóvenes mentes y fomentar un sentido de identidad y orgullo en sus raíces culturales.'
    },

    {
        img: './CapitanoTempesta_1905.jpg',
        title: 'Capitano Tempesta',
        language: 'It',
        author: 'Emilio Salgari',
        genre: ['Adventure', 'Romance'],
        period: 'Romanticism',
        summary: 'È il 1571. Famagosta è l\'ultima roccaforte cristiana rimasta sull\'isola di Cipro, assediata dall\'esercito saraceno. Tra i soldati del campo cristiano, ce n\'è uno che si distingue particolarmente per le sue doti guerriere: Capitan Tempesta.'
    },

    {
        img: './Cien_Años_de_Soledad.jpeg',
        title: 'Cent ans de solitude',
        language: 'Fr',
        author: 'Gabriel García Márquez',
        genre: ['Romance', 'Magic Realism'],
        period: 'Realism',
        summary: "À travers l'histoire de la famille Buendía, 'Cent ans de solitude' explore les thèmes de la solitude, du destin et du passage du temps dans le village fictif de Macondo. Avec un style unique mêlant réalisme et fantastique, Gabriel García Márquez tisse une saga épique et inoubliable."
    },

    {
        img: './51Bm2aZI5ZL.jpg',
        title: 'The Adventures of Sherlock Holmes',
        language: 'En',
        author: 'Arthur Conan Doyle',
        genre: ['Detective', 'Mystery'],
        period: 'Neoclassicism',
        summary: 'Sherlock Holmes, the brilliant detective, along with his loyal friend Dr. Watson, solves the most perplexing cases in London. Through keen observation and unmatched deductive reasoning, Holmes unravels mysteries that baffle even the best of Scotland Yard.'
    },

    {
        img: './Brothers_Grimm.jpg',
        title: 'The Brothers Grimm Fairy Tales',
        language: 'En',
        author: 'Jacob and Wilhelm Grimm',
        genre: ['Fairy Tale', 'Fantasy'],
        period: 'Romanticism',
        summary: 'A collection of timeless fairy tales by the Brothers Grimm, featuring beloved stories such as "Cinderella," "Hansel and Gretel," "Rapunzel," and "Snow White." These tales are filled with enchantment, moral lessons, and the adventures of heroes and heroines.'
    },

    {
        img: './Brothers_Grimm.jpg',
        title: 'Les contes de fées des frères Grimm',
        language: 'Fr',
        author: 'Jacob et Wilhelm Grimm',
        genre: ['Fairy Tale', 'Fantasy'],
        period: 'Romantisme',
        summary: 'Une collection de contes de fées intemporels des frères Grimm, comprenant des histoires bien-aimées telles que "Cendrillon", "Hansel et Gretel", "Raiponce" et "Blanche-Neige". Ces contes sont remplis d’enchantement, de leçons morales et des aventures de héros et héroïnes.'
    },

    {
        img: './Lord_of_the_Flies.jpg',
        title: 'Lord of the Flies',
        language: 'En',
        author: 'William Golding',
        genre: ['Allegory', 'Dystopian', 'Psychological'],
        period: 'Modernism',
        summary: 'A group of boys stranded on a deserted island attempt to govern themselves, leading to chaos and savagery. As their civilized behavior disintegrates, the boys reveal the darkness within human nature. "Lord of the Flies" is a powerful exploration of the thin veneer of society and the innate brutality of humanity.'
    },

    {
        img: './Pride_and_Prejudice.jpg',
        title: 'Pride and Prejudice',
        language: 'En',
        author: 'Jane Austen',
        genre: ['Romance', 'Satire'],
        period: 'Neoclassicism',
        summary: 'Elizabeth Bennet navigates the intricate social hierarchy of early 19th-century England, balancing societal expectations and personal happiness. Her spirited intelligence and wit clash with the aloof and enigmatic Mr. Darcy, leading to misunderstandings and, ultimately, a deep and transformative love. "Pride and Prejudice" is a timeless exploration of manners, marriage, and morality.'
    },

    {
        img: './Pride_and_Prejudice.jpg',
        title: 'Orgueil et Préjugés',
        language: 'Fr',
        author: 'Jane Austen',
        genre: ['Romance', 'Satire'],
        period: 'Neoclassicism',
        summary: 'Elizabeth Bennet navigue dans la hiérarchie sociale complexe de l’Angleterre du début du XIXe siècle, équilibrant les attentes sociétales et le bonheur personnel. Son intelligence vive et son esprit se heurtent au mystérieux et distant Mr. Darcy, menant à des malentendus et, finalement, à un amour profond et transformateur. "Orgueil et Préjugés" est une exploration intemporelle des manières, du mariage et de la moralité.'
    },
    

    {
        img: './Huckleberry_Finn.jpg',
        title: 'The Adventures of Huckleberry Finn',
        language: 'En',
        author: 'Mark Twain',
        genre: ['Adventure', 'Satire'],
        period: 'Realism',
        summary: 'Huckleberry Finn, a young boy with a rebellious spirit, escapes his abusive father and embarks on a journey down the Mississippi River. Alongside Jim, a runaway slave, Huck encounters various characters and challenges that shape his understanding of society, freedom, and friendship. "The Adventures of Huckleberry Finn" is a profound and often humorous critique of antebellum America.'
    },

    {
        img: './Arsene_Lupin.jpg',
        title: 'Arsène Lupin, Gentleman Cambrioleur',
        language: 'Fr',
        author: 'Maurice Leblanc',
        genre: ['Crime', 'Mystery', 'Adventure'],
        period: 'Romanticism',
        summary: "Arsène Lupin, le maître du déguisement et brillant cambrioleur, se lance dans des cambriolages audacieux et des aventures palpitantes à travers la France. Avec esprit et charme, Lupin déjoue ses poursuivants et navigue dans le monde du crime, toujours une longueur d'avance sur la loi."
    },

    {
        img: './Hercule_Poirot.jpg',
        title: 'Hercule Poirot',
        language: 'En',
        author: 'Agatha Christie',
        genre: ['Detective', 'Mystery', 'Crime'],
        period: 'Realism',
        summary: 'Hercule Poirot is a brilliant Belgian detective known for his meticulous approach to solving crimes and his distinctive mannerisms. With his little gray cells and keen observation skills, Poirot tackles some of the most perplexing mysteries, unraveling complex cases with his unparalleled intellect. Notable works featuring Poirot include "Murder on the Orient Express" and "The Murder of Roger Ackroyd."'
    },

    {
        img: './Hercule_Poirot.jpg',
        title: 'Hercule Poirot',
        language: 'Fr',
        author: 'Agatha Christie',
        genre: ['Detective', 'Mystery', 'Crime'],
        period: 'Realism',
        summary: 'Hercule Poirot est un brillant détective belge connu pour son approche méticuleuse dans la résolution des crimes et ses manières distinctives. Avec ses petites cellules grises et ses compétences d’observation aiguës, Poirot s’attaque à certains des mystères les plus complexes, dénouant des affaires avec son intellect inégalé.'
    },

    {
        img: './El_Amor_en_los_Tiempos_del_Colera.webp',
        title: 'El amor en los tiempos del cólera',
        language: 'Es',
        author: 'Gabriel García Márquez',
        genre: ['Romance', 'Magic Realism'],
        period: 'Realism',
        summary: 'El amor en los tiempos del cólera es una novela del premio Nobel colombiano Gabriel García Márquez. La historia sigue a Florentino Ariza y Fermina Daza, dos amantes cuya relación apasionada y complicada se desarrolla a lo largo de más de cincuenta años.'
    },
    
    {
        img: './Lazarillo_de_Tormes.jpg',
        title: 'Lazarillo de Tormes',
        language: 'Es',
        author: 'Anónimo',
        genre: ['Picaresque', 'Satire'],
        period: 'Renaissance',
        summary: 'La vida de Lazarillo de Tormes y de sus fortunas y adversidades es una novela picaresca anónima publicada en 1554. La obra narra la vida de Lázaro, un joven pobre de Salamanca, que utiliza su ingenio y astucia para sobrevivir al servicio de varios amos.'    
    },

    {
        img: './Don_Quijote_de_la_Mancha.jpg',
        title: 'Don Quijote de la Mancha',
        language: 'Es',
        author: 'Miguel de Cervantes',
        genre: ['Satire', 'Adventure'],
        period: 'Renaissance',
        summary: 'La novela sigue las aventuras del hidalgo Alonso Quijano, quien, influenciado por la lectura de libros de caballería, se convierte en el caballero andante Don Quijote. Acompañado por su fiel escudero, Sancho Panza, Don Quijote se embarca en numerosas aventuras, confundiendo la realidad con sus fantasías caballerescas.'
    },

    {
        img: './La_Vuelta_al_Mundo_en_80_Dias.jpg',
        title: 'Le Tour du monde en quatre-vingts jours',
        language: 'Fr',
        author: 'Jules Verne',
        genre: ['Adventure', 'Science Fiction'],
        period: 'Realism',
        summary: 'L’histoire suit Phileas Fogg, un gentleman anglais qui parie qu’il peut faire le tour du monde en quatre-vingts jours. Accompagné de son fidèle serviteur, Passepartout, Fogg entreprend un voyage passionnant à travers divers pays et affronte de nombreux défis.'
    },
    

    {
        img: './La_Vuelta_al_Mundo_en_80_Dias.jpg',
        title: 'La vuelta al mundo en 80 días',
        language: 'Es',
        author: 'Julio Verne',
        genre: ['Adventure', 'Science Fiction'],
        period: 'Realism',
        summary: 'La historia sigue a Phileas Fogg, un caballero inglés que apuesta que puede dar la vuelta al mundo en ochenta días. Acompañado por su fiel sirviente, Passepartout, Fogg se embarca en una emocionante travesía que los lleva a través de diversos países y enfrenta numerosos desafíos.'
    },

    {
        img: './20000_Leguas_de_Viaje_Submarino.jpg',
        title: 'Vingt mille lieues sous les mers',
        language: 'Fr',
        author: 'Jules Verne',
        genre: ['Adventure', 'Romance'],
        period: 'Modernism',
        summary: 'L’histoire suit le professeur Pierre Aronnax, son serviteur Conseil et le pêcheur Ned Land, qui sont capturés par le Capitaine Nemo à bord du sous-marin Nautilus. Au cours de leur voyage à travers les océans du monde, les personnages explorent des merveilles sous-marines, affrontent des dangers et découvrent des secrets cachés sous l’eau.'
    },    

    {
        img: './20000_Leguas_de_Viaje_Submarino.jpg',
        title: '20,000 leguas de viaje submarino',
        language: 'Es',
        author: 'Julio Verne',
        genre: ['Adventure', 'Science Fiction'],
        period: 'Modernism',
        summary: 'La historia sigue al profesor Pierre Aronnax, su sirviente Conseil, y el pescador Ned Land, quienes son capturados por el Capitán Nemo a bordo del submarino Nautilus. A lo largo de su viaje por los océanos del mundo, los personajes exploran maravillas submarinas, enfrentan peligros y descubren secretos ocultos bajo el agua.'
    }
    
    
];

export default Data;