<template>
    <div class="block-detail">
        <!-- 시나리오 & 블록 트리구조 시작 -->
        <div class="block-tree">
            <div class="block-tree-header">
                <button class="bl-btn-fill block-tree-header-btn">+ 시나리오</button>
            </div>
            <v-treeview :items="treeItems" activatable :open.sync="openItems" @input="onTreeItemClicked">
            <template v-slot:prepend="{ item, open }">
                <v-icon v-if="item.children">mdi-folder</v-icon>
                <v-icon v-else>mdi-file</v-icon>
            </template>
            </v-treeview>
        </div>
        <!-- 시나리오 & 블록 트리구조 끝 -->

        <!-- 블록정보 세팅 시작 -->
        <div class="block-info">

        </div>
        <!-- 블록정보 세팅 끝 -->
    </div>
</template>

<script>
export default {
data() {
    return {
    treeItems: [
        {
        id: 1,
        text: 'Root',
        children: [
            {
            id: 2,
            text: 'Node 1',
            },
            {
            id: 3,
            text: 'Node 2',
            children: [
                {
                id: 4,
                text: 'Node 2.1',
                },
                {
                id: 5,
                text: 'Node 2.2',
                },
            ],
            },
            {
            id: 6,
            text: 'Node 3',
            },
        ],
        },
    ],
    openItems: [1],
    };
},
methods: {
    onTreeItemClicked(item) {
    console.log('Clicked:', item);
    },
},
};
</script>

<style scoped>
.block-detail {
    display: flex;
    background-color: white;
}
.block-tree {
    width: 200px;
    border: 1px solid #DDD;
    height: 100vh;
}
.block-tree-header {
    border-bottom: 1px solid #DDD;
    height: 62px;
    text-align: center;
    padding-top: 10px;
}
.block-tree-header-btn {
    width: 80%;
}
.block-info {
    flex-grow: 1;
    border: 1px solid #DDD;
    height: 100vh;
}
</style>