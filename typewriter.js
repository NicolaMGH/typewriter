const sentence = "hello there from lighthouse labs";

const typeWriter = (sentence) => {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay += 50);
  };
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay += 1);
}

typeWriter(sentence);