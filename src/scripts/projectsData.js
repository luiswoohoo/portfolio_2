const projectsData = [
    {
        name: 'Card Stack',
        tech: 'React • Styled Components',
        description: `I was looking for a simple flashcard app, but most of the apps that I found required signing up and they just didn't have the look and feel that I wanted. So I made my own.`,
        image: {
            src: 'CardStack_gttvbn',
            width: '500',
            height: '480',
            alt: 'Cardstack app with cat emoji on a card',
        },
        image2: {
            src: 'cardstack_sketches_black_gray_o33fxt',
            width: '500',
            height: '480',
            alt: 'Sketches of potential features',
        },
        video: {
            src: 'CardStack_demo_o25a7k',
            width: '1180',
            height: '700',
        },

        longDescription: {
            intro: `I was looking for a simple flashcard web app for my phone to help me learn Japanese, but most of the apps that I found required signing up and they just didn't have the look and feel that I wanted. So I decided to make my own. I wanted something minimalistic without a bunch of features getting in the way of the simple process of flipping a card and then moving on to the next one.`,
            problems: `Initially, moving from one card to the next was implemented with the push and pop array methods. The card displayed on screen was always the first card in an array. This worked well and the code was simple. However, when I decided to implement what seemed like a very simple feature, display the total number of cards and the number of the current card, I had to rewrite the logic.`,
            lessons: `Don't underestimate seemingly simple features. Also, I learned the importance of doing some research before building anything to see if there's even a need for it. Although I wanted to add a few more features to the app (below are some sketches of what I had in mind at the time), most of the people I showed it to didn't seem too enthused 😒. But that's ok. This project scratched an itch and I just wanted to see if I could code the thing.`,
            code: `https://github.com/luiswoohoo/flashcards_app`,
            site: `https://cardstack.netlify.app/`,
        },
    },
    {
        name: 'Quizzical',
        tech: 'React',
        description: `A quiz app built with React that pulls trivia from the Open Trivia DB API.`,
        image: {
            src: 'Quizzical_mgqb7k',
            width: '500',
            height: '480',
            alt: 'Example of Quizzical quiz',
        },

        longDescription: {
            intro: `A quiz app built with React that pulls trivia from the Open Trivia DB API. The design is from Scrimba.com, but I coded the app from scratch (for the most part).`,
            problems: `What probably caused the most head scratching was figuring out what needed to be stored in state. I kept going back and forth adding more and more state and then removing it until I finally ended up with what I felt was truly necessary. Another funny little bug had to do with something called HTML entities. These guys 👉🏽 &amp; &gt;`,
            lessons: `As much as I wanted to write everything from scratch sometimes it just makes the most sense to bring in some 3rd party code. Whether it's to deal with rabbit hole inducing edge cases like HTML entities or something fun like confetti. 🥳`,
            code: `https://github.com/luiswoohoo/quizzical`,
            site: `https://quizzicalr.netlify.app/`,
        },
    },
    {
        name: 'Movie Watchlist',
        tech: 'JS • Serverless Functions',
        description: `An app for creating a movie watchlist. It's built in vanilla JS and pulls movie data from the OMDB API.`,
        image: {
            src: 'MovieFinder_figuse',
            width: '500',
            height: '480',
            alt: 'Example of a movie search',
        },

        longDescription: {
            intro: `An app for creating a movie watchlist. It's built in vanilla JS and pulls movie data from the OMDB API. A couple of serverless functions are used to hide the API key from the client. The design is from Scrimba.com, but I built the app completely from scratch.`,
            problems: `I didn't want to expose my API key. After doing some research I decided to use serverless functions to hide it. This was definitely the trickiest part of this little project. Not so much because the code involved was complicated, but simply because it was my first time using serverless functions.`,
            lessons: `The security aspect of this project (i.e. hiding the API key) is what took the longest to figure out. It probably wasn't even necessary considering it's such a low stakes project. But it was worth the extra time to research and learn why security is so important.`,
            code: `https://github.com/luiswoohoo/movie_search_test`,
            site: `https://mov-watch.netlify.app/`,
        },
    },
    {
        name: 'Invoice Automation',
        tech: 'Google Apps Script',
        description: `I was creating invoices for a trucking company and wondered if there was a way to automate the process. That's when I discovered Google Apps Script. I was able to speed up my workflow and discovered how much I enjoy coding.`,
        image: {
            src: 'GAS_kyjfhj',
            width: '500',
            height: '480',
            alt: 'Script used for invoice automation',
        },

        longDescription: {
            intro: `I was creating invoices for a trucking company and wondered if there was a way to automate the process. That's when I discovered Google Apps Script. It's essentially JS with methods that tap into Google Drive. I was able to speed up my workflow and discovered how much I enjoy coding. This sparked my motivation to consider coding as a career.`,
            problems: `Making multiple copies of a single file in Google Drive is a slow manual process since it requires making each copy one by one. After doing this a few times I knew there had to be a better way.`,
            lessons: `Coding is a super power. So is knowing how to google stuff.`,
            code: ``,
            site: ``,
        },
    },
]

export { projectsData }
