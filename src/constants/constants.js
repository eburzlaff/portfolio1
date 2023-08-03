export const projects = [
    {
      title: 'Real Estate App',
      description: "Real Estate App that allows users to register, login, logout, view profile, view properties for rent and sale, add and unadd properties for others to see, save and unsave properties. Authentication was created with AWS Cognito. Hosted on AWS Elastic Beanstalk. Currently not deployed to avoid AWS charges. For more information, please watch the youtube demo.",
      image: './assets/home.png',
      technologies: ['Java', 'MySQL', 'Hibernate', 'Maven', 'Bootstrap', 'Log4J', 'AWS Elastic Beanstalk', 'AWS Cognito', 'JUnit'],
      buttons: [
        { text: 'See Source Code', link: 'https://github.com/eburzlaff/real-estate-app'},
        { text: 'YT Demo', link: 'https://www.youtube.com/watch?v=eT4bvYaDSXw'}
      ],
      id: 0,
    },
    {
        title: 'FairExchange App',
        description: "React Native Expo-Managed Marketplace App where users can sell things they don't want anymore. Used different libraries such as React Navigation, Expo Permissions, Expo Location, Formik, Yup and much more. 10 screen components. 20+ reusable components. Backend not implemented.",
        image: './assets/feed.png',
        technologies: ['React Native', 'Expo CLI'],
        buttons: [
          { text: 'See Source Code', link: 'https://github.com/eburzlaff/fair-exchange-app'},
        ],
        id: 1,
      },
      {
        title: 'Team Enterprise Java',
        description: "A library management backend API that will enable users to track their personal library. The API will support tracking books, book locations, and support tracking who has borrowed a book. We will use the Google Books API to populate supplemental book data.",
        image: './assets/teamEnterprise.png',
        technologies: ['Java', 'MySQL', 'Jackson', 'Google Books API', 'Hibernate', 'Maven', 'Log4J', 'AWS Elastic Beanstalk', 'JUnit', 'SwaggerHub'],
        buttons: [
          { text: 'See Source Code', link: 'https://github.com/eburzlaff/team-enterprise-project'},
        ],
        id: 2,
      },
      {
        title: '"Syntax Gym" Prototype',
        description: "Simple Figma prototype design for a fictional gym.",
        image: './assets/syntaxGym.png',
        technologies: ['Figma'],
        buttons: [ 
          { text: 'Figma Link', link: 'https://www.figma.com/proto/T2VSzdYuXX57hb0cDBKpDS/Project-2---YOUR-PROJECT-GOES-HERE?node-id=63-104&starting-point-node-id=63%3A104&mode=design&t=CEgGoZopXviSV5Yp-1'},
          { text: 'YT Demo', link: 'https://www.youtube.com/watch?v=c_IFxNwTotM'},
        ],
        id: 3,
      },
      {
        title: 'CineView Movie App',
        description: "Movie App that allows users to search for their favorite movies and see their basic information such as year of release, title etc.",
        image: './assets/darkMode.png',
        technologies: ['ReactJS', 'Open Movie Database API (OMDb)'],
        buttons: [
          { text: 'See Source Code', link: 'https://github.com/eburzlaff/cine-view-movie-app'},
          { text: 'Live Demo', link: 'https://cine-view.netlify.app/'}
        ],
        id: 4,
      },
      {
        title: 'To do list App',
        description: "To do list built with PHP and MySQL. Users can sign up, login, logout, add, remove and search for specific list items.",
        image: './assets/phpTodo.png',
        technologies: ['PHP', 'MySQL'],
        buttons: [
          { text: 'YT Demo', link: 'https://www.youtube.com/watch?v=ihZZ7MxV6XU'},
        ],
        id: 5,
      },
      {
        title: 'Uncommon Munchies Bakery Website',
        description: "Simple Bakery website. Built with HTML and CSS only.",
        image: './assets/bakery.png',
        technologies: ['HTML', 'CSS'],
        buttons: [
          { text: 'See Source Code', link: 'https://github.com/eburzlaff/spring-2020-web-dev-class-final-project'},
          { text: 'Live Demo', link: 'https://uncommon-munchies-bakery.netlify.app/'}
        ],
        id: 4,
      },


      
  ];