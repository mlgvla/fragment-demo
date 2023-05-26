import "./styles.css"


const posts = [
   { id: 1, title: "An update", body: "It's been a while since I posted..." },
   { id: 2, title: "My new blog", body: "I am starting a new blog!" },
]

export default function App() {
   return (
      <div className="App">
         <Blog />
      </div>
   )
}

function Blog() {
   return posts.map((post) => (
      <>
         <PostTitle title={post.title} />
         <PostBody body={post.body} />
      </>
   ))
}

function PostTitle({ title }) {
   return <h1>{title}</h1>
}

function PostBody({ body }) {
   return (
      <article>
         <p>{body}</p>
      </article>
   )
}
