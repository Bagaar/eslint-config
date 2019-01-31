const MESSAGES = {
  test: 'Test 1 2 3!',
};

function log(messageKey) {
  let message = MESSAGES[messageKey];

  if (message) {
    window.console.log(message);
  } else {
    window.console.error(`Unknown message key: '${messageKey}'.`);
  }
}

log('test');
