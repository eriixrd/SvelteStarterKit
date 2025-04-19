<script lang="ts">
    import { t } from '../../translations/config/index';
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore element_invalid_self_closing_tag -->
<footer class="bg-neutral-950 text-gray-300 border-t border-white/5">
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-white">{$t('common.projectName')}</h3>
                <p class="text-sm text-gray-400">
                    {$t('footer.description')}
                </p>
                <div class="flex space-x-4">
                    <a href="https://github.com/eriixrd" 
                       target="_blank"
                       title={$t('footer.github')}
                       class="text-gray-400 hover:text-white transition-all duration-300">
                        <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://eriixrd.eu" 
                       target="_blank"
                       title={$t('footer.portfolio')}
                       class="text-gray-400 hover:text-white transition-all duration-300">
                        <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="space-y-4 text-right">
                <h4 class="text-lg font-semibold text-white">{$t('footer.contact')}</h4>
                <p class="text-sm text-gray-400">
                    {$t('footer.createdBy')} 
                    <a href="https://eriixrd.eu" 
                       target="_blank" 
                       class="text-white hover:text-gray-300 transition-all duration-300 border-b border-transparent hover:border-white/20">
                        Erik "eriixrd" Bednařík
                    </a>
                </p>
                <a href="mailto:eriixrd@gmail.com" class="text-gray-400 hover:text-white transition-all duration-300 inline-flex items-center gap-2 justify-end">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    eriixrd@gmail.com
                </a>
            </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {$t('common.projectName')}. {$t('footer.welcome')}</p>
        </div>
    </div>
</footer>
