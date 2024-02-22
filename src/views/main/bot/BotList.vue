<template>
    <v-app>
        <div class="bot-list-table">
            <div class="header-area">
                <span>My Chatbot</span>
                <button type="button" class="bl-btn-fill is-right" @click="openCreateBotModal" style="margin-top: 30px; margin-right: 50px; margin-bottom: 10px;">+ Create Bot</button>
            </div>

            <!-- 봇 생성 모달 창 시작 -->
            <v-dialog v-model="showCreateBotModal" max-height="500" max-width="500">
                <v-card>
                    <v-card-title>
                        <span class="">Create Bot</span>
                    </v-card-title>
                    <v-card-text>
                        <div class="create-bot-modal-text">
                            <table>
                                <tr>
                                    <th>Bot Name</th>
                                    <td><input type="text" class="bl-input" v-model="insertBotName" placeholder="Enter bot name" maxlength="20"></td>
                                </tr>
                            </table>
                        </div>
                    </v-card-text>
                    <v-card-actions class="is-right">
                        <button class="bl-btn-fill" @click="insertBot">save</button>
                        <button class="bl-btn" @click="closeCreateBotModal">close</button>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- 봇 생성 모달 창 끝 -->

            <!-- 봇 리스트 테이블 시작 -->
            <v-data-table
                :headers="headers"
                :items="botList"
                :search="search"
                class="custom-table"
                @click:row="moveBotDetailPage"
                :footer-props="{
                    'items-per-page-options': [5, 10, 15],
                    'items-per-page-text': 'rows'
                }"
            >
            <template v-slot:top>
                <v-text-field v-model="search" label="Search Bot"></v-text-field>
            </template>
            </v-data-table>
            <!-- 봇 리스트 테이블 끝 -->
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
            botList: [],
            showCreateBotModal: false,
            insertBotName: '',
        }
    },
    methods: {
        moveBotDetailPage: function(item) {
            this.$router.push("/main/bot/botDetail/" + item.botId)
        },
        insertBot: async function() {
            if(this.validationInsertBot()) return

            let url = '/api/bot/insert'
            let data = {
                botName: this.insertBotName,
                email: this.$store.getters.userInfo.email,
                auth: 'MASTER',
            };
            let header = {};

            let res = await this.$post(url, data, header)

            if(!res.data.ERROR_FLAG) {
                alert('The Bot has been created.')
                this.closeCreateBotModal()
                this.selectBotList()
            }
        },

        validationInsertBot: function() {
            if(this.insertBotName == '') {
                alert('Plase enter Bot name.')
                return true
            }
            return false
        },

        selectBotList: async function() {
            if(this.validationSelectBotList()) return

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

        openCreateBotModal: function() {
            this.showCreateBotModal = true
        },
        closeCreateBotModal: function() {
            this.showCreateBotModal = false
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
.create-bot-modal-title{
    padding-bottom: 50px;
}
.create-bot-modal-text{
    border-top: 1px solid black;
    width: 100%;
    border-bottom: 2px solid #eee;
    padding: 8px;
}
</style>