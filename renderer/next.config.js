module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.target = 'electron-renderer';
		}

		return config;
	},
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: '/:path*',
			},
		];
	},
};
