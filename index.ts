const url: string | undefined = Deno.args[0];

url
	? await fetch(url)
		.then(async (res: Response): Promise<void> => {
			const body: Uint8Array = new Uint8Array(await res.arrayBuffer());
			await Deno.stdout.write(body);
		})
		.catch(console.error)
	: null;
