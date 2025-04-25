// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/',
	integrations: [
		starlight({
			title: 'Шаблоны кода 1С',
			customCss: [
        		// Relative path to your custom CSS file
      	  		'./src/styles/custom.css',
     		 ],
			sidebar: [
				{
					collapsed: true,
					label: 'Библиотека стандартных подсистем',
					autogenerate: { directory: 'bsp' },
				},
			],
		}),
	],
});
