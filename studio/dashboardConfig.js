export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6cc91651a77700f2cc7561',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nbcmej48',
                  apiId: '2ecc68af-9515-427d-936d-900fa0905df8'
                },
                {
                  buildHookId: '5f6cc9164630d2014a82d2dd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f7ha44aj',
                  apiId: '3626b9db-9f31-4aae-a923-2d7b9ad1de04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f7ha44aj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
