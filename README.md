DesignSprint is a little component library I made while I was learning React Native.
> This library has not been tested on IOS ! I cannot guarantee the result on IOS for the time being !

# DesignSprint
This react native library offers some components to make mobile coding faster with prebuilt and fully-personnalizable widgets.

Here is a list of the widgets:
- Avatar (utilisateur) :
- Clickable (bouton) :
- colors (a full package of colors) :
- DropDown (a button which displays a list on click) :
- Form (login form) :
- Input (a text input) :
- Layout (an default app layout) :
- Spacer (a horizontal or vertical spacer) :
- Title (a very big text) :

# Installation
For the time being, it works only on npm (no yarn, but it'll come soon !). To install it, just type in your project folder :
```
npm i react-native-design-sprint
```
And then, import the components you want to use in your project, as you could have done for react native components :
```js
import { Avatar, Title } from 'react-native-design-sprint';
```
You're done !

# How to use
This lib's components are used the same way than react-native's ones :
```js
import { Avatar, Title } from 'react-native-design-sprint';

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
| --- | --- | --- | ------ | ------ | --- |
| imageUrl | no | string | loads an image into the Avatar | `<Avatar imageUrl="https://www.image.com" />` | 'none' |
| text | no | string | displays the first letter into the Avatar | `<Avatar text="Evan" />` | 'user' |
| connected | no | string | changes the color | `<Avatar connected="connected" />` | 'none' |
| size | no | number | Size of the Avatar (in px) | `<Avatar size={140} />` | 100 |

## Clickable
| Option | Mandatory? | Type | Description | Example | Default |
| --- | --- | --- | ------ | ------ | --- |
| primary | no | boolean | loads a primary prebuilt style (with primaryColor) | `<Clickable primary />` | false |
| secondary | no | boolean | same as primary | `<Clickable secondary />` | false |
| disabled | no | boolean | disables the button | `<Clickable disabled />` | false |
| primaryColor | if primary or secondary | string | set a colorbase for prebuilt style | `<Clickable primaryColor='#000'` | colors.red700 |
| callback | no | ( ) => void | onPress function | `<Clickable callback={() => function()} />` | console.log('You clicked here !') |
| textStyle | no | StyleProp<TextStyle> | applies a style for the button's text | `<Clickable textStyle={{ color: '#fff' }} />` | { } |
| iconStyle | no | StyleProp<TextStyle> | applies a style for the button's icon | same as textStyle | { } |
| style | no | StyleProp<ViewStyle> | applies a style for the button | same as textStyle | { } |
| icon | no | string | icon name for AntDesign icons | `<Clickable icon='codesquareo' />` | 'codesquareo' |
| iconSize | no | number | icon size | `<Clickable iconSize={24} />` | 24 |
| iconColor | no | string | icon color | `<Clickable iconColor='#000' />` | colors.black |
| text | no | string | button text | `<Clickable text='Click here !' />` | 'Click here' |
| shadow | no | string | displays a cheated bordered shadow | `<Clickable shadow='left-top' />` | 'none' |
| shadowColor | no | string | shadow's color | `<Clickable shadowColor='#000' />` | colors.grey60 |

## colors
Its a file where many colors are defined. It is used this way : `colors.COLORNAME`. For example : `colors.red900`. Refer to src/colors.tsx to see the list ! 
  
## DropDown
| Option | Mandatory? | Type | Description | Example | Default |
| --- | --- | --- | ------ | ------ | --- |
| list | yes | any | list to be displayed when button clicked | `<DropDown list={myList} />` | { } |
| title | no | string | text on the clickable | `<DropDown title='Click here' />` | 'Dropdown' |
| renderItem | yes | (item: any) => void | same as FlatList's renderItem | `<DropDown renderItem={(item) => function(item)} />` | console.log('Lol you forgot the renderItem function') |
| onOpen | no | ( ) => void | function called when dropdown is opened | `<DropDown onOpen={() => console.log('dropdown is open !')} />` | undefined |
| onClose | no | ( ) => void | function called when dropdown is closed | same as onOpen | undefined |
| style | no | StyleProp<ViewStyle> | general style | `<DropDown style={{ backgroundColor: '#212121' }} />` | { } |
| listStyle | no | same as style | style to be applied generally on the list (not on each item !) | same as style | { } |
| buttonStyle | no | same as style | style applied on the clickable | same as style | { } |
| titleStyle | no | same as style | style applied on the title (clickable's text) | same as style | { } |
  
> If you want to pass style for each item of the list, do it through your renderItem function !
  
## Form
| Option | Mandatory? | Type | Description  | Default | Example |
| --- | --- | --- | ------ | ------ | --- |
| title | no | string | title text | '' | `<Form title='Login' />` |
| mainStyle | no | StyleProp<ViewStyle> | style on main container (root) | { } | `<Form mainStyle={{ backgroundColor: '#fff8' }} />` |
| titleStyle | no | StyleProp<TextStyle> | style on title | { } | `<Form titleStyle={{ color: '#000' }} />` |
| buttonColor | no | string | color of the button | colors.black | `<Form buttonColor={colors.red400} />` |
| buttonType | no | string | primary/secondary/disabled (linked to clickable) | 'primary' | `<Form buttonType='secondary' />` |
| buttonStyle | no | StyleProp<ViewStyle> | style on button | { } | `<Form buttonStyle={{ backgroundColor: '#fff8' }} />` |
| buttonSticky | no | string | left/center.. make the button float to a side | 'none' | `<Form buttonSticky='right' />` |
| buttonShadow | no | string | none/right-top... displays a cheated shadow using borders | 'none' | `<Form buttonShadow='bottom-right-top' />` |
| buttonShadowColor | no | string | color of the shadow | colors.grey60 | `<Form buttonShadowColor={colors.dark} />` |
| style | no | StyleProp<ViewStyle> | main style | { } | `<Form style={{ backgroundColor: '#fff8' }} />` |
| callback | no | (object: any) => void | function called on submit | console.log('Form callback missing. Please add one.') | `<Form callback={() => console.log('You\'re logged in !')}/>` |
| shadow | no | string | left-bottom.. say where the shadow is | 'none' | `<Form shadow='left-bottom' />` |
| shadowColor | no | string | color of the shadow | colors.grey60 | `<Form shadowColor={colors.dark}/>` |
| borderRadius | no | number | border radius for the layout | 15 | `<Form borderRadius={20} />` |
  
## Input
| Option | Mandatory? | Type | Description  | Default | Example |
| --- | --- | --- | ------ | ------ | --- |
| type | no | string | email ? Password ? | 'text' | `<Input type='text' />` |
| placeholder | no | string | placeholder | 'Input text right here ' | `<Input | placeholder='Your email' />` |
| placeholderColor | no | string | placeholder color | colors.grey200 | `<Input placeholderColor={colors.transp400}/>` |
| style | no | StyleProp<ViewStyle> | style applied on main layout | { } | `<Input style={{ backgroundcolor: colors.red500 }} />` |
| textStyle | no | StyleProp<TextStyle> | style applied to the text | { } | same as style|
| onFinished | no | (e: string) => void | function called when submitted | console.log('You typed something !') | `<Input onFinished={(e) => console.log(e)} />` |
| onCharTyped | no | (e: string) => void | function called when a text is changed | { } | `<Input onCharTyped={(e) => console.log(e)} />` |
| required | no | boolean | tells wether this field is required or not | false | `<Input required />` |
| value | no | string | text that is typed in the entry by default | '' | `<Input value='Hi !'/>` |
| placeholderColor | no | string | placeholder's color | colors.grey200 | `<Input placeholderColor={colors.wtransp500} />` |
| noRegex | no | boolean | for email only: disables regex | false | `<Input noRegex />` |
| disabled | no | boolean | disables the entry | false | `<Input disabled />` |
  
## Layout
| Option | Mandatory? | Type | Description  | Default | Example |
| --- | --- | --- | ------ | ------ | --- |
| dark | no | boolean | enables dark background | false | `<Layout dark />` |
| title | no | string | displays a title | '' | `<Layout title='Welcome !' />` |
| titleStyle | no | StyleProp<TextStyle> | style applied on title | { } | `<Layout titleStyle={{ color: colors.grey700 }} />` |
| titleColor | no | string | title color | colors.black | `<Layout titleColor={colors.grey700} />` |
| titleSize | no | number | size (px) for font title | 50 | `<Layout titleSize={42}/>` |
| style | no | StyleProp<ViewStyle> | style applied on main layout | { } | `<Layout style={{ backgroundColor: '#0008' }} />` |
| scrollable | no | boolean | makes the layout scrollable | false | `<Layout scrollable />` |
| backgroundColor | no | string | set a custom background color | depending on dark option | `<Layout backgroundColor={colors.fadeRedDark} />` |
  
## Spacer
| Option | Mandatory? | Type | Description | Default | Example |
| --- | --- | --- | ------ | ------ | --- |
| vertical | if not horizontal | boolean | makes spacer vertical | false | `<Sapcer vertical />` |
| horizontal | if not vertical | boolean | makes spacer horizontal | false | `<Spacer horizontal />` |
| size | yes | number | size of the spacer (px) | 20 | `<Sapcer size={15} />` |
  
## Title
| Option | Mandatory? | Type | Description | Default | Example |
| --- | --- | --- | ------ | ------ | --- |
| style | no | StyleProp<TextStyle> | style applied on the text | { } | `<Title style={{ color: colors.white }} />` |
| oofsize | no | boolean | biggest size | false | `<Title oofsize />` |
| big | no | boolean | big size | false | `<Title big />` |
| medium | no | boolean | medium size | false | `<Title medium />` |
| small | no | boolean | small size | false | `<Title small />` |
| extraSmall | no | boolean | extra small size | false | `<Title extraSmall />` |
| bold | no | boolean | bold text | false | `<Title bold />` |
| font | no | string | adds custom font | undefined | `<Title font='Comic Sans' />` |
| size | no | number | set the text size (px) | 20 | `<Title size={24} />` |
| color | no | string | set the text color | colors.black | `<Title color={colors.grey200} />` |
| right | no | boolean | makes the title float right | false | `<Title right />` |
| center | no | boolean | centers the title | false | `<Title center />` |
