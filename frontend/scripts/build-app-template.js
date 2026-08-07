import fs from 'fs';
import esbuild from 'esbuild';

const result = await esbuild.build({
	entryPoints: ['src/lib/prepaint/prepaint.ts'],
	bundle: true,
	minify: true,
	write: false,
	format: 'iife',
	target: ['es2020']
});

const code = result.outputFiles[0].text;

const appHtml = fs.readFileSync('src/app.template.html', 'utf8');

const updated = appHtml.replace(
	'<!--pre-paint-script-->',
	`<script>${code}</script>`
);

fs.writeFileSync('src/app.html', updated);