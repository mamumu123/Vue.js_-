const STRRAGE_KEY = 'sell_car';//名称
const sell_stroge = {
    fetch() {
        let store = JSON.parse((localStorage.getItem(STRRAGE_KEY || '[]')));
        // sell_stroge.uid = store.length;
        return store
    },
    save(store) {
        localStorage.setItem(STRRAGE_KEY, JSON.stringify(store))
    }
}
const app = new Vue({
    el: '#app',
    data: {
        inputValue: "",
        list: sell_stroge.fetch()||[],
        // totla: 0,

    },
    methods: {
        add() {
            _this = this;
            let tem = _this.inputValue.split(' ');
            _this.list.push({id: tem[0], name: tem[1], count: tem[2], price: tem[3], select: true})
            _this.inputValue = '';
        },
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
                if (i.select) {
                    total += (i.price * i.count)
                }
            }
            return total;
        }
    },
    watch: {
        list: {
            handler(list) {
                sell_stroge.save(list)
            }
        },
        deep: true
    }
})