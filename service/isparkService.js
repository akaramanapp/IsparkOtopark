export default async function getParkList() {
    try {
        let response = await fetch(
            "https://api.ibb.gov.tr/ispark/Park", {
            method: 'GET'
        }
        );
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.log(error);
    }
}