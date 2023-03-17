import {Observable} from 'rxjs';

const observable = new Observable( (subscriber) => {
    subscriber.next()
})

observable.subscribe({
    next: (value) => {
        console.log(value)
    }
})