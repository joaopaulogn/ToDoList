// Variables for DOM manipulation
const $input = document.querySelector('.inputTask');
const $btn = document.querySelector('.btn');
const $list = document.querySelector('.list');

// Functions activated by events
// Add a task by click
function handleClick() {
    if ($input.value === '') {
        document.querySelector('.alert')
        .innerText = 'Please, type some text.'
    } else {
        document.querySelector('.alert')
        .innerText = '';

        $list.classList.add('active');
        createElements($input.value);
    }

    $input.value = '';
    $input.focus();
}

// Add a task by enter key
function handleKey(e) {
    if (e.code === 'Enter') handleClick();
}

// Marks the task as complete
function handleCheck() {
    const _text = this.previousElementSibling;
    const _item = this.parentElement.parentElement;

    if (this.checked) {
        // That strikes the text selected
        _text.classList.add('checked');
        // That insert the element checked on the last position
        $list.insertBefore(_item, $list.lastElementChild.nextElementSibling);
        // That set the checkbox as selected
        this.setAttribute('checked', true);
    } else {
        _text.classList.remove('checked');
        this.removeAttribute('checked');
    }
}

// Delete the complete tasks
export function handleClose() {
    const _div = this.parentElement;

    if ($list.children.length === 1) {
        $list.classList.remove('active');
    }
    _div.remove();
}

// Responsible function by create the dynamic elements
function createElements(text) {
    const inputClass = 'checkbox';
    const btnClass = 'btnClose';

    $list.innerHTML += `
        <div class="listBox">
            <li class="item">
                <span>${text}</span>
                <input type="checkbox" class="${inputClass}">
            </li>
            <button type="submit" class="${btnClass}">X</button>
        </div>`

    const _input = document.querySelectorAll(`.${inputClass}`);
    const _btn = document.querySelectorAll(`.${btnClass}`);

    _input.forEach(input => input.addEventListener('click', handleCheck));
    _btn.forEach(btn => btn.addEventListener('click', handleClose));

}

// Events
$input.addEventListener('keyup', handleKey);
$btn.addEventListener('click', handleClick);
