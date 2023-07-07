import { PostBean } from "./main.js"

const beanFormContainer = document.querySelector("#beanForm")

export const BeanForm = () => {
    return `
        <div class="field" style="margin: 10px;">
            <label class="label" for="beanName">Name</label>
            <input type="text" name="beanName" class="input" />
        </div>
        <div class="field" style="margin: 10px;">
            <label class="label" for="beanRegion">Region</label>
            <input type="text" name="beanRegion" class="input" />
        </div>
        <div class="field" style="margin: 10px;">
            <label class="label" for="beanNotes">Notes</label>
            <input type="text" name="beanNotes" class="input" />
        </div>


        <button style="margin: 10px;" class="form__submit" id="submitForm">Add Bean Variety</button>
    `
}

beanFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitForm") {

        // Grab what the user typed into the form fields
        const userName = document.querySelector("input[name='beanName']").value
        const userRegion = document.querySelector("input[name='beanRegion']").value
        const userNotes = document.querySelector("input[name='beanNotes']").value

        // Make a BeanVariety object out of the user input
        const dataToSendToAPI = {
            Name: userName,
            Region: userRegion,
            Notes: userNotes
        }

        // Send the data to the API with a Post function(method)
        PostBean(dataToSendToAPI)
        console.log(`You added the bean variety ${userName}`)
    }
})