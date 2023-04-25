<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	// import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form);
</script>

<!-- ### Superforms component (form data preview) ### -->
<!-- <SuperDebug data={$form} /> -->

<section class="p-3">
	<form method="POST" use:enhance>
		<div class="space-y-12">
			<div class="border-b border-gray-900/10 pb-12">
				<label
					for="firstName"
					class="block text-sm font-medium leading-6 text-gray-900 sm:flex sm:items-center"
					>First name
				</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
					data-invalid={$errors.firstName}
					bind:value={$form.firstName}
					{...$constraints.firstName}
				/>
				{#if $errors.firstName}
					<p class="text-xs text-red-500">{$errors.firstName}</p>
				{/if}

				<label for="lastName" class="mt-6 block text-sm font-medium leading-6 text-gray-900"
					>Last name
				</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
					data-invalid={$errors.lastName}
					bind:value={$form.lastName}
					{...$constraints.lastName}
				/>
				{#if $errors.lastName}
					<p class="mt-2 text-xs text-red-500">{$errors.lastName}</p>
				{/if}

				<label for="email" class="mt-6 block text-sm font-medium leading-6 text-gray-900"
					>Email
				</label>
				<input
					type="text"
					name="email"
					id="email"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
					data-invalid={$errors.email}
					bind:value={$form.email}
					{...$constraints.email}
				/>
				{#if $errors.email}
					<p class="mt-2 text-xs text-red-500">{$errors.email}</p>
				{/if}

				<label for="password" class="mt-6 block text-sm font-medium leading-6 text-gray-900"
					>Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
					data-invalid={$errors.password}
					bind:value={$form.password}
					{...$constraints.password}
				/>
				{#if $errors.password}
					<p class="mt-2 text-xs text-red-500">{$errors.password}</p>
				{/if}
			</div>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
			<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
			<button
				type="submit"
				class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
				>Save</button
			>
		</div>
	</form>
</section>
