// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid({
			theme: 'default',
			autoTheme: true,
		}),
		starlight({
			title: 'projectname Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/msmachadodossantos/projectname' }],
			sidebar: [
				{
					label: 'Getting Started',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'getting-started' } },
					],
				},
				{
					label: 'Project Documentation',
					collapsed: true,
					items: [
						{
							label: 'Conceptual Design',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/conceptual-design' } },
							],
						},
						{
							label: 'Project Management and Planning',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/project-management-and-planning' } },
							],
						},
						{
							label: 'Requirements Engineering',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/requirements-engineering' } },
							],
						},
						{
							label: 'System Design and Architecture',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/system-design-and-architecture' } },
							],
						},
						{
							label: 'Quality Assurance and Testing',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/quality-assurance-and-testing' } },
							],
						},
						{
							label: 'Software Deployment and Maintenance',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/software-deployment-and-maintenance' } },
							],
						},
						{
							label: 'Security Cases',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/security-cases' } },
							],
						},
						{
							label: 'General User Documentation',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/general-user-documentation' } },
							],
						},
					],
				},
			],
		}),
	],
});
