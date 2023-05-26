import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Blog />
    </div>
  );
}

function Blog() {
  return (
    <div>
      <Post title="An update" body="It's been a while since I posted..." />
      <Post title="My new blog" body="I am starting a new blog!" />
    </div>
  );
}

function Post({ title, body }) {
  return (
    <div>
      <PostTitle title={title} />
      <PostBody body={body} />
      <hr></hr>
    </div>
  );
}

function PostTitle({ title }) {
  return <h1>{title}</h1>;
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
