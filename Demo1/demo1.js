/**
 * Created by developer on 1/24/17.
 */
new Vue({
    el: "#vue1",
    data: {
        message: 'Hello Vue'
    }
})

new Vue({
    el: "#vue2",
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

new Vue({
    el: "#vue3",
    data: {
        see: false
    }
})

new Vue({
    el: "#vue4",
    data: {
        todos: [
            {text: "Learn 11111"},
            {text: "Learn 22222"},
            {text: "Learn 33333"}
        ]
    }
})