import Fire from "../utils/Fire"

export async function addData(collection, data) {

    var succeed = null
    var thrownError = null

    await Fire.addData(collection, data)
        .then(() => {
            succeed = true
            thrownError = false
        })
        .catch((error) => {
            succeed = false
            thrownError = error
        })

    return [succeed, thrownError]

}