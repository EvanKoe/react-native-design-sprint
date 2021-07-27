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
| Option | Mandatory? | Type | Description | Example | Default |
| --- | --- | --- | --- | --- | --- |
| imageUrl | no | string | loads an image into the Avatar | `<Avatar imageUrl="https://www.image.com" />` | 'none' |
| text | no | string | displays the first letter into the Avatar | `<Avatar text="Evan" />` | 'user' |
| connected | no | string | changes the color | `<Avatar connected="connected" />` | 'none' |
| size | no | number | Size of the Avatar (in px) | `<Avatar size={140} />` | 100 |

## Clickable
| Option | Mandatory? | Type | Description | Example | Default |
| --- | --- | --- | --- | --- | --- |
| primary | no | boolean | loads a primary prebuilt style (with primaryColor) | `<Clickable primary />` | false |
| secondary | no | boolean | same as primary | `<Clickable secondary />` | false |
| disabled | no | boolean | disables the button | `<Clickable disabled />` | false |
| primaryColor | if primary or secondary | string | set a colorbase for prebuilt style | `<Clickable primaryColor='#000'` | colors.red700 |
| callback | no | () => void | onPress function | `<Clickable callback={() => function()} />` | console.log('You clicked here !') |
| textStyle | no | StyleProp<TextStyle> | applies a style for the button's text | `<Clickable textStyle={{ color: '#fff' }} />` | { } |
| iconStyle | no | StyleProp<TextStyle> | applies a style for the button's icon | same as textStyle | { } |
| style | no | StyleProp<ViewStyle> | applies a style for the button | same as textStyle | { } |
| icon | no | string | icon name for AntDesign icons | `<Clickable icon='codesquareo' />` | 'codesquareo' |
| iconSize | no | number | icon size | `<Clickable iconSize={24} />` | 24 |
| iconColor | no | string | icon color | `<Clickable iconColor='#000' />` | colors.black |
| text | no | string | button text | `<Clickable text='Click here !' />` | 'Click here' |
| shadow | no | string | displays a cheated bordered shadow | `<Clickable shadow='left-top' />` | 'none' |
| shadowColor | no | string | shadow's color | `<Clickable shadowColor='#000' />` | colors.grey60 |
