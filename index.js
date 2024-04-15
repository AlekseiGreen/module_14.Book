console.log('START');

const imgBase = [
    {  
        image: "./img/banner_one.svg",
        image_dot1: "./img/darkish_dot.svg",
        image_dot2: "./img/lightish_dot.svg",
        image_dot3: "./img/lightish_dot.svg"
    },
    {
        image: "./img/banner_two.svg",
        image_dot1: "./img/lightish_dot.svg",
        image_dot2: "./img/darkish_dot.svg",
        image_dot3: "./img/lightish_dot.svg"
    },
    {
        image: "./img/banner_three.svg",
        image_dot1: "./img/lightish_dot.svg",
        image_dot2: "./img/lightish_dot.svg",
        image_dot3: "./img/darkish_dot.svg"
    },
]

let index=0;
const banner_img = document.querySelector(".banner-img");
banner_img.innerHTML = `<img src=`+imgBase[0].image+` alt="IMG"/>`;

const banner_img_dot1 = document.querySelector(".banner-img-dot1");
const banner_img_dot2 = document.querySelector(".banner-img-dot2");
const banner_img_dot3 = document.querySelector(".banner-img-dot3");
banner_img_dot1.innerHTML = `<img src=`+imgBase[0].image_dot1+` alt="IMG"/>`;
banner_img_dot2.innerHTML = `<img src=`+imgBase[0].image_dot2+` alt="IMG"/>`;
banner_img_dot3.innerHTML = `<img src=`+imgBase[0].image_dot3+` alt="IMG"/>`;

setInterval(function() {
    if(index>2){index=0};
    banner_img.innerHTML = `<img src=`+imgBase[index].image+` alt="IMG"/>`;
    banner_img_dot1.innerHTML = `<img src=`+imgBase[index].image_dot1+` alt="IMG"/>`;
    banner_img_dot2.innerHTML = `<img src=`+imgBase[index].image_dot2+` alt="IMG"/>`;
    banner_img_dot3.innerHTML = `<img src=`+imgBase[index].image_dot3+` alt="IMG"/>`;
    index++;
}, 5000);

//test
function changeImg(number) {
    if(number == 1) {
        index=0;
        banner_img.innerHTML = `<img src=`+imgBase[0].image+` alt="IMG"/>`;
        banner_img_dot1.innerHTML = `<img src=`+imgBase[0].image_dot1+` alt="IMG"/>`;
        banner_img_dot2.innerHTML = `<img src=`+imgBase[0].image_dot2+` alt="IMG"/>`;
        banner_img_dot3.innerHTML = `<img src=`+imgBase[0].image_dot3+` alt="IMG"/>`;
    }
    if(number == 2) {
        index=1;
        banner_img.innerHTML = `<img src=`+imgBase[1].image+` alt="IMG"/>`;
        banner_img_dot1.innerHTML = `<img src=`+imgBase[1].image_dot1+` alt="IMG"/>`;
        banner_img_dot2.innerHTML = `<img src=`+imgBase[1].image_dot2+` alt="IMG"/>`;
        banner_img_dot3.innerHTML = `<img src=`+imgBase[1].image_dot3+` alt="IMG"/>`;
    }
    if(number == 3) {
        index=3;
        banner_img.innerHTML = `<img src=`+imgBase[2].image+` alt="IMG"/>`;
        banner_img_dot1.innerHTML = `<img src=`+imgBase[2].image_dot1+` alt="IMG"/>`;
        banner_img_dot2.innerHTML = `<img src=`+imgBase[2].image_dot2+` alt="IMG"/>`;
        banner_img_dot3.innerHTML = `<img src=`+imgBase[2].image_dot3+` alt="IMG"/>`;
    }

}

//categoryList
const category = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Poetry', 'Psychology', 'Sience', 'Technology', 'Travel & Maps'];

const list_categories = document.querySelector(".main-section-book-box__title");

let j;
function getCategoryListHTML(categoryIntro) {
    if(j === undefined) j = 0;
    let categoryListHTML = "";
    for(let i=0; i<categoryIntro.length; i++){
        let catalogDotActive = `${i===j? '<div class="main-section-book-box__title-category-active-ellipse"></div>':''}`;
        let catalogActive = `<div class="main-section-book-box__title-category ${i === j ? "main-section-book-box__title-category-active": ""} " onclick="clickCategory(${i})">${categoryIntro[i]}</div>`;
        categoryListHTML += catalogDotActive + catalogActive;
    }
    return categoryListHTML;
}
list_categories.innerHTML =  getCategoryListHTML(category);

function clickCategory(i) {
    j = i;
    list_categories.innerHTML =  getCategoryListHTML(category);
}
//end-categoryList

