import register from "preact-custom-element";

import EmbeddedTweet from "./EmbeddedTweet";

register(EmbeddedTweet, "embedded-tweet", [], { shadow: true });
