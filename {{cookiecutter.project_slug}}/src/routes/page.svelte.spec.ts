{% if cookiecutter.include_testing == 'y' %}import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('renders welcome message', async () => {
		const { getByRole } = render(Page);
		const heading = getByRole('heading', { level: 1 });
		expect(heading.textContent).toContain('Welcome to {{cookiecutter.project_name}}');
	});
});
{% endif %}