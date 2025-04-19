<script lang="ts">
    import { locale } from '../../translations/config/index';
    import { t } from '../../translations/config/index';
    import AnimatedButton from '../addons/animatedbutton.svelte';
    
    function switchLanguage() {
        locale.set(locale.get() === 'cs' ? 'en' : 'cs');
    }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<!-- svelte-ignore element_invalid_self_closing_tag -->
<AnimatedButton on:click={switchLanguage}>
    {$t('common.language')}
</AnimatedButton>