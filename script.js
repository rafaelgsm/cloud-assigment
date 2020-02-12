
var streets = []

const loadData = () => {
    console.log("get!");

    fetch(`https://rafaelgsm.wmdd4950.com/app/streets`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            streets = data

            loadStreets()
        })
        .catch(error => {
            console.error(error.message);
        });

}

const loadStreets = () => {
    let list = document.getElementById("list_street")

    streets.forEach(item => {


        let row = document.createElement("p");
        var node = document.createTextNode(item.Name);
        row.appendChild(node);

        list.append(row)

        row.addEventListener('click', (e) => {

            clickItem(e.target.innerHTML)

        })

    })
}

const clickItem = (name) => {
    fetch(`https://rafaelgsm.wmdd4950.com/app/streets/${name}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            showAddresses(data)

        })
        .catch(error => {
            console.error(error.message);
        });
}

const showAddresses = (addressList) => {

    let setlected_street = document.getElementById("setlected_street")
    setlected_street.innerHTML = ''

    addressList.forEach(a => {

        let row = document.createElement("div");
        var node = document.createTextNode(`${a.Number} ${a.Name}`);

        setlected_street.appendChild(node);
        setlected_street.appendChild(document.createElement("br"));

    })







}
