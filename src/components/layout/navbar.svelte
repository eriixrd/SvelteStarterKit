<script lang="ts">
    import LanguageSwitcher from '../addons/languageswitcher.svelte';
    import { t } from '../../translations/config/index';
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore element_invalid_self_closing_tag -->
<nav class="bg-neutral-950 text-gray-300 border-b border-white/5">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0">
                <a href="/" 
                   class="text-xl font-semibold text-white hover:text-gray-300 transition-all duration-300">
                    {$t('common.projectName')}
                </a>
            </div>

            <div class="flex items-center">
                <LanguageSwitcher />
            </div>
        </div>
    </div>
</nav>
