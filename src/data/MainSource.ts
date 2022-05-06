import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8']);
export default new DocsSource({
	id: 'docs',
	name: 'Discord Selfbot v13',
	global: 'Discord',
	docsRepo: 'aiko-chan-ai/discord.js-selfbot-v13',
	repo: 'aiko-chan-ai/discord.js-selfbot-v13',
	defaultTag: 'main',
	// source: 'https://github.com/',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '9.0.0'),
});
