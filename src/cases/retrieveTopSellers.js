import { api_key, api_url } from "../utils/config"

export async function retrieveTopSellers(selectedCategory, setTopSellers, setLoading) {
    setLoading(true)
    let top_sellers_snapshot = await fetch(`${api_url}lists/current/${selectedCategory.list_name_encoded}.json?api-key=${api_key}`)

    let result = await top_sellers_snapshot.json();

    // console.log(result.results)
    setTopSellers(result.results)
    setLoading(false)
}