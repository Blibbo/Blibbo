import fs from 'fs';
import { rolldown } from 'rolldown';

const bundle = await rolldown({
	input: 'src/lib/prepaint/prepaint.ts',
});

const { output } = await bundle.generate({
	format: 'iife',
	minify: true,
});

await bundle.close();

const code = output[0].code;

const appHtml = fs.readFileSync('src/app.template.html', 'utf8');

const updated = appHtml.replace(
	'<!--pre-paint-script-->',
	`<script>${code}</script>`
);

fs.writeFileSync('src/app.html', updated);