const base_url = 'http://localhost:3000'

export function markComplete (task) {
    let id = task.id
    return (dispatch) => {
        return fetch(base_url+`/tasks/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({task: task})
        }).then (res => res.json())
        .then(res => {
            dispatch({ type: 'SET_USER', user: res})
        })
    }
}

export function createNewT (task) {
    return (dispatch) => {
        return fetch(base_url+`/tasks`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({task: task})
        }).then (res => res.json())
        .then(res => {
            dispatch({ type: 'SET_USER', user: res})
        })
    }
}