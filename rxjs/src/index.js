import {Observable} from 'rxjs';

const observable = new Observable( (subscriber) => {
    subscriber.next('Hello Rodrigo')
    subscriber.error('Error Rodrigo !!!')
    subscriber.next('Hello for second')

    subscriber.complete()
    subscriber.next('Hello for third')
})

observable.subscribe({
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