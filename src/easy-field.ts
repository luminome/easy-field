/**
 * ez-field reprise edition.
 * @param element is the target div.
 */

const easyField = (element: HTMLDivElement):void => {
    let counter = 0
    const setCounter = (count: number) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}

export {easyField as default};
