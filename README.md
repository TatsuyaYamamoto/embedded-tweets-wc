# embedded-tweets-wc

unofficial web components of embedded tweet ([Twitter Publish](https://publish.twitter.com/?query=https%3A%2F%2Ftwitter.com%2FT28_tatsuya%2Fstatus%2F1377274620923895813&widget=Tweet))

## Why

- Embedded Tweets (Twitter Publish) is very convenience way to render tweet anywhere, but low performance.
- The more you embed, the lower performance.
- It's because that each embedding loads modules such as React and renders as a React app.
- **embedded-tweets-wc** is a small web-webcomponents (brotli: 30~40 KiB) implemented with limited dependencies.

## Demo

- [sokontokoro-factory.net/activity](https://www.sokontokoro-factory.net/activity)
  - It renders 50+ embedded tweets.
