module.exports = {
  title: "CS638",
  themeConfig: {
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/madison-housing-cs638"
      },
      {
        text: "Class Website",
        link: "https://wisc-ds-projects.github.io/f20/"
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
        title: "Data Sources", 
        path: "/data/",
        collapsable: true,
        children: [ ]
      },
      {
        title: "Weekly Updates",
        path: "/updates/",
        collapsable: true,
        children: [
          ["/updates/Week5", "Week 5: Sep 28"],
          ["/updates/Week6", "Week 6: Oct 5"],
        ]
      },
      {
        title: "Process",
        path: "/process/",
        collapsable: true,
        children: [ ]
      }, 
    ],
    base: "/dev-wiki/"
  },
};