Deno.test("Program test", async (): Promise<void> => {
	const url: string = Deno.args[0] || "https://github.com/";

	await fetch(url)
		.then(async (res: Response): Promise<void> => {
			const body: Uint8Array = new Uint8Array(
				await res.arrayBuffer(),
			);
			await Deno.stdout.write(body);
		})
		.catch(console.error);
});
