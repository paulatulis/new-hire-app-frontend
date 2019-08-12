const base_url = 'http://new-hire-app-backend.herokuapp.com'


export function getAllYelp(){
    return (dispatch) => {
     return fetch(base_url+`/get_yelp`, {
         headers: {
             'Content-Type': 'application/json',
             Accept: 'application/json'
         }
     }).then(res => res.json())
     .then( res => {
         dispatch({ type: 'SET_YELP', data: res.businesses})
     })
 }}

 export function addLunch (lunch, myId) {
     return (dispatch) => {
         return fetch(base_url+`/lunches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user_id: myId,
                colleague_id: lunch.match.id,
                location: lunch.restaurant.name,
                address: lunch.restaurant.location.address1,
                name: lunch.lunchName,
                photo: lunch.restaurant.image_url,
                yelp_info: lunch.restaurant.rating,
                date: lunch.lunchDate
            })
         }).then (res => res.json())
         .then(res => {
             dispatch({ type: 'SET_USER', user: res})
         })
     }

 }

 export function cancelLunch (lunch) {
     console.log(lunch)
     return (dispatch) => {
         return fetch(base_url+`/lunches/${lunch.id}`, {
             method: 'DELETE',
             headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage.token
             },
             body: JSON.stringify({
                user_id: lunch.user_id,
                colleague_id: lunch.colleague_id,
                location: lunch.location,
                address: lunch.address,
                name: lunch.name,
                photo: lunch.photo,
                yelp_info: lunch.yelp_info,
                date: lunch.date
              })
         }).then(res => res.json())
         .then(res => {
            dispatch({ type: 'SET_USER', user: res})
         })
     }
 }
