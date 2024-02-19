<template>
    <v-app>
        <div class="bot-list-table">
            <div class="header-area">
                <span>My Chatbot</span>
                <button type="button" class="bl-btn-fill is-right" style="margin-top: 30px; margin-right: 50px; margin-bottom: 10px;">+ Create Bot</button>
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
                <v-text-field v-model="search" label="Search Bot"></v-text-field>
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
                { text: 'Connected Channel', value: 'channelName', width: '400px' },
                { text: 'Auth', value: 'auth', width: '100px' },
            ],
            botList: []
        }
    },
    methods: {
        selectBotList: async function() {
            if(this.validationSelectBotList()) return;

            let url = '/api/bot-list/select'
            let data = {
                email: this.$store.getters.userInfo.email,
            };
            let header = {};

            let res = await this.$post(url, data, header)

            if(!res.data.ERROR_FLAG) {
                this.botList = res.data.DATA
            }
        },

        validationSelectBotList: function() {
            if(this.$store.getters.userInfo.email == undefined) {
                alert('이메일 데이터가 없습니다.')
                return true
            } 

            return false
        },
    },

    mounted() {
        this.selectBotList()
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