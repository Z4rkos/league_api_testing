export let fetchSumByName = async (name: string) => {

	const API_KEY = import.meta.env.VITE_API_KEY;
	const req = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`;
	const res = await fetch(req);
	if (res.ok) {
		let data = await res.json();
		return data;
	} else {
		return { msg: 'error' };
	}
};

export async function get() {
	const stuff = await fetchSumByName('0xz4');
    if (!stuff.msg) {
        console.log("test")	
        return {
            status: 200,
            body: {
                data: {
                    id: stuff.id,
                    name: stuff.name,
                    level: stuff.summonerLevel
                }
            }
        };
    };
    return {
        status: 200,
        body: {
            data: stuff
        }
    }
}
