import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";

export function App() {
   return (
        <div>
          <Header />
          <Post 
            author="Luiz Fernando" 
            content="Lorem Ipsum dolor sit amet consectetur adipiscing elit." />
          
          <Post 
            author="Letícia" 
            content="Hello people!" />
          
        </div>    
   )
}

