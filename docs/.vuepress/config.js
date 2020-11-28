module.exports = {
  title: "CS638",
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
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
          ["/updates/AssessmentQuality", "Area Evaluation"],
          ["/updates/AssessmentAreaAlternatives", "Alternative Assessment Areas"],
          ["/updates/AssessmentAreaAccuracy", "Assessment Accuracy"],
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