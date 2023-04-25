import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	firstName: z.string().nonempty(),
	lastName: z.string().nonempty(),
	email: z.string().email(),
	password: z.string().min(6, { message: 'Minimal 6 characters' })
});

export const load = async () => {
	const form = await superValidate(schema);
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);

		console.log(form);

		if (!form.valid) {
			throw error(400, { message: 'Form data not valid' });
		}

		return { form };
	}
};
