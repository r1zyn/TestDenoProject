const url: string = Deno.args[0] || "https://github.com/";
url === "https://github.com/"
	? console.warn(`No URL provided, using default URL of ${url}`)
	: console.info(`Fetching data from URL ${url}...`);

await fetch(url)
	.then(async (res: Response): Promise<void> => {
		const body: Uint8Array = new Uint8Array(
			await res.arrayBuffer(),
		);
		await Deno.stdout.write(body);
	})
	.catch(console.error);
