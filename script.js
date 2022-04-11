// Buttons
const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')

// The Grids
const grid = document.querySelector('.grid')

// The Work Grid
const workH1 = document.querySelector('#work-h1')
const workP = document.querySelector('#work-p')

// The Play Grid 
const playH1 = document.querySelector('#play-h1')
const playP = document.querySelector('#play-p')

// The Study Grid 
const studyH1 = document.querySelector('#study-h1')
const studyP = document.querySelector('#study-p')

// The Exercise Grid 
const exerciseH1 = document.querySelector('#exercise-h1')
const exerciseP = document.querySelector('#exercise-p')

// The Social Grid 
const socialH1 = document.querySelector('#social-h1')
const socialP = document.querySelector('#social-p')

// The Self Care Grid 
const selfCareH1 = document.querySelector('#self-care-h1')
const selfCareP = document.querySelector('#self-care-p')



// Daily color
daily.addEventListener('click', () => {
    // Button color
    daily.style.color = 'white'
    weekly.style.color = 'rgba(255, 255, 255, 0.425)'
    monthly.style.color = 'rgba(255, 255, 255, 0.425)'

    // Cursor
    daily.style.cursor = 'default'
    
    // Work
    workH1.innerText = '5hrs'
    workP.innerText = 'Last Week - 7hrs'

    // Play
    playH1.innerText = '1hrs'
    playP.innerText = 'Last Week - 2hrs'

    // Study
    studyH1.innerText = '0hrs'
    studyP.innerText = 'Last Week - 1hrs'

    // Exercise
    exerciseH1.innerText = '1hrs'
    exerciseP.innerText = 'Last Week - 1hrs'

    // Social
    socialH1.innerText = '1hrs'
    socialP.innerText = 'Last Week - 3hrs'

    // Self Care
    selfCareH1.innerText = '0hrs'
    selfCareP.innerText = 'Last Week - 1hrs'


    // if (h1.innerText = '5hrs') {
    //     h1.innerText = h1.innerText
    // } else {
    //     h1.innerText = ""
    // }
})



// weekly color
weekly.addEventListener('click', () => {
    // Button color
    weekly.style.color = 'white'
    daily.style.color = 'rgba(255, 255, 255, 0.425)'
    monthly.style.color = 'rgba(255, 255, 255, 0.425)'

    // Cursor
    weekly.style.cursor = 'default'
    
    // Work
    workH1.innerText = '32hrs'
    workP.innerText = 'Last Week - 36hrs'

    // Play
    playH1.innerText = '10hrs'
    playP.innerText = 'Last Week - 8hrs'

    // Study
    studyH1.innerText = '4hrs'
    studyP.innerText = 'Last Week - 7hrs'

    // Exercise
    exerciseH1.innerText = '4hrs'
    exerciseP.innerText = 'Last Week - 5hrs'

    // Social
    socialH1.innerText = '5hrs'
    socialP.innerText = 'Last Week - 10hrs'

    // Self Care
    selfCareH1.innerText = '2hrs'
    selfCareP.innerText = 'Last Week - 2hrs'
})



// Monthly color
monthly.addEventListener('click', () => {
    // Button color
    monthly.style.color = 'white'
    daily.style.color = 'rgba(255, 255, 255, 0.425)'
    weekly.style.color = 'rgba(255, 255, 255, 0.425)'

    // Cursor
    if ()
    monthly.style.cursor = 'default'
    
    // Work
    workH1.innerText = '103hrs'
    workP.innerText = 'Last Week - 128hrs'

    // Play
    playH1.innerText = '23hrs'
    playP.innerText = 'Last Week - 29hrs'

    // Study
    studyH1.innerText = '13hrs'
    studyP.innerText = 'Last Week - 19hrs'

    // Exercise
    exerciseH1.innerText = '11hrs'
    exerciseP.innerText = 'Last Week - 18hrs'

    // Social
    socialH1.innerText = '21hrs'
    socialP.innerText = 'Last Week - 23hrs'

    // Self Care
    selfCareH1.innerText = '7hrs'
    selfCareP.innerText = 'Last Week - 11hrs'
})
