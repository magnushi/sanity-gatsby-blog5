export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d4368d53334b506744489bd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog5-studio',
                  apiId: 'b221a8e3-0c0f-4ff1-aadf-02e966852e2d'
                },
                {
                  buildHookId: '5d4368d54658147edae8ca06',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog5',
                  apiId: 'b3b5c1db-077d-4561-9da5-56870bad1595'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog5',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
