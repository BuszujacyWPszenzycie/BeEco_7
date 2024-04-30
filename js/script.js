import {
	plasticNo,
	plasticYes,
	glassNo,
	glassYes,
	paperNo,
	paperYes,
	bioNo,
	bioYes,
	mixedNo,
	mixedYes,
	electoYes,
	electroNo,
	largeNo,
	largeYes,
} from './database.js'

const hamburgerBtn = document.querySelector('.header__mobile--hamburger')
const headerBottomIcon = document.querySelector('.header__mobile--iconBottom')
const navMobile = document.querySelector('.nav__mobile')
const allSpanBottom = document.querySelectorAll('.header__desktop--spanBottom')
const allSegregateIconsWrappers = document.querySelectorAll('.segregate__mobile--iconWrapper')
const allSegregateIcons = document.querySelectorAll('.segregate__mobile--icon')
const allSegregateTitles = document.querySelectorAll('.segregate__mobile--title')
const allSegregateDescriptions = document.querySelectorAll('.segregate__mobile--descritpion')
const allMobileTables = document.querySelectorAll('.segregate__mobile--table')
const allMobileTablesFront = document.querySelectorAll('.segregate__mobile--front')
const allMobileTablesBack = document.querySelectorAll('.segregate__mobile--back')
const allMobileTablesList = document.querySelectorAll('.segregate__mobile--list')
const allDesktopItems = document.querySelectorAll('.segregate__desktop--item')
const allDesktopItemsTitles = document.querySelectorAll('.segregate__desktop--title')
const allDesktopItemsShadows = document.querySelectorAll('.segregate__desktop--shadow')
const allSegregateItemsWrapper = document.querySelectorAll('.segregate__desktop--itemWrapper')

document.addEventListener('DOMContentLoaded', function () {
	// Get all <span> elements within the container
	const spans = document.querySelectorAll('#container span')

	// Function to add class with delay
	function addClassWithDelay(spanElement, className, delay) {
		setTimeout(() => {
			spanElement.classList.add(className)
		}, delay)
	}

	// Loop through each <span> element and add class with delay
	allSpanBottom.forEach((span, index) => {
		// Calculate delay for each span (1 second delay per span)
		const delay = (index + 1) * 1000 // index + 1 to start delay from 1 second onwards

		// Add class 'your-class-name' with calculated delay
		addClassWithDelay(span, 'active-spanBottom', delay)
	})
})

// Funcion for opening NAV__MOBILE

const showMobileNavFunction = () => {
	hamburgerBtn.classList.toggle('is-active')
	headerBottomIcon.classList.toggle('header-bottom-icon-rotate')
	navMobile.classList.toggle('nav-mobile-is-active')
}

// Funcion for checking selected segregate icon

const checkWhatSegregateIconClickedFunction = e => {
	if (e.target === allSegregateIconsWrappers[0] || e.target === allSegregateIcons[0]) {
		removeAcitveClassesFromSegregateIconsFunction()
		clearAllSegregateList()
		allSegregateIcons[0].classList.add('icon-active')
		allSegregateIconsWrappers[0].classList.add('iconWrapper-active')
		allSegregateTitles[0].classList.add('icon-active')
		allSegregateDescriptions[0].classList.add('icon-active')
		createYesListFunctionMobile(plasticYes)
		createNoListFunctionMobile(plasticNo)
	} else if (e.target === allSegregateIconsWrappers[1] || e.target === allSegregateIcons[1]) {
		removeAcitveClassesFromSegregateIconsFunction()
		clearAllSegregateList()
		allSegregateIcons[1].classList.add('icon-active')
		allSegregateIconsWrappers[1].classList.add('iconWrapper-active')
		allSegregateTitles[1].classList.add('icon-active')
		allSegregateDescriptions[1].classList.add('icon-active')
		createYesListFunctionMobile(paperYes)
		createNoListFunctionMobile(paperNo)
	} else if (e.target === allSegregateIconsWrappers[2] || e.target === allSegregateIcons[2]) {
		removeAcitveClassesFromSegregateIconsFunction()
		clearAllSegregateList()
		allSegregateIcons[2].classList.add('icon-active')
		allSegregateIconsWrappers[2].classList.add('iconWrapper-active')
		allSegregateTitles[2].classList.add('icon-active')
		allSegregateDescriptions[2].classList.add('icon-active')
		createYesListFunctionMobile(glassYes)
		createNoListFunctionMobile(glassNo)
	} else if (e.target === allSegregateIconsWrappers[3] || e.target === allSegregateIcons[3]) {
		removeAcitveClassesFromSegregateIconsFunction()
		clearAllSegregateList()
		allSegregateIcons[3].classList.add('icon-active')
		allSegregateIconsWrappers[3].classList.add('iconWrapper-active')
		allSegregateTitles[3].classList.add('icon-active')
		allSegregateDescriptions[3].classList.add('icon-active')
		createYesListFunctionMobile(bioYes)
		createNoListFunctionMobile(bioNo)
	} else if (e.target === allSegregateIconsWrappers[4] || e.target === allSegregateIcons[4]) {
		removeAcitveClassesFromSegregateIconsFunction()
		clearAllSegregateList()
		allSegregateIcons[4].classList.add('icon-active')
		allSegregateIconsWrappers[4].classList.add('iconWrapper-active')
		allSegregateTitles[4].classList.add('icon-active')
		allSegregateDescriptions[4].classList.add('icon-active')
		createYesListFunctionMobile(mixedYes)
		createNoListFunctionMobile(mixedNo)
	} else if (e.target === allSegregateIconsWrappers[5] || e.target === allSegregateIcons[5]) {
		removeAcitveClassesFromSegregateIconsFunction()
		clearAllSegregateList()
		allSegregateIcons[5].classList.add('icon-active')
		allSegregateIconsWrappers[5].classList.add('iconWrapper-active')
		allSegregateTitles[5].classList.add('icon-active')
		allSegregateDescriptions[5].classList.add('icon-active')
		createYesListFunctionMobile(electoYes)
		createNoListFunctionMobile(electroNo)
	} else if (e.target === allSegregateIconsWrappers[6] || e.target === allSegregateIcons[6]) {
		removeAcitveClassesFromSegregateIconsFunction()
		clearAllSegregateList()
		allSegregateIcons[6].classList.add('icon-active')
		allSegregateIconsWrappers[6].classList.add('iconWrapper-active')
		allSegregateTitles[6].classList.add('icon-active')
		allSegregateDescriptions[6].classList.add('icon-active')
		createYesListFunctionMobile(largeYes)
		createNoListFunctionMobile(largeNo)
	}
}

