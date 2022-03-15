<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="JSのフレームワークを探せます (候補も出す)" type="is-brown" class="">
            <b-autocomplete
                rounded
                v-model="name"
                type='is-brown'
                :data="filteredDataArray"
                placeholder="例) Vue.js"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                data: [
                    'Angular',
                    'Angular 2',
                    'Aurelia',
                    'Backbone',
                    'Ember',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>
<style lang="scss">
@import '@/assets/style/buefy.scss';
// .autocomplete {
//     width: 70%;
//     background-color: bisque;
//     input {
//         background-color: aqua;
//         &:focus {
//             background-color: rgba(0, 255, 255, 0.487);
//         }
//     }
// }
</style>