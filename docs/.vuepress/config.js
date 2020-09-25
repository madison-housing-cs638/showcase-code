module.exports = {
  title: "Flexcards",
  themeConfig: {
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/flex-card-app/"
      },
    ],
    sidebar: [
      {
        title: "Home", 
        path: "/",
        collapsable: false,
        children: [ ]
      },
      {
        title: "About Flexcards", 
        path: "/about/",
        collapsable: true,
        children: [ ]
      },
      {
        title: "Setup",
        path: "/setup/",
        collapsable: true,
        children: [
          ["/setup/Win 10 Dev Setup", "Windows 10 Setup"],
          ["/setup/Amplify Setup", "Amplify Setup"]
        ]
      },
      {
        title: "Process",
        path: "/process/",
        collapsable: true,
        children: [ ]
      },
      {
        title: "Projects",
        path: "/projects/",
        collapsable: true,
        children: [
          ["/projects/flex-card", "Flex-Card"],
          ["/projects/flex-card-components", "Flex-Card-Components"],
          ["/projects/dev-wiki", "Dev-Wiki"]
        ]
      },
      {
        title: "Standards",
        path: "/standards/",
        collapsable: true,
        children: [
          {
            title: "Front End",
            path: "/standards/front-end/",
            collapsable: true,
            children: [
              ["/standards/front-end/shared components", "Shared Components"],
              ["/standards/front-end/vuex", "Vuex / Datastore"]
            ]
          },
          {
            title: "Back End",
            path: "/standards/back-end/",
            collapsable: true,
            children: [ 
              ["/standards/back-end/database", "Database"],
            ]
          },
        ]
      }  
    ],
    base: "/dev-wiki/"
  },
};