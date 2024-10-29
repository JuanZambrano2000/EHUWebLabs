function loadJSON(url){
    return new Promise( (resolve, reject) => {
           fetch(url)
               .then( r => {
                          resolve( r.json() )
               })
               .catch( e => reject())
    })
}