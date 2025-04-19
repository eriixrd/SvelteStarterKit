<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { Motion, useMotionValue, useMotionTemplate } from "svelte-motion";
    import { t } from '../../translations/config/index';
    import Swal from 'sweetalert2';
    
    const technologies = [
        { id: 'svelte', name: 'SvelteKit', url: 'https://svelte.dev' },
        { id: 'vite', name: 'Vite', url: 'https://vitejs.dev' },
        { id: 'tailwind', name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { id: 'typescript', name: 'TypeScript', url: 'https://www.typescriptlang.org' },
        { id: 'sweetalert', name: 'SweetAlert2', url: 'https://sweetalert2.github.io' },
        { id: 'i18n', name: 'Svelte-i18n', url: 'https://github.com/kaisermann/svelte-i18n/' }
    ];
    
    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    const handleCopy = async () => {
        await navigator.clipboard.writeText('git clone https://github.com/eriixrd/SvelteStarterKit');
        await Swal.fire({
            title: $t('hero.copied.title'),
            text: $t('hero.copied.text'), 
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
            position: 'top-end',
            toast: true,
            background: '#1a1a1a',
            color: '#fff',
            iconColor: '#0085ff'
        });
    };

    const createMotionValues = () => ({
        mouseX: useMotionValue(0),
        mouseY: useMotionValue(0),
        background: useMotionTemplate`radial-gradient(200px circle at ${useMotionValue(0)}px ${useMotionValue(0)}px, rgba(38, 38, 38, 0.4), transparent 80%)`
    });

    let motionValues = technologies.map(() => createMotionValues());
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore element_invalid_self_closing_tag -->
<section class="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div class="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div class="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
            {#if mounted}
            <div in:fade={{ duration: 1000 }}>
                <div class="mb-8 max-w-2xl mx-auto -mt-2">
                    <div class="relative flex items-center bg-neutral-900 rounded-lg p-4 font-mono text-sm border border-transparent hover:border-white/10 transition-all duration-300 group">
                        <code class="text-gray-300 group-hover:text-white transition-colors duration-300">git clone https://github.com/eriixrd/SvelteStarterKit</code>
                        <button 
                            class="absolute right-2 p-2 text-gray-400 hover:text-white transition-all duration-300"
                            on:click={handleCopy}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <h1 class="max-w-lg mb-2 font-sans text-4xl font-bold leading-none tracking-tight text-white sm:text-6xl md:mx-auto mt-15">
                    {$t('hero.title')}
                </h1>
                <p class="text-base text-gray-300 md:text-lg">
                    {$t('hero.description')}
                </p>
            </div>
            {/if}
        </div>

        <div class="grid gap-6 row-gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
            {#each technologies as tech}
                {@const mouseX = useMotionValue(0)}
                {@const mouseY = useMotionValue(0)}
                {@const background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)`}
                
                <a href={tech.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="group relative h-[130px] overflow-hidden rounded-xl bg-neutral-950"
                   on:mousemove={(e) => {
                        const { left, top } = e.currentTarget.getBoundingClientRect();
                        mouseX.set(e.clientX - left);
                        mouseY.set(e.clientY - top);
                   }}>
                    <div class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
                    <Motion style={{ background }} let:motion>
                        <div use:motion class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"></div>
                    </Motion>
                    <div class="relative flex h-full flex-col justify-between rounded-xl border border-white/10 px-4 py-4">
                        <div class="flex items-center gap-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 flex-shrink-0">
                                <span class="text-base text-white font-bold">{tech.name[0]}</span>
                            </div>
                            <h3 class="text-lg font-semibold text-neutral-200 line-clamp-1">{tech.name}</h3>
                        </div>
                        <p class="text-[14px] leading-relaxed text-neutral-400 line-clamp-3">
                            {$t(`hero.tech.${tech.id}`)}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