//categoryShop
const catalogyObject1 = {
    "kind": "books#volumes",
    "totalItems": 191,
    "items": [
      {
        "kind": "books#volume",
        "id": "9GwrmHRl490C",
        "etag": "dIc80bYP6Ac",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/9GwrmHRl490C",
        "volumeInfo": {
          "title": "Beginning XNA 3.0 Game Programming",
          "subtitle": "From Novice to Professional",
          "authors": [
            "Bruno Evangelista",
            "Alexandre Santos Lobao",
            "Riemer Grootjans",
            "Jose ANTONIO LEAL DEFARIAS"
          ],
          "publisher": "Apress",
          "publishedDate": "2009-05-31",
          "description": "Would you like to create your own games, but never have the time to dig into the details of multimedia programming? Now you don't have to! XNA 3.0 makes it simple to create your own games, which will run on your PC and Xbox 360 console. Even if you don't know how to program at all, Beginning XNA 3.0 Game Programming: From Novice to Professional will teach you the basics of C# 2008 programming along the way. Don't get overwhelmed with details you don't need to know—just learn what you need to start creating your own games right now! This fast–paced introduction to XNA 3.0 and the C# language provides you with a quick–start guide to creating high–quality XNA games. You'll be introduced to the key concepts and ideas you need to know in a gradual fashion so that you master one concept before using it as a foundation for the next. Before long, you will have the skills to create smooth, professional–looking results in a range of gaming genres. By the end of the book, you will have constructed several working games and have an excellent knowledge base from which to investigate more advanced techniques.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430218180"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430218185"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 437,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "averageRating": 4,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "2.4.3.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=9GwrmHRl490C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=9GwrmHRl490C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=9GwrmHRl490C&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=9GwrmHRl490C&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Beginning_XNA_3_0_Game_Programming.html?hl=&id=9GwrmHRl490C"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Beginning_XNA_3_0_Game_Programming-sample-epub.acsm?id=9GwrmHRl490C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Beginning_XNA_3_0_Game_Programming-sample-pdf.acsm?id=9GwrmHRl490C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=9GwrmHRl490C&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "By the end of the book, you will have constructed several working games and have an excellent knowledge base from which to investigate more advanced techniques."
        }
      },
      {
        "kind": "books#volume",
        "id": "BvOUiP5LeJkC",
        "etag": "KgOn2Le/qXM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/BvOUiP5LeJkC",
        "volumeInfo": {
          "title": "Physics for Flash Games, Animation, and Simulations",
          "authors": [
            "Adrian Dobre",
            "Dev Ramtal"
          ],
          "publisher": "Apress",
          "publishedDate": "2012-01-31",
          "description": "Physics for Flash Games, Animation, and Simulations teaches ActionScript programmers how to incorporate real physics into their Flash animations, games, user interfaces, and simulations. Introduces Flash physics in an accurate, but approachable way, covering what is required to produce physically realistic simulations (as opposed to animations that look roughly right) Packed full of practical examples of how physics can be applied to your own games and applications Addresses the diverse needs of game developers, animators, artists, and e-learning developers The book assumes a basic knowledge of ActionScript and Flash. However, no previous knowledge of physics is required—only some very basic math skills. The authors present everything from basic principles to advanced concepts, so you'll be able to follow the logic and easily adapt the principles to your own applications. The book builds on your physics knowledge, enabling you to create not only visual effects, but also more complex models and simulations.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430236757"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430236752"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 547,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "2.6.5.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=BvOUiP5LeJkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=BvOUiP5LeJkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=BvOUiP5LeJkC&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=BvOUiP5LeJkC&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Physics_for_Flash_Games_Animation_and_Si.html?hl=&id=BvOUiP5LeJkC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Physics_for_Flash_Games_Animation_and_Si-sample-epub.acsm?id=BvOUiP5LeJkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Physics_for_Flash_Games_Animation_and_Si-sample-pdf.acsm?id=BvOUiP5LeJkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=BvOUiP5LeJkC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The book builds on your physics knowledge, enabling you to create not only visual effects, but also more complex models and simulations."
        }
      },
      {
        "kind": "books#volume",
        "id": "lESCCXkdy3YC",
        "etag": "Fjo2NHawMwI",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/lESCCXkdy3YC",
        "volumeInfo": {
          "title": "Gamers at Work",
          "subtitle": "Stories Behind the Games People Play",
          "authors": [
            "Morgan Ramsay"
          ],
          "publisher": "Apress",
          "publishedDate": "2012-06-08",
          "description": "\"Gamers at Work is a critical resource for new and experienced business leaders—for anyone who feels unprepared for the demanding and seemingly insurmountable trials ahead of them.\" —Peter Molyneux OBE, founder, Lionhead Studios \"Gamers at Work explores every imaginable subtlety of the video-game industry through the fascinating stories of those who took the risks and reaped the rewards.\" —Hal Halpin, president, Entertainment Consumers Association \"This is the sort of book that can tear the most hardcore gamers away from their PCs, Macs, or consoles for a few hours of rewarding reading.\" —North County Times \"Gamers at Work is truly an invaluable resource that's well worth adding to your personal library.\" —Wii Love It There are few companies in the video-game industry that have withstood the test of time; most startups exit as quickly as they enter. In Gamers at Work: Stories Behind the Games People Play, the countless challenges of building successful video-game developers and publishers in this unstable industry are explored through interviews containing entertaining stories, humorous anecdotes, and lessons learned the hard way. Gamers at Work presents an inside look at how 18 industry leaders play the odds, seize opportunities, and transform small businesses into great businesses. Here, in Gamers at Work, you will find their stories replete with their personal struggles, corporate intrigue, and insights into strategy, leadership, and management. Gamers at Work: Explores the formation of entertainment software companies from the perspectives of successful founders who played the odds Provides insight into why experienced professionals sacrifice the comfort of gainful employment for the uncertainty and risk of the startup Shares the experiences and lessons that shape the lives, decisions, and struggles of entrepreneurs in this volatile business As an added bonus, check out Online Game Pioneers at Work, published in 2015, for even more incredible stories from leaders in the mobile space. Featured Entrepreneurs: Trip Hawkins, Electronic Arts (Madden NFL) Nolan Bushnell, Atari (Pong) Wild Bill Stealey, MicroProse Software (Sid Meier's Civilization) Tony Goodman, Ensemble Studios (Age of Empires) Feargus Urquhart, Obsidian Entertainment (Star Wars: Knights of the Old Republic II) Tim Cain, Troika Games (Arcanum, Vampire: the Masquerade—Bloodlines) Warren Spector, Junction Point Studios (Disney Epic Mickey) Doug & Gary Carlston, Broderbund Software (Prince of Persia, Carmen Sandiego) Don Daglow, Stormfront Studios (Neverwinter Nights, Tony La Russa Baseball) John Smedley, Verant Interactive (EverQuest, PlanetSide) Ken Williams, Sierra On-Line (King's Quest, Leisure Suit Larry) Lorne Lanning, Oddworld Inhabitants (Oddworld) Chris Ulm, Appy Entertainment (FaceFighter, Trucks & Skulls) Tobi Saulnier, 1st Playable (Kung Zhu, Yogi Bear) Christopher Weaver, Bethesda Softworks (The Elder Scrolls) Jason Rubin, Naughty Dog (Crash Bandicoot, Uncharted) Ted Price, Insomniac Games (Spyro, Resistance) Other books in the Apress At Work Series: Coders at Work, Seibel, 978-1-4302-1948-4 Venture Capitalists at Work, Shah & Shah, 978-1-4302-3837-9 CIOs at Work, Yourdon, 978-1-4302-3554-5 CTOs at Work, Donaldson, Seigel, & Donaldson, 978-1-4302-3593-4 Founders at Work, Livingston, 978-1-4302-1078-8 European Founders at Work, Santos, 978-1-4302-3906-2 Women Leaders at Work, Ghaffari, 978-1-4302-3729-7 Advertisers at Work, Tuten, 978-1-4302-3828-7",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430233527"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430233524"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 345,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.5.4.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=lESCCXkdy3YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=lESCCXkdy3YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=lESCCXkdy3YC&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=lESCCXkdy3YC&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Gamers_at_Work.html?hl=&id=lESCCXkdy3YC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Gamers_at_Work-sample-epub.acsm?id=lESCCXkdy3YC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Gamers_at_Work-sample-pdf.acsm?id=lESCCXkdy3YC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=lESCCXkdy3YC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "&quot;Gamers at Work is a critical resource for new and experienced business leaders—for anyone who feels unprepared for the demanding and seemingly insurmountable trials ahead of them.&quot; —Peter Molyneux OBE, founder, Lionhead Studios &quot;Gamers ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "1sIzdipoXuQC",
        "etag": "jVSD96krO04",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/1sIzdipoXuQC",
        "volumeInfo": {
          "title": "XNA 3.0 Game Programming Recipes",
          "subtitle": "A Problem-Solution Approach",
          "authors": [
            "Riemer Grootjans"
          ],
          "publisher": "Apress",
          "publishedDate": "2009-05-26",
          "description": "Join the game development revolution today! XNA 3.0 greatly simplifies the development of your own games, lowering the barrier for programmers to get into game development. In XNA, you can start coding your games from the very start, a true revelation compared to other game programming environments. XNA doesn't sacrifice power for this ease of use—it is built entirely on DirectX technology. Completely updated for XNA 3.0, expert Riemer Grootjans brings together a selection of the hottest recipes in XNA programming for the Xbox 360, PC, and Zune. Advanced XNA programmers, experienced coders new to game development, and even complete beginners will find XNA 3.0 Game Programming Recipes an invaluable companion whether building games for fun or as commercial products.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430218562"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430218568"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 663,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.4.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=1sIzdipoXuQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=1sIzdipoXuQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=1sIzdipoXuQC&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=1sIzdipoXuQC&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/XNA_3_0_Game_Programming_Recipes.html?hl=&id=1sIzdipoXuQC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/XNA_3_0_Game_Programming_Recipes-sample-pdf.acsm?id=1sIzdipoXuQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=1sIzdipoXuQC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Advanced XNA programmers, experienced coders new to game development, and even complete beginners will find XNA 3.0 Game Programming Recipes an invaluable companion whether building games for fun or as commercial products."
        }
      },
      {
        "kind": "books#volume",
        "id": "HK1MDwAAQBAJ",
        "etag": "u8JkvfYfBPQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/HK1MDwAAQBAJ",
        "volumeInfo": {
          "title": "Artificial Intelligence and Games",
          "authors": [
            "Georgios N. Yannakakis",
            "Julian Togelius"
          ],
          "publisher": "Springer",
          "publishedDate": "2018-02-17",
          "description": "This is the first textbook dedicated to explaining how artificial intelligence (AI) techniques can be used in and for games. After introductory chapters that explain the background and key techniques in AI and games, the authors explain how to use AI to play games, to generate content for games and to model players. The book will be suitable for undergraduate and graduate courses in games, artificial intelligence, design, human-computer interaction, and computational intelligence, and also for self-study by industrial game developers and practitioners. The authors have developed a website (http://www.gameaibook.org) that complements the material covered in the book with up-to-date exercises, lecture slides and reading.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9783319635194"
            },
            {
              "type": "ISBN_10",
              "identifier": "3319635190"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 337,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=HK1MDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=HK1MDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=HK1MDwAAQBAJ&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=HK1MDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=HK1MDwAAQBAJ"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 3497.7,
            "currencyCode": "RUB"
          },
          "retailPrice": {
            "amount": 3497.7,
            "currencyCode": "RUB"
          },
          "buyLink": "https://play.google.com/store/books/details?id=HK1MDwAAQBAJ&rdid=book-HK1MDwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 3497700000,
                "currencyCode": "RUB"
              },
              "retailPrice": {
                "amountInMicros": 3497700000,
                "currencyCode": "RUB"
              }
            }
          ]
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Artificial_Intelligence_and_Games-sample-pdf.acsm?id=HK1MDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=HK1MDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This is the first textbook dedicated to explaining how artificial intelligence (AI) techniques can be used in and for games."
        }
      },
      {
        "kind": "books#volume",
        "id": "ezCIDQAAQBAJ",
        "etag": "DTpyQIZM2/M",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/ezCIDQAAQBAJ",
        "volumeInfo": {
          "title": "IT Through Experiential Learning",
          "subtitle": "Learn, Deploy and Adopt IT through Gamification",
          "authors": [
            "Shreekant W Shiralkar"
          ],
          "publisher": "Apress",
          "publishedDate": "2016-11-18",
          "description": "This concise book shows you how experiential learning can be used to overcome the challenges posed in applying and delivering information technology (IT) to your business needs through an innovative, game-based approach. Technology innovations and evolving business models are part of a rapid change that is forcing corporate and management professionals to learn, deploy, and adopt IT in new ways in order to maintain a competitive advantage. Many are doing this through experiential learning. You’ll begin by reviewing the basics of experiential learning and its relevance to IT, followed by six chapters that apply the hands-on concept through various scenarios. Make IT Through Experiential Learning one of your valued resources today. What You'll Learn: Innovative and proven IT-related application scenarios Generic management and leadership skill development Guidance for applying the learning methods for generating extraordinary results over conventional methods Who This Book Is For: IT professionals, higher education students, and those engaged in training and organizational development.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781484224212"
            },
            {
              "type": "ISBN_10",
              "identifier": "1484224213"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 108,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.2.2.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=ezCIDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=ezCIDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=ezCIDQAAQBAJ&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=ezCIDQAAQBAJ&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/IT_Through_Experiential_Learning.html?hl=&id=ezCIDQAAQBAJ"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/IT_Through_Experiential_Learning-sample-epub.acsm?id=ezCIDQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/IT_Through_Experiential_Learning-sample-pdf.acsm?id=ezCIDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=ezCIDQAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This concise book shows you how experiential learning can be used to overcome the challenges posed in applying and delivering information technology (IT) to your business needs through an innovative, game-based approach."
        }
      }
    ]
  };
