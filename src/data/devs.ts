interface Dev {
	name: string;
	picture: string;
	description: string;
	links: {
		github?: string;
		twitter?: string;
	};
}

const devs: Dev[] = [
	{
		name: 'Sadie',
		picture: 'https://us-east-1.tixte.net/uploads/nightlake.tixte.co/sadie.png',
		description: 'Techno..queen (idk?) of Aytch software',
		links: {
			github: 'night-lake',
			twitter: '_nightlake'
		}
	}
];

export default devs;
