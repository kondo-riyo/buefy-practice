<template>
    <div>
        <autocomplete/>
        <checkbox/>
        <clockpicker/>
        <colorpicker/>
    </div>
</template>
<script>
import Autocomplete from '../components/forms/Autocomplete.vue';
import Checkbox from '../components/forms/Checkbox.vue';
import Clockpicker from '../components/forms/Clockpicker.vue';
import Colorpicker from '../components/forms/Colorpicker.vue';

export default {
    components: {
        Autocomplete,
        Checkbox,
        Clockpicker,
        Colorpicker
    }
}
</script>