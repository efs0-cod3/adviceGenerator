# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot


<div align="center"><img src="https://github.com/efs0-cod3/adviceGenerator/blob/main/src/images/advgen.gif" alt="app gif"></div>


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Repo](https://your-solution-url.com)
- Live Site URL: [Advice Generetor live](https://efs0-cod3.github.io/adviceGenerator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The workflow while building with react is easy but you gorra know your ways arround it.

This fetch gave me a little hedache because the way that i was used to fect data wasnt working so i had to take this aproach. i tried axios and plain fetch but the winner was this try/catch.

<code>
  const [isLoading, setIsLoading] = useState(false);
  const [ advice, setAdvice ] = useState('')

  const getAdvice = async() => {
    setIsLoading(true)
    try {
      const res = await fetch(`https://api.adviceslip.com/advice/${Math.round(Math.random()*224)}`)
      const data = await res.json()
      setAdvice(data.slip)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => getAdvice(), [setAdvice])
</code>

Still have a lot to learn and in the comming projects ill be sharing my experiences.

first time adding a loading interaction and it looks good!

### Useful resources

React documentation!


## Author

- Website - [Erick Felix](https://erickfelix.netlify.app/)
- Frontend Mentor - [@efs0-cod3](https://www.frontendmentor.io/profile/efs0-cod3)
- Twitter - [@efs0_code](https://twitter.com/efs0_code)

## Acknowledgments

position relative was a killer in this one. with the dice!
