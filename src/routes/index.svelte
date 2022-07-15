<script context="module" lang="ts">
	let res: Response;
	export async function load({ params, fetch }: { params: string; fetch: any }) {
		try {
			res = await fetch('/test');
		} catch (err) {
			console.log(err);
		}
		let data = await res.json();
		return {
			props: {
				data: res.ok && data
			}
		};
	}
</script>

<script lang="ts">
	export let data: any;
	data = data.data;
</script>

{#if data.id}
<p>ID: {data.id}</p>
<p>Level: {data.level}</p>
<p>Name: {data.name}</p>
{:else}
<h1>Error with API shit</h1>
{/if}
