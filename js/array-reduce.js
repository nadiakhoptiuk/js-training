const tweets = [
  { user: "user1", tags: ["js", "css", "c++"] },
  { user: "user2", tags: ["css", "html"] },
  { user: "user3", tags: ["css", "html", "c++", "java"] },
  { user: "user2", tags: ["js", "css", "html"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// const countOfTweets = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }
//   acc[tag] = 1;

//   return acc;
// }, {});

const countOfTweets = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);

console.log(countOfTweets);
