function profileTemplate({id, first_name, last_name, gender, bio, favorite_color, profile_image, buzzword}) {
    let favorite_color_class = favorite_color.toLowerCase();

  bio = capitalizeSentences(bio)
  buzzword = capitalizeSentences(buzzword)

    const template = `
     <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img class="w-32 h-32 rounded-full mx-auto" src="${profile_image}" alt="Profile picture">
            <h2 class="text-center text-2xl font-semibold mt-3">${first_name} ${last_name}</h2>
            <p class="text-center text-gray-600 mt-1">${buzzword}</p>
           
            <div class="mt-5">
              <p class="text-fuscia-600 mt-2">${bio}</p>
            </div>

            <div class="mt-3 flex">
              <p class="font-semibold  mr-2">Favorite Color: </p>
              <p class="  text-${favorite_color_class}-600"> ${favorite_color}</p>
            </div>

            <div class="mt-3 flex">
              <p class="font-semibold  mr-2">Gender: </p>
              <p class="text-gray-600" >${gender}</p>
            </div>


            <div class="mt-3 flex">
              <p class="font-semibold  mr-2">User ID: </p>
              <p class="text-gray-600" >${id}</p>
            </div>
    `

    return template
}

function capitalizeSentences(inputString) {
    const sentences = inputString.split('. ');
  
    const capitalizedSentences = sentences.map((sentence) => {
      sentence = sentence.trim();
  
      if (sentence.length > 0) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      } else {
        return '';
      }
    });
  

    const resultString = capitalizedSentences.join('. ');
  
    return resultString;
  }

export {profileTemplate}