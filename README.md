DesignSprint is a little component library I made while I was learning React Native.
> This library has not been tested on IOS ! I cannot guarantee the result on IOS for the time being !

# DesignSprint
This react native library offers some components to make mobile coding faster with prebuilt and fully-personnalizable widgets.

Here is a list of the widgets:
- Avatar (utilisateur) :
- Clickable (bouton) :
- colors (a full package of colors) :
- Dropdown (a button which displays a list on click) :
- Form (login form) :
- Input (a text input) :
- Layout (an default app layout) :
- Spacer (a horizontal or vertical spacer) :
- Title (a very big text) :

# Installation

TO ADD

# How to use
This lib's components are used the same way than react-native's ones :
```js
import { Avatar, Title } from 'react-design-sprint';

const App = () => {
  return (
    <Title> My title </Title>
    <Avatar text='My avatar' />
  )
}

export default App;
```

# Components' options
## Avatar
| Option | Mandatory | Type | Description | Example | Default |
| --- | --- | --- | --- | --- | --- |
| imageUrl | no | string | loads an image into the Avatar | `<Avatar imageUrl="https://www.image.com" />` | 'none' |
| text | no | string | displays the first letter into the Avatar | `<Avatar text="Evan" />` | 'user' |
| connected | no | string | changes the color :
- connected: colors.fadeGreenDark,
- busy: colors.grey600,
- none: colors.fadeRedDark
| `<Avatar connected="connected" />` | 'none' |