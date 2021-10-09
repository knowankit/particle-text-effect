# particle-text-effect
> Particle effect on text

[![NPM](https://img.shields.io/npm/v/particle-text-effect.svg)](https://www.npmjs.com/package/particle-text-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## Intro

<p align="center">
  <img width="400" src="https://github.com/knowankit/particle-text-effect/blob/develop/demo.gif">
</p>

## Install

```bash
npm install particle-text-effect --save
```

If you prefer yarn then

```bash
yarn particle-text-effect
```

## Props

| Property      | Type | Default | Description
| ----------- | ----------- | ----------- | ----------- |
| text      | string       | 'Dummy'       | Button text      |
| type   | string        | 'bubbles'       | (bubbles, lines, fire, sunbeams, hearts, confetti) |


## Usage

Check out the [demo](https://knowankit.github.io/particle-text-effect/) to see in action

```jsx
import React from 'react'
import ParticleTextEffect from "particle-text-effect";

const ParticleText = () => {
  return <ParticleTextEffect text="Click here" type="hearts" />
}

export default ParticleText;
```

## Info

This module was bootstrapped with [build-react-npm](https://github.com/knowankit/build-react-npm).

## License

MIT © [Ankit Kumar](https://github.com/knowankit)

Support my OSS work by <a href="https://twitter.com/knowankit">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
