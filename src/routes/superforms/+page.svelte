<script lang="ts">
</script>

<section class="p-3">
	<form>
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
				/>

				<label for="lastName" class="mt-6 block text-sm font-medium leading-6 text-gray-900"
					>Last name
				</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
				/>

				<label for="user" class="mt-6 block text-sm font-medium leading-6 text-gray-900"
					>User
				</label>
				<input
					type="text"
					name="user"
					id="user"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
				/>

				<label for="password" class="mt-6 block text-sm font-medium leading-6 text-gray-900"
					>Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
				/>
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
