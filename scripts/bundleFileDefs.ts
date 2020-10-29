import JSON5 from 'https://cdn.skypack.dev/json5@2.0.0'

await Promise.all([
	Deno.writeTextFile(
		'./dist/file-definitions.js',
		`(() => JSON.parse("${JSON.stringify(
			JSON5.parse(
				await Deno.readTextFile('./packages/data/file_definitions.json')
			)
		).replace(/\"/g, '\\"')}"))()`
	),
	Deno.copyFile(
		'./packages/data/file_definitions.json',
		'./dist/file-definitions.json'
	),
])