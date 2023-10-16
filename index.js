marked.setOptions({
    breaks: true
})
const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState(`
# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
 * Item 2a
 * Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is an alt text.](/image/sample.png "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
`);
    return (
    <div className="text-center px-4">
        <h1 className="px-4">My Markdown Previewer</h1>
        <textarea name="text" 
        id="editor" rows="10" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        className="textarea"></textarea>
        <h3 className="mt-3">Output</h3>
        <Preview markdown ={text} />
    </div>
    );
}
function Preview ({markdown}) {
    return <div
    dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),
        }}
        id="preview"
    ></div>
}
ReactDOM.render(<App />, document.getElementById("root"));