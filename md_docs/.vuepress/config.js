module.exports = {
    title: `H!DIKI`,
    description: `Hidekuma\'s DEV logs and Wiki`,
    base: "/HiDIKI/",
    dest: 'docs',
    ga: 'UA-138204111-1',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
	configureWebpack: {
		resolve: {
		  alias: {
			'@alias': 'path/to/some/dir'
		  }
		}
	},
    themeConfig: {
        sidebar: [
            {title: 'Docker', children: ['/docker/window-install']},
            {title: 'Vim', children: ['/vim/vimrc']},
            {
                title: 'Pythonic',
                children: [
                    '/pythonic/pep8',
                    '/pythonic/generator'
                ]
            }
        ],
        nav: [
			{
				text: 'ABOUT',
				items:[
					{ text: 'Github', link: 'https://github.com/hidekuma/' },
                    { text: 'Blog', link: 'https://hidekuma.github.io/' }
				]	
			}
        ]
    },
}

