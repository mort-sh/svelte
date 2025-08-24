{% if cookiecutter.include_testing == 'y' %}import { expect, test } from 'vitest';

test('example test', () => {
	expect(2 + 2).toBe(4);
});
{% endif %}