// Create YES list function - mobile

const createYesListFunctionMobile = listOfYes => {
	allMobileTablesFront[0].classList.add('hide-front')
	allMobileTablesBack[0].classList.add('show-back')
	listOfYes.forEach(yesItem => {
		const newLiItem = document.createElement('li')
		newLiItem.textContent = yesItem
		newLiItem.classList.add('segregate__mobile--li')
		allMobileTablesList[0].appendChild(newLiItem)
	})
}

// Create NO list function - mobile

const createNoListFunctionMobile = listOfNo => {
	allMobileTablesFront[1].classList.add('hide-front')
	allMobileTablesBack[1].classList.add('show-back')
	listOfNo.forEach(noItem => {
		const newLiItem = document.createElement('li')
		newLiItem.textContent = noItem
		newLiItem.classList.add('segregate__mobile--li')
		allMobileTablesList[1].appendChild(newLiItem)
	})
}

// Clear all lists - mobile

const clearAllSegregateList = () => {
	allMobileTablesList.forEach(table => {
		table.innerHTML = ''
	})
}

// Remove active classes from icons

const removeAcitveClassesFromSegregateIconsFunction = () => {
	allSegregateIcons.forEach(icon => {
		icon.classList.remove('icon-active')
	})
	allSegregateIconsWrappers.forEach(icon => {
		icon.classList.remove('iconWrapper-active')
	})
	allSegregateTitles.forEach(icon => {
		icon.classList.remove('icon-active')
	})
	allSegregateDescriptions.forEach(icon => {
		icon.classList.remove('icon-active')
	})
}

const name = params => {}

// Remove active from desktop items

function removeActiveClassesFromDesktop() {
	allDesktopItems.forEach(item => {
		item.classList.remove('item-active')
		const shadow = item.querySelector('div')
		const title = item.querySelector('h3')
		shadow.classList.remove('shadow-active')
		title.classList.remove('title-active')
		const segregateDesktopLi = document.querySelectorAll('.segregate__desktop--li')
		segregateDesktopLi.forEach(li => {
			li.classList.remove('li-active')
		})
	})
}

// Event Listeners
hamburgerBtn.addEventListener('click', showMobileNavFunction)
allSegregateIconsWrappers.forEach(iconWrapper => {
	iconWrapper.addEventListener('click', checkWhatSegregateIconClickedFunction)
})

allDesktopItems.forEach(item => {
	item.addEventListener('click', () => {
		removeActiveClassesFromDesktop()
		item.classList.add('item-active')
		const shadow = item.querySelector('div')
		const title = item.querySelector('h3')
		shadow.classList.add('shadow-active')
		title.classList.add('title-active')
		const segregateDesktopLi = document.querySelectorAll('.segregate__desktop--li')
		segregateDesktopLi.forEach(li => {
			li.classList.add('li-active')
		})
	})
})
