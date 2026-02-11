const jsonResponse = (data: unknown, status: number = 200): Response => {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*', 
		}
	});
};

export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);
		const method: string = request.method;
		if (url.pathname !== '/') {
			return jsonResponse({ error: 'Not Found' }, 404);
		}
		if (method !== 'GET') {
			return jsonResponse({ error: 'Method Not Allowed' }, 405);
		}

		const query: string | null = url.searchParams.get('q');
		if (!query) {
			return jsonResponse({ error: "Missing query parameter 'q'" }, 400);
		}

		try {
			const response: Response = await fetch(
				`https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`
			);
			if (!response.ok) {
				return jsonResponse({ error: "Failed to fetch suggestions" }, 500);
			}

			// google's response actually returns a array with 4 elements, but only the first 2 is necessary.
			// thus, only the type of the first two will be strictly checked.
			const raw: unknown = await response.json();
			if (!Array.isArray(raw) || 
				typeof(raw[0]) !== "string" || 
				!Array.isArray(raw[1]) || 
				!raw[1].every(item => typeof item === "string")
			) {
				return jsonResponse({ error: "Invalid data from Google" }, 500);
			}

			const data = raw as [string, string[]];
			return jsonResponse({ query: data[0], suggestions: data[1] }, 200);
		}
		catch (err) {
			return jsonResponse({ error: "Something went wrong" }, 500);
		}
	},
};	