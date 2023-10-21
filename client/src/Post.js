function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/11/ftx-broken-on-fire.jpg?w=730&crop=1://techcrunch.com/2023/10/19/third-point-managing-directors-testimony-at-sbf-trial-doubled-down-on-investor-fraud/"
          alt="someImage"
        />
      </div>
      <div className="texts">
        <h2>
          Third Point managing director doubles down on SBF investor fraud in
          trial testimony
        </h2>
        <p className="info">
          <a className="author">author name</a>
          <time>2023-21-10 15:31</time>
        </p>
        <p className="summary">
          Robert Boroujerdi, managing director at Third Point, testified on
          Thursday at Sam Bankman-Fried’s trial in assistance with the
          government’s case to try and find the defendant guilty on seven counts
          related to fraud and money laundering.
        </p>
      </div>
    </div>
  );
}

export default Post;