const catalogyObject2 = {
    "kind": "books#volumes",
    "totalItems": 193,
    "items": [
      {
        "kind": "books#volume",
        "id": "9GwrmHRl490C",
        "etag": "8bqzYJfyW9U",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/9GwrmHRl490C",
        "volumeInfo": {
          "title": "Beginning XNA 3.0 Game Programming",
          "subtitle": "From Novice to Professional",
          "authors": [
            "Bruno Evangelista",
            "Alexandre Santos Lobao",
            "Riemer Grootjans",
            "Jose ANTONIO LEAL DEFARIAS"
          ],
          "publisher": "Apress",
          "publishedDate": "2009-05-31",
          "description": "Would you like to create your own games, but never have the time to dig into the details of multimedia programming? Now you don't have to! XNA 3.0 makes it simple to create your own games, which will run on your PC and Xbox 360 console. Even if you don't know how to program at all, Beginning XNA 3.0 Game Programming: From Novice to Professional will teach you the basics of C# 2008 programming along the way. Don't get overwhelmed with details you don't need to know—just learn what you need to start creating your own games right now! This fast–paced introduction to XNA 3.0 and the C# language provides you with a quick–start guide to creating high–quality XNA games. You'll be introduced to the key concepts and ideas you need to know in a gradual fashion so that you master one concept before using it as a foundation for the next. Before long, you will have the skills to create smooth, professional–looking results in a range of gaming genres. By the end of the book, you will have constructed several working games and have an excellent knowledge base from which to investigate more advanced techniques.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430218180"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430218185"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 437,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "2.4.3.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=9GwrmHRl490C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=9GwrmHRl490C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=9GwrmHRl490C&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=9GwrmHRl490C&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Beginning_XNA_3_0_Game_Programming.html?hl=&id=9GwrmHRl490C"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Beginning_XNA_3_0_Game_Programming-sample-epub.acsm?id=9GwrmHRl490C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Beginning_XNA_3_0_Game_Programming-sample-pdf.acsm?id=9GwrmHRl490C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=9GwrmHRl490C&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "By the end of the book, you will have constructed several working games and have an excellent knowledge base from which to investigate more advanced techniques."
        }
      },
      {
        "kind": "books#volume",
        "id": "lESCCXkdy3YC",
        "etag": "vjU9YjTy4fk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/lESCCXkdy3YC",
        "volumeInfo": {
          "title": "Gamers at Work",
          "subtitle": "Stories Behind the Games People Play",
          "authors": [
            "Morgan Ramsay"
          ],
          "publisher": "Apress",
          "publishedDate": "2012-06-08",
          "description": "\"Gamers at Work is a critical resource for new and experienced business leaders—for anyone who feels unprepared for the demanding and seemingly insurmountable trials ahead of them.\" —Peter Molyneux OBE, founder, Lionhead Studios \"Gamers at Work explores every imaginable subtlety of the video-game industry through the fascinating stories of those who took the risks and reaped the rewards.\" —Hal Halpin, president, Entertainment Consumers Association \"This is the sort of book that can tear the most hardcore gamers away from their PCs, Macs, or consoles for a few hours of rewarding reading.\" —North County Times \"Gamers at Work is truly an invaluable resource that's well worth adding to your personal library.\" —Wii Love It There are few companies in the video-game industry that have withstood the test of time; most startups exit as quickly as they enter. In Gamers at Work: Stories Behind the Games People Play, the countless challenges of building successful video-game developers and publishers in this unstable industry are explored through interviews containing entertaining stories, humorous anecdotes, and lessons learned the hard way. Gamers at Work presents an inside look at how 18 industry leaders play the odds, seize opportunities, and transform small businesses into great businesses. Here, in Gamers at Work, you will find their stories replete with their personal struggles, corporate intrigue, and insights into strategy, leadership, and management. Gamers at Work: Explores the formation of entertainment software companies from the perspectives of successful founders who played the odds Provides insight into why experienced professionals sacrifice the comfort of gainful employment for the uncertainty and risk of the startup Shares the experiences and lessons that shape the lives, decisions, and struggles of entrepreneurs in this volatile business As an added bonus, check out Online Game Pioneers at Work, published in 2015, for even more incredible stories from leaders in the mobile space. Featured Entrepreneurs: Trip Hawkins, Electronic Arts (Madden NFL) Nolan Bushnell, Atari (Pong) Wild Bill Stealey, MicroProse Software (Sid Meier's Civilization) Tony Goodman, Ensemble Studios (Age of Empires) Feargus Urquhart, Obsidian Entertainment (Star Wars: Knights of the Old Republic II) Tim Cain, Troika Games (Arcanum, Vampire: the Masquerade—Bloodlines) Warren Spector, Junction Point Studios (Disney Epic Mickey) Doug & Gary Carlston, Broderbund Software (Prince of Persia, Carmen Sandiego) Don Daglow, Stormfront Studios (Neverwinter Nights, Tony La Russa Baseball) John Smedley, Verant Interactive (EverQuest, PlanetSide) Ken Williams, Sierra On-Line (King's Quest, Leisure Suit Larry) Lorne Lanning, Oddworld Inhabitants (Oddworld) Chris Ulm, Appy Entertainment (FaceFighter, Trucks & Skulls) Tobi Saulnier, 1st Playable (Kung Zhu, Yogi Bear) Christopher Weaver, Bethesda Softworks (The Elder Scrolls) Jason Rubin, Naughty Dog (Crash Bandicoot, Uncharted) Ted Price, Insomniac Games (Spyro, Resistance) Other books in the Apress At Work Series: Coders at Work, Seibel, 978-1-4302-1948-4 Venture Capitalists at Work, Shah & Shah, 978-1-4302-3837-9 CIOs at Work, Yourdon, 978-1-4302-3554-5 CTOs at Work, Donaldson, Seigel, & Donaldson, 978-1-4302-3593-4 Founders at Work, Livingston, 978-1-4302-1078-8 European Founders at Work, Santos, 978-1-4302-3906-2 Women Leaders at Work, Ghaffari, 978-1-4302-3729-7 Advertisers at Work, Tuten, 978-1-4302-3828-7",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430233527"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430233524"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 345,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.5.4.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=lESCCXkdy3YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=lESCCXkdy3YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=lESCCXkdy3YC&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=lESCCXkdy3YC&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Gamers_at_Work.html?hl=&id=lESCCXkdy3YC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 3497.7,
            "currencyCode": "RUB"
          },
          "retailPrice": {
            "amount": 3497.7,
            "currencyCode": "RUB"
          },
          "buyLink": "https://play.google.com/store/books/details?id=HK1MDwAAQBAJ&rdid=book-HK1MDwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 3497700000,
                "currencyCode": "RUB"
              },
              "retailPrice": {
                "amountInMicros": 3497700000,
                "currencyCode": "RUB"
              }
            }
          ]
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Gamers_at_Work-sample-epub.acsm?id=lESCCXkdy3YC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Gamers_at_Work-sample-pdf.acsm?id=lESCCXkdy3YC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=lESCCXkdy3YC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "&quot;Gamers at Work is a critical resource for new and experienced business leaders—for anyone who feels unprepared for the demanding and seemingly insurmountable trials ahead of them.&quot; —Peter Molyneux OBE, founder, Lionhead Studios &quot;Gamers ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "BvOUiP5LeJkC",
        "etag": "4/vG6zLG2XA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/BvOUiP5LeJkC",
        "volumeInfo": {
          "title": "Physics for Flash Games, Animation, and Simulations",
          "authors": [
            "Adrian Dobre",
            "Dev Ramtal"
          ],
          "publisher": "Apress",
          "publishedDate": "2012-01-31",
          "description": "Physics for Flash Games, Animation, and Simulations teaches ActionScript programmers how to incorporate real physics into their Flash animations, games, user interfaces, and simulations. Introduces Flash physics in an accurate, but approachable way, covering what is required to produce physically realistic simulations (as opposed to animations that look roughly right) Packed full of practical examples of how physics can be applied to your own games and applications Addresses the diverse needs of game developers, animators, artists, and e-learning developers The book assumes a basic knowledge of ActionScript and Flash. However, no previous knowledge of physics is required—only some very basic math skills. The authors present everything from basic principles to advanced concepts, so you'll be able to follow the logic and easily adapt the principles to your own applications. The book builds on your physics knowledge, enabling you to create not only visual effects, but also more complex models and simulations.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430236757"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430236752"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 547,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "2.6.5.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=BvOUiP5LeJkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=BvOUiP5LeJkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=BvOUiP5LeJkC&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=BvOUiP5LeJkC&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Physics_for_Flash_Games_Animation_and_Si.html?hl=&id=BvOUiP5LeJkC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Physics_for_Flash_Games_Animation_and_Si-sample-epub.acsm?id=BvOUiP5LeJkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Physics_for_Flash_Games_Animation_and_Si-sample-pdf.acsm?id=BvOUiP5LeJkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=BvOUiP5LeJkC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The book builds on your physics knowledge, enabling you to create not only visual effects, but also more complex models and simulations."
        }
      },
      {
        "kind": "books#volume",
        "id": "LnhqDwAAQBAJ",
        "etag": "mZbk1NYoGuc",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/LnhqDwAAQBAJ",
        "volumeInfo": {
          "title": "Practical Video Game Bots",
          "subtitle": "Automating Game Processes using C++, Python, and AutoIt",
          "authors": [
            "Ilya Shpigor"
          ],
          "publisher": "Apress",
          "publishedDate": "2018-08-21",
          "description": "Develop and use bots in video gaming to automate game processes and see possible ways to avoid this kind of automation. This book explains how bots can be very helpful in games such as multiplayer online games, both for training your character and for automating repetitious game processes in order to start a competition with human opponents much faster. Some players might use bots for cheating or avoiding game rules to gain an advantage over opponents - a sophisticated form of hacking that includes some elements of artificial intelligence (AI). However, while Practical Video Game Bots considers these topics, it is not a cheater's guide. Rather, this book is an attempt to overcome the information vacuum regarding bot development in video game applications. Through the use of three case study game examples, it covers most methods and technologies that are used by bot developers, and the details of anti-cheating systems. This book provides answers and useful advice for topics such as process automation, reverse engineering, and network applications. Modern bot applications use technologies from all these domains. You will also consider the work mechanisms of different kinds of bots and will write simple prototypes. What You Will Learn Discover bots and apply them to game applications Use clicker bots with OS-level embedding data, output-device capture, and more Develop in-game bots, with process memory analysis and access Work with out-game bots, with network interception and embedding data Deal with input device emulation and OS-level interception data Who This Book Is For Those with some prior experience in game development and coding experience in Python, C++, and Windows APIs.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781484237366"
            },
            {
              "type": "ISBN_10",
              "identifier": "1484237366"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 336,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "averageRating": 5,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.1.2.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=LnhqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=LnhqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=LnhqDwAAQBAJ&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=LnhqDwAAQBAJ&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Practical_Video_Game_Bots.html?hl=&id=LnhqDwAAQBAJ"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Practical_Video_Game_Bots-sample-epub.acsm?id=LnhqDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/Practical_Video_Game_Bots-sample-pdf.acsm?id=LnhqDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=LnhqDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "However, while Practical Video Game Bots considers these topics, it is not a cheater&#39;s guide. Rather, this book is an attempt to overcome the information vacuum regarding bot development in video game applications."
        }
      },
      {
        "kind": "books#volume",
        "id": "w3DoXr_nH8cC",
        "etag": "YMzBVqzoaUM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/w3DoXr_nH8cC",
        "volumeInfo": {
          "title": "The Essential Guide to Flash Games",
          "subtitle": "Building Interactive Entertainment with ActionScript",
          "authors": [
            "Jeff Fulton",
            "Steve Fulton"
          ],
          "publisher": "Apress",
          "publishedDate": "2010-04-28",
          "description": "The Essential Guide to Flash Games is a unique tool for Flash game developers. Rather than focusing on a bunch of low-level how-to material, this book dives straight into building games. The book is divided into specific game genre projects, covering everything from old classics such as a Missile Command-style game, to hot new genres such as retro evolved. The chapters build in complexity through the book, and new tools are introduced along the way that can be reused for other games. The game projects covered start simple and increase in complexity as more and more tools are added to your tool chest. Ten full game projects are discussed in detail. Each solves a very different game development problem and builds on the knowledge gained from the previous project. Many advanced game development techniques are covered, including particle systems, advanced controls, artificial intelligence, blitting, scrolling, and more.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430226154"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430226153"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 655,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "2.5.4.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=w3DoXr_nH8cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=w3DoXr_nH8cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=w3DoXr_nH8cC&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=w3DoXr_nH8cC&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Essential_Guide_to_Flash_Games.html?hl=&id=w3DoXr_nH8cC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/The_Essential_Guide_to_Flash_Games-sample-epub.acsm?id=w3DoXr_nH8cC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/The_Essential_Guide_to_Flash_Games-sample-pdf.acsm?id=w3DoXr_nH8cC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=w3DoXr_nH8cC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The Essential Guide to Flash Games is a unique tool for Flash game developers. Rather than focusing on a bunch of low-level how-to material, this book dives straight into building games."
        }
      },
      {
        "kind": "books#volume",
        "id": "1sIzdipoXuQC",
        "etag": "rMbUPLYJ3N8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/1sIzdipoXuQC",
        "volumeInfo": {
          "title": "XNA 3.0 Game Programming Recipes",
          "subtitle": "A Problem-Solution Approach",
          "authors": [
            "Riemer Grootjans"
          ],
          "publisher": "Apress",
          "publishedDate": "2009-05-26",
          "description": "Join the game development revolution today! XNA 3.0 greatly simplifies the development of your own games, lowering the barrier for programmers to get into game development. In XNA, you can start coding your games from the very start, a true revelation compared to other game programming environments. XNA doesn't sacrifice power for this ease of use—it is built entirely on DirectX technology. Completely updated for XNA 3.0, expert Riemer Grootjans brings together a selection of the hottest recipes in XNA programming for the Xbox 360, PC, and Zune. Advanced XNA programmers, experienced coders new to game development, and even complete beginners will find XNA 3.0 Game Programming Recipes an invaluable companion whether building games for fun or as commercial products.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781430218562"
            },
            {
              "type": "ISBN_10",
              "identifier": "1430218568"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 663,
          "printType": "BOOK",
          "categories": [
            "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.4.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=1sIzdipoXuQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=1sIzdipoXuQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.ru/books?id=1sIzdipoXuQC&printsec=frontcover&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
          "infoLink": "http://books.google.ru/books?id=1sIzdipoXuQC&dq=%27subject:Programming%27&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/XNA_3_0_Game_Programming_Recipes.html?hl=&id=1sIzdipoXuQC"
        },
        "saleInfo": {
          "country": "RU",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "RU",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.ru/books/download/XNA_3_0_Game_Programming_Recipes-sample-pdf.acsm?id=1sIzdipoXuQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=1sIzdipoXuQC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Advanced XNA programmers, experienced coders new to game development, and even complete beginners will find XNA 3.0 Game Programming Recipes an invaluable companion whether building games for fun or as commercial products."
        }
      }
    ]
  }

