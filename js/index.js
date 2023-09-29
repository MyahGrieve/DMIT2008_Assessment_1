 import { profileTemplate } from "./template";

 let profileStore = [];

 async function getProfileData(url) {
    const response = await fetch(url)
    profileStore = [... await response.json()]

    renderProfile(profileStore)
 }

 getProfileData('../db/profiles.json')




 function renderProfile(profiles) {
    const container = document.createElement('div')

    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.innerHTML = profileTemplate(profile);
        container.appendChild(profileDiv);
    });

    document.querySelector('#cards').append(container)
 }