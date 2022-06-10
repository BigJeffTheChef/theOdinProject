// constants
const REGEX_NAME = /^[A-Za-z]+$/; // letters only, 1 word
const REJECT_NAME = 'Letters only, 1 word.';
const REGEX_EMAIL = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const REJECT_EMAIL = 'Entered email invalid';
const REGEX_PHONE_NUMBER = /\d{6,}/;
const REJECT_PHONE_NUMBER = 'Your phone number must be at least 6 digits';

// elements
const firstName = document.getElementById('first-name');
const firstNameMsg = document.getElementById('first-name-message');

const lastName = document.getElementById('last-name');
const lastNameMsg = document.getElementById('last-name-message');

const email = document.getElementById('email');
const emailMsg = document.getElementById('email-message');

const phoneNumber = document.getElementById('phone-number');
const phoneNumberMsg = document.getElementById('phone-number-message');

const password = document.getElementById('password');
const passwordMsg = document.getElementById('password-message');

const passwordConfirm = document.getElementById('password-confirm');
const passwordConfirmMsg = document.getElementById('password-confirm-message');

// event listeners
const EVENT = 'keyup';
firstName.addEventListener(EVENT, () => validate(firstName, firstNameMsg, REGEX_NAME, REJECT_NAME));
lastName.addEventListener(EVENT, () => validate(lastName, lastNameMsg, REGEX_NAME, REJECT_NAME));
email.addEventListener(EVENT, () => validate(email, emailMsg, REGEX_EMAIL, REJECT_EMAIL));
phoneNumber.addEventListener(EVENT, () => validate(phoneNumber, phoneNumberMsg, REGEX_PHONE_NUMBER, REJECT_PHONE_NUMBER));
password.addEventListener(EVENT, () => validatePasswords());
passwordConfirm.addEventListener(EVENT, () => validatePasswords());

function validateAll() {
    console.log("doin it");
    validate(firstName, firstNameMsg, REGEX_NAME, REJECT_NAME);
    validate(lastName, lastNameMsg, REGEX_NAME, REJECT_NAME);
    validate(email, emailMsg, REGEX_EMAIL, REJECT_EMAIL);
    validate(phoneNumber, phoneNumberMsg, REGEX_PHONE_NUMBER, REJECT_PHONE_NUMBER);
    validatePasswords();
};

validateAll();
setInterval(() => validateAll(), 1000);

// validation functions

/**
 * Validate a first or last name
 * @param {input text element} inputField 
 * @param {p element} messageField
 * @param {regex} regex
 * @param {String} rejectMsg
 */
function validate(inputField, messageField, regex, rejectMsg) {
    const inputStr = inputField.value;

    // if empty no style
    if (inputStr.length === 0) {
        inputField.classList.remove('valid');
        inputField.classList.remove('invalid');
        messageField.textContent = '';
        return;
    }
    // if valid valid style
    const match = inputStr.match(regex);
    if (match != null && match.length === 1) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
        messageField.textContent = '';
    }
    // if invalid invalid style
    if (match == null || match.length != 1) {
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');
        messageField.textContent = rejectMsg;


    }
}

/**
 * Validate both password fields
 */
function validatePasswords() {

    const REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 8 chars, 1 letter, 1 number

    const confirmed = password.value === passwordConfirm.value;
    const requirements = password.value.match(REGEX) != null;

    // accepted
    if (confirmed && requirements) {
        passwordMsg.textContent = "passwords accepted";
        password.classList.add('valid');
        password.classList.remove('invalid');
        passwordConfirm.classList.add('valid');
        passwordConfirm.classList.remove('invalid');
        passwordMsg.textContent = '';
        passwordConfirmMsg.textContent = '';
        return;
    }

    // both fields empty
    if (password.value.length === 0 && passwordConfirm.value.length === 0) {
        password.classList.remove('valid');
        password.classList.remove('invalid');
        passwordConfirm.classList.remove('valid');
        passwordConfirm.classList.remove('invalid');
        passwordMsg.textContent = '';
        passwordConfirmMsg.textContent = '';
        return;
    }

    // if requirements failed
    if (!requirements) {
        passwordMsg.textContent = 'Minimum eight characters, at least one letter and one number';
        password.classList.add('invalid');
        password.classList.remove('valid');
    } else {
        passwordMsg.textContent = '';
        password.classList.add('valid');
        password.classList.remove('invalid');
    }

    // if password not confirmed
    if (!confirmed) {
        passwordConfirmMsg.textContent = 'Passwords do not match';
        passwordConfirm.classList.remove('valid');
        passwordConfirm.classList.add('invalid');
    } else {
        passwordConfirmMsg.textContent = '';
        passwordConfirm.classList.add('valid');
        passwordConfirm.classList.remove('invalid');
    }
}
