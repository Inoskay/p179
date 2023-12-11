let coordinates = {}

$(document).ready(function () {
    get_coordinates()
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        //split the values of source and destination in respective corrdinates
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]

    } else {
      alert("Coordinates not selected! Page will go back.")
        window.history.back();
    }
}