const categoryShopArr =['Kevin Kwan', 'Карта_2', 'card_3', 'card_4', 'card_5', 'card_6'];
const bookShop = document.querySelector(".main-section-book-shop");

let categoryShopHTML = "";

function stars(i, categoryShop) {
  let starIntro = ``;
  let starSilver = `<img src="img/StarSilver.svg"/>`;
  let starYellow = `<img src="img/StarYellow.svg"/>`;
  if(categoryShop.items[i].volumeInfo.averageRating == undefined) {
    for(let j=0; j < 5; j++){
      starIntro += `<div class="main-section-book-shop-star-star">${starSilver}</div>`
    }
  } else {
    for(let j=0; j < 5; j++){
      if(j < categoryShop.items[i].volumeInfo.averageRating ) {
        starIntro += `<div class="main-section-book-shop-star-star">${starYellow}</div>`
      }
      else {
        starIntro += `<div class="main-section-book-shop-star-star">${starSilver}</div>`
      }
    }
  }
  return starIntro;
}

function review(i, categoryShop) {
  let count;
  let reviewCount = ``;
  if(categoryShop.items[i].volumeInfo.ratingCount == undefined) {
    count = 0;
    reviewCount += `<div>${count} review</div>`
  }
  return reviewCount;
}

function descript(i, categoryShop) {
  let descriptDiv = ``;
  if(categoryShop.items[i].volumeInfo.description == undefined) {
    descriptDiv += `<div>${descriptDiv} review1</div>`
  } else{
    descriptDiv += `<div>${categoryShop.items[i].volumeInfo.description.substring(0, 80)} review</div>`
  }
  return descriptDiv;
}

