import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import type { Actions } from './$types';

const schema = z.object({
	firstName: z.string().nonempty(),
	lastName: z.string().nonempty(),
	email: z.string().email(),
	password: z.string().min(6, { message: 'Minimal 6 characters' })
});

export const load = async (event) => {
	const form = await superValidate(event, schema);
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	}
} satisfies Actions;
