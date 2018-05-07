const app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        list: [
            {id: 1, name: 'meizu', count: 1, price: 6188},
            {id: 2, name: 'huawei', count: 1, price: 1188},
            {id: 3, name: 'xioami', count: 1, price: 1188}
        ],
        // totla: 0,

    },
    methods: {
        hangleReduce(index) {
            if (this.list[index].count == 1) return;
            this.list[index].count -= 1;
        },
        hangleUp(index) {
            this.list[index].count += 1;
        },
        handleRemove(index) {
            this.list.splice(index, 1);
        }
    },
    computed: {
        totalprice() {
            let total = 0;
            for (let i of this.list) {
                total += (i.price * i.count)
            }
            return total;
        }
    }
})