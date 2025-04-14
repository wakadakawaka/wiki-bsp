// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/',
	integrations: [
		starlight({
			title: 'Шаблоны кода 1С',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Библиотека стандартных подсистем',
					autogenerate: { directory: 'bsp' },
				},
				{
					label: 'Зарплата и управление персоналом',
					autogenerate: { directory: 'zup' },
				},
				{
					label: 'ERP. Управление холдингом',
					autogenerate: { directory: 'erp_uh' },
				},
			],
		}),
	],
});
