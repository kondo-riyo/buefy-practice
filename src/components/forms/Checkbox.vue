<template>
    <section>
        <b-field>
            <b-checkbox type="is-brown">Basic</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox v-model="checkbox" type="is-brown">
                {{ checkbox }}
            </b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox v-model="checkboxCustom"
                true-value="Yes"
                false-value="No">
                {{ checkboxCustom }}
            </b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox :indeterminate="true">
                Indeterminate
            </b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox disabled>Disabled</b-checkbox>
        </b-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                checkbox: false,
                checkboxCustom: 'Yes'
            }
        }
    }
</script>
<style lang="scss">
@import '@/assets/style/buefy.scss';

</style>