function price(i, categoryShop){
  let priceDiv = '';
  if(categoryShop.items[i].saleInfo.retailPrice == undefined){
    priceDiv += '<div>&#8381 0</div>'
  } else{
    priceDiv += `<div>&#8381 ${categoryShop.items[i].saleInfo.retailPrice.amoun }</div>`;
  }

  //console.log('PRICE->', pr);
  return priceDiv;
}


function getCategoryShopHTML(categoryShop) {
    for(let i=0; i<categoryShop.items.length; i++) {
        categoryShopHTML += `
        <div class="main-section-book-shop__more">
            <div class="main-section-book-shop-cover"><img src="${categoryShop.items[i].volumeInfo.imageLinks.thumbnail}" style="background-size: cover;" alt="imgBook"/></div>
            <div class="main-section-book-shop-autor">${categoryShop.items[i].volumeInfo.authors[0]}</div>
            <div class="main-section-book-shop-title">${categoryShop.items[i].volumeInfo.title.substring(0, 15)}</div>
            <div class="main-section-book-shop-star">${stars(i, categoryShop)}</div>
            <div class="main-section-book-shop-review">${review(i, categoryShop)}</div>
            <div class="main-section-book-shop-description">${descript(i, categoryShop)}</div>
            <div class="main-section-book-shop-price">${price(i, categoryShop)}</div>
            <div class="main-section-book-shop-buy">buy now</div>
        </div>`;

    }
    categoryShopHTML += `<div class="main-section-book-shop-button">LOAD MORE</div>`;
    return categoryShopHTML;
}

bookShop.innerHTML = getCategoryShopHTML(catalogyObject2);

const bookFooter = document.querySelector(".footer");
//console.log(catalogyObject.items.length);
// bookFooter.innerHTML = `
//   <div><img src="${catalogyObject.items[0].volumeInfo.imageLinks.thumbnail}" alt="imgBook"/></div>
//   <div>${catalogyObject.items[0].volumeInfo.authors[0]}</div>
//   <div>Title=${catalogyObject.items[0].volumeInfo.title}</div>
//   <div>${catalogyObject.items[0].volumeInfo.description}</div>
//   <div>${catalogyObject.items[0].saleInfo.retailPrice}</div>
//   <div>${catalogyObject.items[0].selfLink}</div>
// `;