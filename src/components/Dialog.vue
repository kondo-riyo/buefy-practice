<template>
    <section>
        <div class="buttons">
            <b-button
                label="alert(custom)"
                type="is-danger"
                size="is-medium"
                class="alert"
                @click="alertCustomError" />

            <b-button
                label="confirm(default)"
                type="is-info"
                size="is-medium"
                @click="confirm" />

            <b-button
                label="confirm(custom)"
                type="is-info"
                size="is-medium"
                @click="confirmCustom" />

        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            alertCustomError() {
                this.$buefy.dialog.alert({
                    title: 'Dialog',
                    message: 'このボタンは基礎的なダイアログの練習です <b>ここは太字になる！</b>',
                    type: 'is-danger', //OKのボタンのtypeが変わる(→ピンク色)
                    hasIcon: true,  //messageの左側にicon入れる用の空白
                    icon: 'times-circle', //？
                    iconPack: 'fa',  //？
                    ariaRole: 'alertdialog', //ルール？
                    ariaModal: true  
                })
            },
            confirm() {
                this.$buefy.dialog.confirm({
                    message: 'Confirm(default)',
                    onConfirm: () => this.$buefy.toast.open('confirmしました')
                })
            },
            confirmCustom() {
                this.$buefy.dialog.confirm({
                    title: 'Confirm(custom)',
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce id fermentum quam. Proin sagittis,
                        nibh id hendrerit imperdiet, elit sapien laoreet elit,
                        ac scelerisque diam velit in nisl. Nunc maximus ex non
                        laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,
                        augue purus placerat justo,
                        sit amet porttitor dui metus in nisl.
                        Nulla non leo placerat, porta metus eu, laoreet risus.
                        Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,
                        sit amet sodales quam dui nec odio.
                        Nullam porta mollis est. Quisque aliquet malesuada fringilla.
                        Pellentesque volutpat lacus at ante posuere,
                        non pulvinar ante porta. Proin viverra eu massa nec porta.
                        Aliquam rhoncus velit quis sem hendrerit,
                        ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,
                        eleifend venenatis ligula.
                        Praesent molestie mauris sed elit posuere, non malesuada libero gravida.
                        In hac habitasse platea dictumst.
                        Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas.`,
                    cancelText: '同意しません', //キャンセルボタンのtext(指定なしだと'キャンセル')
                    confirmText: '同意',  //confirmボタンのtext
                    type: 'is-success', //confirmボタンの色が黄緑色
                    onConfirm: () => this.$buefy.toast.open('User agreed')
                })
            },
        }
    }
</script>
<style lang="scss">
.alert {
    margin-top: 50px;
}
</style>