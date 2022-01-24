const WhoAreYou = (props) => { // properties
  console.log("what are props?", props)
  return (<div>who are you {props.name}</div>);
}

export default WhoAreYou;

// WhoAreYou("some prop");