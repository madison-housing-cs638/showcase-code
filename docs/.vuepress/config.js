module.exports = {
  title: "CS638",
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false
        }
      })
    }
  },
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
        title: "Visualizations",
        path: "/updates/",
        collapsable: true,
        children: [
          ["/updates/Exploration", "Data Exploration"],
          ["/updates/Race", "Race"],
          ["/updates/Other", "Other Factors"],
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