<script lang="ts">
	import '../app.css';
	import { loadTranslations, locale } from '../translations/config/index';
	import { onMount } from 'svelte';
	import Navbar from '../components/layout/navbar.svelte';
	import Footer from '../components/layout/footer.svelte';

	import { t } from '../translations/config/index'; // Do not remove this import is needed for the translations

	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const lang = urlParams.get('lang') || 'en';
		locale.set(lang);
		await loadTranslations(lang);
	});
</script>

<svelte:head> <!-- Here you can add meta tags, favicon, seo etc. -->
    <title>SvelteStarterKit - Modern template for quick start</title>
    <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<div class="flex flex-col min-h-screen bg-neutral-950">
    <Navbar />
    <main class="flex-1">
        <slot />
    </main>
    <Footer />
</div>
