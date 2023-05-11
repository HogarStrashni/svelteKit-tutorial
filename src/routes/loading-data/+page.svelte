<script lang="ts">
	export let data;
</script>

<div class="space-y-4">
	<h1 class="mb-2 border-b pb-2 text-xl">Loading data...</h1>
	<p class="uppercase text-blue-600">using both +page.ts and +page.server.ts</p>
	<p>This is load from +page.ts... <span class="text-red-400">{data.universaload}</span></p>
	<p>
		This is load from +page.server.ts... <span class="text-red-400"
			>{data.dataserverload.serverload}</span
		>
	</p>
</div>
