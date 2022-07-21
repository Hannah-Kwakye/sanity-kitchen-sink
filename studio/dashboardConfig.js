export default {
  widgets: [
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
                  buildHookId: '62d97e4994ffb2042aa174ee',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7hcerm8t',
                  apiId: '101d6d98-230c-4e44-986b-52c9a1fedbee'
                },
                {
                  buildHookId: '62d97e4a2dc50f06e4d497ea',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kb6mhxee',
                  apiId: '077347ac-76ed-405e-b509-3886bb917f91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Hannah-Kwakye/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kb6mhxee.netlify.app', category: 'apps'}
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
