const MESSAGES = Object.freeze({
  test: 'Test 1 2 3!',
});

function log(messageKey) {
  let message = MESSAGES[messageKey];

  if (message) {
    console.log(message);
  } else {
    console.error(`Unknown message key: '${messageKey}'.`);
  }
}

log('test');
