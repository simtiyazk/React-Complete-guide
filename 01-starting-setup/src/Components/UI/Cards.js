import './cards.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;

// props.children are technically called as Composition, and this is basically used when you wants make a parent html control(for eg: div) as custom component and all the components under it must made as children props
// {classes} are defined as expression so as to invoke/work all the respective classNames wherever this Composition is been used