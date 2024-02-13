<template>
    <v-app>
        <div class="bot-list-table">
            <div class="header-area">
                <span>My Chatbot</span>
                <button type="button" class="bl-btn-fill is-right" style="margin-top: 30px; margin-right: 50px; margin-bottom: 10px;">+ make bot</button>
            </div>

            <v-data-table
                :headers="headers"
                :items="botList"
                :search="search"
                class="custom-table"
                :footer-props="{
                    'items-per-page-options': [5, 10, 15],
                    'items-per-page-text': 'rows'
                }"
            >
            <template v-slot:top>
                <v-text-field v-model="search" label="search"></v-text-field>
            </template>
            </v-data-table>
        </div>
    </v-app>
</template>

<script>
import { mixin } from '@/mixin/mixin'

export default {
    mixins: [
        mixin
    ],
    data() {
        return {
            search: '',
            headers: [
                { text: 'Bot Name', value: 'botName', width: '400px' },
                { text: 'Messenger', value: 'messenger', width: '200px' },
                { text: 'Connected Channel', value: 'connectedChannel', width: '600px' },
            ],
            botList: [
                { botName: 1, messenger: 'John Doe', connectedChannel: 'john@example.com', authentication: 'master' },
                { botName: 2, messenger: 'Jane Doe', connectedChannel: 'jane@example.com', authentication: 'user' },
            ]
        }
    },
    methods: {
        logout: function() {
            let logoutFlag = confirm('로그아웃을 하시겠습니까?')
            if(logoutFlag) {
                this.mixin_logout()
            }
        },
    },

    async mounted() {

    },
}
</script>

<style>
.bot-list-table{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
}
.header-area{
    display: flex;
    align-items: center;
    width: 80%;
    border-bottom: 2px solid black;
}
</style>