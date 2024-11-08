function Card({imagelink, name, disc, buttontext , onclick=console.log("This is not the last card")}) {

  const headingcol = {
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <div className="card">
      <img src={imagelink} />
      <h2 style={headingcol}>{name}</h2>
      <p style={{ color: "red" }}>
       {disc}
      </p>
      <button 
      onClick={onclick}
      >{buttontext}</button>
    </div>
  );
}

export default Card;
