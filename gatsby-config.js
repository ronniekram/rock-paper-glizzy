module.exports = {
	siteMetadata: {
		title: `Rock Paper Scissors`,
		description: `Frontend Mentor: Rock, Paper, Scissors`,
		author: `@ronniekram`,
	},
	plugins: [
		{
			resolve: `@raae/gatsby-plugin-svg-emoji-favicon`,
			options: {
				emoji: `🚧`,
			},
		},
		`gatsby-plugin-image`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-image
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
	],
};
