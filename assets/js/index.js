// Variables for DOM manipulation
const $input = document.querySelector('.inputTask');
const $btn = document.querySelector('.btn');
const $list = document.querySelector('.list');

// Functions activated by events
// Add a task by click
function handleClick() {
    if ($input.value !== '') {
        createElements($input.value);
        $list.classList.add('active');
    } else {
        const _alert = document.createElement('div');
        _alert.classList.add('alert');

        document.querySelector('.wrapper')
            .appendChild(_alert)
            .innerText = 'Please, enter some kind of word...';
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
        this.setAttribute('chekced', true);
        _text.classList.add('checked');
        $list.insertBefore(_item, $list.lastElementChild.nextElementSibling);
    } else {
        _text.classList.remove('checked');
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
                <input type="checkbox" name="checkbox" id="chekbox" class="${inputClass}">
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