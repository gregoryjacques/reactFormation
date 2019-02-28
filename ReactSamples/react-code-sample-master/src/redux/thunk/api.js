
function fakeApiCall(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject();
      }
    }, 2500);
  });
}

export default fakeApiCall;