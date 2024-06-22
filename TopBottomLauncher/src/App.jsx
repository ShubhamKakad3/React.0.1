import { useRef, } from "react";

export default function App() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error occured ! Please try again.</h1>;
  }

  if (pending) {
    return <h1>Loading ! Please wait</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}





 function useFetch() {
   const ref = useRef();

   const data = [
     {
       label: "First Card",
       style: {
         width: "100%",
         height: "600px",
         background: "red",
       },
     },
     {
       label: "Second Card",
       style: {
         width: "100%",
         height: "600px",
         background: "grey",
       },
     },
     {
       label: "Third Card",
       style: {
         width: "100%",
         height: "600px",
         background: "blue",
       },
     },
     {
       label: "Fourth Card",
       style: {
         width: "100%",
         height: "600px",
         background: "green",
       },
     },
     {
       label: "Fifth Card",
       style: {
         width: "100%",
         height: "600px",
         background: "orange",
       },
     },
   ];

   function handleScrollToSection() {
     let pos = ref.current.getBoundingClientRect().top;

     window.scrollTo({
       top: pos,
       behavior: "smooth",
     });
   }

   return (
     <div>
       <h1>Scroll to a particular section</h1>
       <button onClick={handleScrollToSection}>Click To Scroll</button>
       {data.map((dataItem, index) => (
         <div
           key={dataItem.label}
           ref={index === 2 ? ref : null}
           style={dataItem.style}
         >
           <h3>{dataItem.label}</h3>
         </div>
       ))}
     </div>
   );
 }
