const textArea = document.getElementById('input-text');
const decryptButton = document.getElementById('decrypt-btn');
const answerArea = document.getElementById('answer-area');

function aliceDecrypt(message) {
  const decryptedMsg = [message[0]];
  for (let i = 1; i < message.length; i++) {
    if (message[i] === decryptedMsg[decryptedMsg.length - 1]) {
      decryptedMsg.pop();
    } else {
      decryptedMsg.push(message[i]);
    }
  }
  answerArea.innerText = decryptedMsg.join('');
  return decryptedMsg.join('');
}

decryptButton.addEventListener('click', () => {
  aliceDecrypt(textArea.value);
});
