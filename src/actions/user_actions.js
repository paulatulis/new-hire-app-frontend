const base_url = 'http://localhost:3000'

export function onPageLoad(token) {
	console.log('here', token)
    return dispatch => {
		fetch(base_url+'/init-state', {
			headers: { 
				Authorization: token 
			}
		})
		.then(res => res.json())
		.then(res => {
			// console.log(res)
			if(res) {
				dispatch({ type: 'SET_USER', user: res})
                dispatch({ type: 'ERRORS'})
            }
            else if (res.errors)
            	dispatch({ type: 'ERRORS', errorType: 'pageload', errors: res.errors })
            })
    }


}


export function handleSignUp(e) {
	e.preventDefault()
	let form = e.target
	let newUser = {
		first_name: form.first_name.value,
		last_name: form.last_name.value,
		username: form.username.value,
		password: form.password.value,
		confirm_password: form.confirm.value
	}

	return dispatch => {
		
		fetch(base_url+'/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ user: newUser })
		})
		.then(res => res.json())
		.then(res => {

			if (res.errors) {
				form.password.value = ''
				dispatch({ type: 'ERRORS', errType: 'signup', errors: res.errors })
			}
			else if (res.token) {
  			localStorage.setItem('token', res.token)
	  		dispatch({ type: 'SET_USER', user: res.user })
	  		dispatch({ type: 'LOG_IN', token: res.token })
			}
		})
	}
}

export function handleLogin(e) {
	e.preventDefault()
	let form = e.target
	let credentials = {
	  username: form.username.value,
	  password: form.password.value
	}
	return dispatch => {
	  fetch(base_url+'/login', {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
	    body: JSON.stringify({ session: credentials })
	  })
	  .then(res => res.json())
	  .then(res => {
	  	if (res.token) {
	  		dispatch({ type: 'SET_USER', user: res.user })
	  		dispatch({ type: 'LOG_IN', token: res.token })
				dispatch({ type: 'ERRORS', errorType: 'pageload', errors: res.errors })
	  	}
	  	else if (res.errors) {
	  		form.password.value = ''
	  		dispatch({type: 'ERRORS', errorType: 'login', errors: res.errors})
	  	}
	  })
	}
}

export function getAllUsers(){
	return dispatch => {
		return fetch(base_url+'/users', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		}).then(res => res.json())
		.then(res => {
			dispatch({type: 'SET_ALL_USERS', users: res})
		})
	}
}
