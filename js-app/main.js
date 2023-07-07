import { BeanForm } from "./BeanForm.js";

const url = "https://localhost:5001/api/beanvariety/";

const beanViewButton = document.querySelector("#viewBeans");
const beanListContainer = document.querySelector("#beanList")
const beanFormContainer = document.querySelector("#beanForm")
beanFormContainer.innerHTML = BeanForm()

beanViewButton.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            let html = "<ul>"

            const arrayOfVarieties = beanVarieties.map(obj => ({ ...obj }))

            arrayOfVarieties.forEach(variety => {
                html += `<li>${variety.name} - ${variety.notes}</li>`
            });

            html += "</ul>"

            beanListContainer.innerHTML = html
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

export const PostBean = (newBeanVariety) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBeanVariety)
    }

    return fetch(url, fetchOptions)
        .then(response => response.json())
}