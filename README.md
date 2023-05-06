![@productdevbook/avvvatars](https://github.com/0fatihyildiz/avvvatars-vue/raw/main/Thumbnail.png)

[![npm version](https://badge.fury.io/js/avvvatars-vue.svg)](https://badge.fury.io/js/avvvatars-vue)
[![npm](https://img.shields.io/npm/dt/avvvatars-vue.svg)](https://www.npmjs.com/package/avvvatars-vue)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/avvvatars-vue.svg)](https://bundlephobia.com/result?p=avvvatars-vue)
![npm](https://img.shields.io/npm/l/avvvatars-vue.svg)

Main Repository - [Avvvatars](https://github.com/nusu/avvvatars)

# Avvvatars

Beautifully crafted unique avatar placeholder for your next vue project

Lightweight and customizable ❤️

https://user-images.githubusercontent.com/1702215/158075475-c23004ab-827a-45ad-bdba-aee29ac5b582.mp4

[Live Demo 🧩](https://avvvatars-demo-nusualabuga.vercel.app/) | [Website 🧘‍♀️](https://avvvatars.com)

Built by [Nusu Alabuga](https://twitter.com/nusualabuga) and [Oguz Yagiz Kara](https://twitter.com/oguzyagizkara)

Vue3 Converted by [Fatih Yildiz](https://twitter.com/0fatihyildiz)

🙏 Special thanks to [Monika Michalczyk](https://www.monikamichalczyk.com/) for awesome shapes 🙏

## Installation

**With pnpm**

```js
pnpm i avvvatars-vue
```

**With yarn**

```js
yarn add avvvatars-vue
```

**With npm**

```js
npm install avvvatars-vue
```

## Getting Started

Import Avvvatars to your app, then use it anywhere you want.

```jsx
import { Avvvatars } from 'avvvatars-vue'
import 'avvvatars-vue/style'
```

## Customization

### `value: string`

This is required for plugin to work, each value generates a random avatar to unique to this value, so each time plugin renders, you will get the same results. 

```jsx
<Avvvatars value="best_user@gmail.com" />
```

### `display-value?: string`

Override default text by providing display-value

for example if you provide `value=”best_user@gmail.com”` the character output will be the first 2 letters of value which is “BE”, if you pass `displayValue=”BU”` you can override it to **BU**

```jsx
<Avvvatars value="best_user@gmail.com" display-value="BE" />
```

### `variant?: character | shape  (default character)`

Use shape or character as avatar.

```jsx
<Avvvatars value="best_user@gmail.com" variant="character" />
```

### `size?: number  (default 32)`

Override default size (32px) by providing a number.

```jsx
<Avvvatars value="best_user@gmail.com" :size="32" />
```

### `shadow?: boolean  (default false)`

Enable shadow around the avatar.

```jsx
<Avvvatars value="best_user@gmail.com" :shadow="false" />
```

### `radius?: number` (default [size](https://github.com/nusu/avvvatars#size-number--default-32))

Override the radius of the avatar, it takes `size` by default to always turn it to a circle

```jsx
<Avvvatars value="best_user@gmail.com" :radius="10" />
```

### `border?: boolean  (default false)`

Toggle border

```jsx
<Avvvatars value="best_user@gmail.com" border="false" />
```

### `border-size?: number  (default 2)`

Override border width

```jsx
<Avvvatars value="best_user@gmail.com" border-size="2" />
```

### `border-color?: string  (default #fff)`

Override border color

```jsx
<Avvvatars value="best_user@gmail.com" border-color="#fff" />
```

## License

MIT
