import Fire from "../utils/Fire"

export async function deleteDocument(collection, document) {

    var succeed = null
    var thrownError = null

    await Fire.deleteDocument(collection, document)
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