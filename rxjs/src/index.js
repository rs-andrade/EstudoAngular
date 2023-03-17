import {Observable} from 'rxjs';

const observable = new Observable( (subscriber) => {
    const id = setInterval(() => {
        subscriber.next('test')
    }, 1000)

    return () => {
        clearInterval(id)
    }
})

const subscription = observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('complete hello called!!!')
    },
    error: (err) => {
        console.error(err)
    }
})

setTimeout(() => {
    subscription.unsubscribe()
}, 4000)
